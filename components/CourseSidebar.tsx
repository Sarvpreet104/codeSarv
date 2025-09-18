"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function CourseSidebar({
  course,
  lessons,
}: {
  course: string;
  lessons: { slug: string; title: string; order: number }[];
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // ✅ current URL path

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed bottom-5 left-5 z-80 p-2 bg-[var(--accent-color)] text-[var(--bg-color)] rounded-full cursor-pointer border-2 border-[var(--border-color)]"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={25} /> : <Menu size={25} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-78 lg:w-64 bg-[var(--ele-bg-color)] border-r-2 rounded-lg border-[var(--border-color)] px-2 flex flex-col gap-2 transform transition-transform duration-300 z-70 lg:z-0 shrink-0 overflow-y-auto
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <h3 className="text-xl font-semibold my-4 px-2">
          {course.toUpperCase()}
        </h3>

        {lessons.map(({ slug, title }) => {
          const href = `/courses/${course}/lessons/${slug}`;

          // ✅ true if the current path starts with the lesson URL
          const isActive = pathname === href || pathname.startsWith(href + "/"); // handle nested routes if any

          return (
            <Link
              key={slug}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-lg capitalize px-4 py-2 rounded-md transition-colors
                hover:bg-[var(--highlight-color)] hover:text-[var(--bg-color)]
                ${
                  isActive
                    ? "bg-[var(--accent-color)] text-[var(--bg-color)] font-semibold"
                    : ""
                }`}
            >
              {slug.replace(/-/g, " ")}
            </Link>
          );
        })}
      </aside>
    </>
  );
}
