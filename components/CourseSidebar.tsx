"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const CourseSidebar = ({
  course,
  lessons,
}: {
  course: string;
  lessons: { slug: string; title: string; order: number }[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed bottom-5 left-5 z-80 p-2 bg-[var(--accent-color)] text-white rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={25} /> : <Menu size={25} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-[93vh] lg:h-full w-78 lg:w-64 bg-[var(--ele-bg-color)] border-r-2 rounded-lg border-[var(--border-color)] px-2 flex flex-col transform transition-transform duration-300 z-70 lg:z-0 shrink-0 overflow-y-auto
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <h3 className="text-xl font-semibold my-4 px-2">
          {course.toUpperCase()}
        </h3>
        {lessons.map(({ slug, title }) => (
          <Link
            href={`/courses/${course}/lessons/${slug}`}
            key={slug}
            className="text-lg capitalize hover:bg-[var(--accent-color)] px-4 py-2 hover:text-[var(--bg-color)] active:bg-[var(--highlight-color)]"
            onClick={() => setOpen(false)} // close sidebar on mobile after click
          >
            {slug.replace(/-/g, " ")}
          </Link>
        ))}
      </aside>
    </>
  );
};

export default CourseSidebar;
