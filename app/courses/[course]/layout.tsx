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
  const { course } = await params; // ✅ Await params

  const lessonsDir = path.join(
    process.cwd(),
    "app",
    "courses",
    course,
    "lessons"
  );

  if (!fs.existsSync(lessonsDir)) {
    notFound();
    return;
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
        title: data.title || file.replace(".md", ""), // fallback if no title
        order: data.order ?? 9999, // fallback if no order
      };
    })
    .sort((a, b) => a.order - b.order);

  return (
    <div className="flex gap-8 myContainer min-h-[80vh]">
      <div className="lg:max-h-[88vh] lg:sticky lg:top-26 lg:left-0">
        <CourseSidebar course={course} lessons={lessons} />
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
