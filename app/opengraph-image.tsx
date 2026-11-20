import { ImageResponse } from "next/og";

export const alt = "Sharon Rodríguez — Desarrolladora de software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#f0e5d3", color: "#1f1a17", padding: 72, flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
        <span>SHARON RODRÍGUEZ</span><span>BOGOTÁ · CO</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 118, lineHeight: .88, letterSpacing: -5 }}>Sede Digital</span>
        <span style={{ fontSize: 34, marginTop: 28, color: "#5a181e" }}>Desarrollo full stack · Diseño web · Datos</span>
      </div>
      <div style={{ display: "flex", width: 220, height: 12, borderRadius: 99, background: "#5a181e" }} />
    </div>,
    size,
  );
}
