"use client";

import { signInGithub } from "@/libs/actions/auth";

export default function SignIn() {
  return (
    <form action={signInGithub}>
      <button
        type="submit"
        className="bg-[var(--accent-color)] rounded-full px-3 py-2 cursor-pointer hover:bg-[var(--highlight-color)] text-[var(--bg-color)] transition-all duration-300 w-fit"
      >
        Signin with GitHub
      </button>
    </form>
  );
}
