import { Suspense } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function Gate() {
  const h = await headers();
  h.get("cookie");
  redirect("/target");
}

// "Stream" escape hatch from the blocking-prerender-dynamic error.
export default function RedirectSuspense() {
  return (
    <Suspense fallback={<p>loading…</p>}>
      <Gate />
    </Suspense>
  );
}
