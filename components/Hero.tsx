"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type Profile = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
};

export default function Hero({ profile }: { profile: Profile }) {
  const reduce = useReducedMotion();
  const enter = reduce ? {} : {
    initial: { opacity: 0, transform: "translate3d(0, 30px, 0)" },
    animate: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    transition: { duration: .8, ease: [0.23, 1, 0.32, 1] as const },
  };

  const projects = [
    { name: "SHAPE", label: "Arquitectura", href: "#shape", image: "/projects/shape/casa-la-vega-01.jpg", tone: "shape" },
    { name: "IBN", label: "Comunidad", href: "#ibn", image: "/projects/ibn/portada-2026.webp", tone: "ibn" },
    { name: "XEFF", label: "Gestión", href: "#xeff", image: "/projects/xeff/salon-belleza.jpg", tone: "xeff" },
  ];

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-grain" aria-hidden="true" />
      <motion.div className="hero-kicker" {...enter}>
        <span>SHARON RODRÍGUEZ</span>
        <span>FULL STACK DEVELOPER</span>
      </motion.div>

      <motion.h1 id="hero-title" className="hero-title" {...enter}>
        <span>PERFIL</span>
        <span>PROFESIONAL</span>
        <span className="title-second"><i>SHARON</i> RODRIGUEZ</span>
      </motion.h1>

      <motion.aside id="sobre-mi" className="hero-about" aria-label="Sobre mí" {...enter}>
        <span>SOBRE MÍ</span>
        <p>{profile.summary}</p>
        <div><strong>{profile.location}</strong><small>Disponible para oportunidades</small></div>
      </motion.aside>

      <motion.aside className="hero-film" aria-label="Vistas previas de proyectos" {...enter}>
        <span className="film-holes" aria-hidden="true" />
        <div className="film-track">
          <div className="film-set">
            {projects.map((project) => (
              <a key={project.name} href={project.href} className={`film-frame film-${project.tone}`}>
                <Image src={project.image} alt={`Vista previa del proyecto ${project.name}`} fill sizes="220px" />
                <span className="film-frame-shade" aria-hidden="true" />
                <b>{project.name}</b><span>{project.label}</span>
              </a>
            ))}
          </div>
          <div className="film-set" aria-hidden="true">
            {projects.map((project) => (
              <div key={`repeat-${project.name}`} className={`film-frame film-${project.tone}`}>
                <Image src={project.image} alt="" fill sizes="220px" />
                <span className="film-frame-shade" aria-hidden="true" />
                <b>{project.name}</b><span>{project.label}</span>
              </div>
            ))}
          </div>
        </div>
        <span className="film-holes film-holes-right" aria-hidden="true" />
      </motion.aside>

      <motion.div className="portrait-wrap" {...enter}>
        <Image
          src="/images/sharon-rodriguez-new.png"
          alt="Retrato de Sharon Rodríguez, desarrolladora de software"
          width={1448}
          height={1086}
          priority
          sizes="(max-width: 768px) 62vw, 370px"
          className="portrait"
        />
        <span className="portrait-label">BASED IN<br />BOGOTÁ, CO</span>
      </motion.div>

      <a href="#proyectos" className="hero-arrow" aria-label="Explorar proyectos">
        <span>EXPLORE MY WORK</span>
        <svg viewBox="0 0 80 105" aria-hidden="true"><path d="M15 4C66 27 69 61 34 94M34 94l-3-25M34 94l24-7" /></svg>
      </a>

      <span className="hero-note" aria-hidden="true">scroll to discover ↘</span>
    </section>
  );
}
