"use client";
import { signOut } from "@/auth";

import { signOutUser } from "@/libs/actions/auth";

export function SignOut() {
  return (
    <form action={signOutUser}>
      <button
        type="submit"
        className="bg-[var(--accent-color)] rounded-full px-4 py-2 cursor-pointer hover:bg-[var(--highlight-color)] text-[var(--bg-color)] transition-all duration-300 w-fit"
      >
        Sign Out
      </button>
    </form>
  );
}
