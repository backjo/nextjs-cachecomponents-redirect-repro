// The only difference from /redirect-suspense: a blocking ancestor layout.
export const instant = false;

export default function BlockingLayout({ children }) {
  return <section>{children}</section>;
}
