"use server";

import { revalidatePath } from "next/cache";

export default async function (
  path: string,
  type?: "layout" | "page" | undefined,
) {
  revalidatePath(path, type);
}
