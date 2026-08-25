import { headers } from "next/headers";
import { redirect } from "next/navigation";

// "Block" escape hatch from the blocking-prerender-dynamic error.
export const instant = false;

export default async function RedirectBlocking() {
  const h = await headers();
  h.get("cookie");
  redirect("/target");
}
