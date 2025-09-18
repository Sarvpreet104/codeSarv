// app/courses/[course]/layout.tsx
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import CourseSidebar from "@/components/CourseSidebar";
import matter from "gray-matter";

export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;

  const lessonsDir = path.join(
    process.cwd(),
    "app",
    "courses",
    course,
    "lessons"
  );

  if (!fs.existsSync(lessonsDir)) {
    notFound();
  }

  const lessons = fs
    .readdirSync(lessonsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(lessonsDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: file.replace(".md", ""),
        title: data.title || file.replace(".md", ""),
        order: data.order ?? 9999,
      };
    })
    .sort((a, b) => a.order - b.order);

  return (
    <section className="lg:flex gap-8 myContainer min-h-[85vh]">
      <div className="lg:max-h-[85vh] lg:sticky lg:top-30 lg:left-0">
        <CourseSidebar course={course} lessons={lessons} />
      </div>

      <main className="block lg:flex-1 overflow-hidden contentArea">
        {children}
      </main>
    </section>
  );
}
