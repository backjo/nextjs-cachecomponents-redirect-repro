import { headers } from "next/headers";

// Mirrors a real auth layout: reads a runtime API at the top level, outside
// any <Suspense>, and carries the documented "block" opt-out.
export const instant = false;

export default async function DynamicLayout({ children }) {
  const h = await headers();
  h.get("user-agent");
  return <section>{children}</section>;
}
