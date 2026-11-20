import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: [
    { path: "./fonts/Georgia.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Georgia-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Georgia-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const sans = localFont({
  src: [
    { path: "./fonts/NotoSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/NotoSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Sharon Rodríguez · Desarrolladora Full Stack",
    template: "%s · Sharon Rodríguez",
  },
  description:
    "Portafolio de Sharon Rodríguez, desarrolladora de software enfocada en experiencias web, aplicaciones full stack y bases de datos.",
  keywords: ["desarrolladora web", "full stack", "React", "TypeScript", "Bogotá", "portafolio"],
  authors: [{ name: "Sharon Rodríguez" }],
  openGraph: {
    title: "Sharon Rodríguez · Sede Digital",
    description: "Productos digitales con estructura, intención y detalle.",
    type: "website",
    locale: "es_CO",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f0e5d3",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
