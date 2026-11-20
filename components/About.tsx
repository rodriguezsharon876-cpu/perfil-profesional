"use client";

import { motion, useReducedMotion } from "motion/react";

type Profile = { summary: string; location: string; role: string };

const timeline = [
  ["2024", "Inglés A2 · Centro Colombo Americano"],
  ["2025", "Técnica en Programación de Software · SENA"],
  ["Ahora", "Tecnología en Análisis y Desarrollo de Software · SENA"],
];

export default function About({ profile }: { profile: Profile }) {
  const reduce = useReducedMotion();
  return (
    <section id="sobre-mi" className="section about-section" aria-labelledby="about-title">
      <motion.div
        className="section-heading"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
      >
        <span className="section-index">01 / PERFIL</span>
        <h2 id="about-title">Código con criterio.<br /><em>Diseño con propósito.</em></h2>
      </motion.div>

      <div className="about-grid">
        <article className="bento-card about-copy">
          <span className="card-label">SOBRE MÍ</span>
          <p>{profile.summary}</p>
          <div className="status-line"><span className="status-dot" /> Disponible para oportunidades</div>
        </article>

        <article className="bento-card timeline-card">
          <span className="card-label">FORMACIÓN</span>
          <ol>
            {timeline.map(([year, item]) => <li key={year}><strong>{year}</strong><span>{item}</span></li>)}
          </ol>
        </article>

        <article className="bento-card location-card">
          <span className="card-label">BASE PROFESIONAL</span>
          <strong>{profile.location}</strong>
          <small>UTC −5 · Disponible para trabajo remoto</small>
        </article>
      </div>
    </section>
  );
}
