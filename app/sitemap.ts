import fs from "fs";
import path from "path";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codesarv.com";

  // 1. Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
  ];

  // 2. Dynamic courses + lessons
  const coursesDir = path.join(process.cwd(), "app/courses");
  const courseDirs = fs.readdirSync(coursesDir);

  const dynamicLessons: MetadataRoute.Sitemap = courseDirs.flatMap((course) => {
    const lessonsDir = path.join(coursesDir, course, "lessons");
    if (!fs.existsSync(lessonsDir)) return [];

    const lessons = fs
      .readdirSync(lessonsDir)
      .filter((file) => file.endsWith(".md"));

    return lessons.map((lesson) => ({
      url: `${baseUrl}/courses/${course}/lessons/${lesson.replace(".md", "")}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  });

  return [...staticPages, ...dynamicLessons];
}
