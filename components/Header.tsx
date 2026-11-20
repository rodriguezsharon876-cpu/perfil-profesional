"use client";

import { useEffect, useState } from "react";

const links = [
  ["Inicio", "#inicio"],
  ["Índice", "#indice"],
  ["Proyectos", "#proyectos"],
  ["Skills", "#habilidades"],
  ["Formación", "#formacion"],
  ["Contacto", "#contacto"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#inicio" className="wordmark" aria-label="Ir al inicio">SR<span>°</span></a>
      <nav id="site-navigation" className={`nav-pill ${open ? "is-open" : ""}`} aria-label="Navegación principal">
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-navigation"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
      </button>
    </header>
  );
}
