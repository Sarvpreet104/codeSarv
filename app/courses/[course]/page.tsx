import { redirect } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function CourseHome({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;

  const lessonsPath = path.join(
    process.cwd(),
    "app",
    "courses",
    course,
    "lessons"
  );

  if (!fs.existsSync(lessonsPath)) {
    return <div>No lessons found</div>;
  }

  const lessons = fs
    .readdirSync(lessonsPath)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(lessonsPath, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);

      return {
        slug: file.replace(".md", ""),
        order: typeof data.order === "number" ? data.order : Infinity, // if no order, push to end
      };
    })
    .sort((a, b) => {
      if (a.order !== b.order) return a.order - b.order; // sort by order
      return a.slug.localeCompare(b.slug); // fallback: filename
    });

  if (lessons.length > 0) {
    redirect(`/courses/${course}/lessons/${lessons[0].slug}`);
  }

  return <div>No lessons found</div>;
}
