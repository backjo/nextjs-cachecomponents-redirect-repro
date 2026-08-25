import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 40 }}>
      <h1>Home</h1>
      <p><Link href="/redirect-blocking">go to /redirect-blocking</Link></p>
      <p><Link href="/redirect-suspense">go to /redirect-suspense</Link></p>
      <p><Link href="/blocking-layout/redirect-suspense">go to /blocking-layout/redirect-suspense</Link></p>
      <p><Link href="/dynamic-layout/redirect-suspense">go to /dynamic-layout/redirect-suspense</Link></p>
      <p><Link href="/target">go to /target (control, no redirect)</Link></p>
    </main>
  );
}
