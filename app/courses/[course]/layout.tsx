import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import CourseSidebar from "@/components/CourseSidebar";

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
    .sort();

  return (
    <div className="flex myContainer min-h-[80vh]">
      <CourseSidebar course={course} lessons={lessons} />
      <main className="flex-1 pl-0 lg:pl-8">{children}</main>
    </div>
  );
}
