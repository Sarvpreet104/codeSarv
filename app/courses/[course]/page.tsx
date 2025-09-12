import { redirect } from "next/navigation";
import fs from "fs";
import path from "path";

export default async function CourseHome({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params; // ✅ Await params

  const lessonsPath = path.join(
    process.cwd(),
    "app",
    "courses",
    course,
    "lessons"
  );

  const lessons = fs
    .readdirSync(lessonsPath)
    .filter((file) => file.endsWith(".md"))
    .sort();

  if (lessons.length > 0) {
    const firstLesson = lessons[0].replace(".md", "");
    redirect(`/courses/${course}/lessons/${firstLesson}`);
  }

  return <div>No lessons found</div>;
}
