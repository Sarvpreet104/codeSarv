import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import { unified } from "unified";

export default async function LessonPage(props: {
  params: Promise<{ course: string; lesson: string }>;
}) {
  const { course, lesson } = await props.params; // ✅ Await params here

  const filepath = `app/courses/${course}/lessons/${lesson}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
      theme: "material-theme",
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <>
      <div className="px-4 py-2 mt-4 border-l-10 border-[var(--accent-color)] bg-[var(--ele-bg-color)] rounded-r-lg">
        <h1>{data.title}</h1>
        <p className="subP italic">&quot;{data.description}&quot;</p>

        <div className="flex gap-4">
          <p>By, {data.author}</p>
          <p>{data.date}</p>
        </div>
      </div>

      <section>
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose"
        ></div>
      </section>
    </>
  );
}
