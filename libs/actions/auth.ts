"use server";

import { signIn, signOut } from "@/auth";

export async function signInGithub() {
  await signIn("github");
}

export async function signOutUser() {
  await signOut();
}
