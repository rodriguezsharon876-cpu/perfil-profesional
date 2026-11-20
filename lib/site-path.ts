const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix public assets when the portfolio is hosted below a GitHub Pages path. */
export function withBasePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${basePath}${path}`;
}
