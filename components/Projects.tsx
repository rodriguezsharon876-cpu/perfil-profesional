"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type Project = {
  id: string;
  name: string;
  eyebrow: string;
  role: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  url: string;
  repoUrl: string;
  cover: string;
  gallery: string[];
  visual: string;
};

function ProjectGallery({ project }: { project: Project }) {
  const images = project.gallery.length >= 3 ? project.gallery : [project.gallery[0], project.gallery[1], project.gallery[0]];
  return (
    <div className={`project-gallery gallery-${project.id}`} aria-label={`Galería visual del proyecto ${project.name}`}>
      <figure className="project-shot shot-main">
        <div className="browser-bar"><i /><i /><i /><span>{project.name.toLowerCase()}.project</span></div>
        <div className="shot-image"><Image src={images[0]} alt={`Vista principal de ${project.name}`} fill sizes="(max-width: 700px) 85vw, 45vw" /></div>
        <figcaption>Vista principal</figcaption>
      </figure>
      <figure className="project-shot shot-detail">
        <div className="shot-image"><Image src={images[1]} alt={`Detalle visual de ${project.name}`} fill sizes="(max-width: 700px) 50vw, 24vw" /></div>
        <figcaption>Interfaz · detalle</figcaption>
      </figure>
      <figure className="project-shot shot-mobile">
        <div className="shot-image"><Image src={images[2]} alt={`Vista complementaria de ${project.name}`} fill sizes="(max-width: 700px) 32vw, 16vw" /></div>
        <figcaption>Experiencia visual</figcaption>
      </figure>
    </div>
  );
}

function ProjectScene({ project, index, total, nextId, previousId }: { project: Project; index: number; total: number; nextId?: string; previousId?: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Hold the project cover for a full beat, then let the opaque case-study
  // panel rise over it. This avoids the former text-on-text crossfade.
  const introScale = useTransform(scrollYProgress, [0, .5, .7], reduce ? [1, 1, 1] : [1, 1.02, 1.065]);
  const introOpacity = useTransform(scrollYProgress, [0, .7, .76], [1, 1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, .5, .505], [0, 0, 1]);
  const contentY = useTransform(scrollYProgress, [0, .5, .7], reduce ? [0, 0, 0] : [100, 100, 0]);
  const introPointer = useTransform(scrollYProgress, (value) => value < .54 ? "auto" : "none");
  const contentPointer = useTransform(scrollYProgress, (value) => value < .54 ? "none" : "auto");
  const introTransform = useMotionTemplate`translate3d(0, 0, 0) scale(${introScale})`;
  const contentTransform = useMotionTemplate`translate3d(0, ${contentY}%, 0)`;

  const goTo = (id?: string) => id && document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  return (
    <section ref={ref} id={project.id} className={`project-scene scene-${project.id}`} aria-labelledby={`${project.id}-title`}>
      <div className="project-stage">
        <motion.div className="project-transition" style={{ opacity: introOpacity, transform: introTransform, pointerEvents: introPointer }}>
          <Image
            src={project.cover}
            alt=""
            fill
            loading={index === 0 ? "eager" : "lazy"}
            sizes="(max-width: 700px) calc(100vw - 16px), (max-width: 1140px) calc(100vw - 40px), 1100px"
            className="project-home-image"
          />
          <div className="project-home-shade" />
          <span className="transition-kicker">PROYECTO 0{index + 1} · {project.role}</span>
          <div className="project-home-copy">
            <span>{project.visual === "house" ? "Arquitectura en movimiento" : project.visual === "network" ? "Fe, contenido y comunidad" : "Belleza, agenda y operación"}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-home-actions">
              <a href={project.url} target="_blank" rel="noreferrer">Ver proyecto <b>↗</b></a>
              <a href={project.repoUrl} target="_blank" rel="noreferrer">Código fuente <b>↗</b></a>
            </div>
          </div>
          <span className="project-scroll-cue">SCROLL PARA VER EL CASO <b>↓</b></span>
        </motion.div>

        <motion.article className="project-feature" style={{ opacity: contentOpacity, transform: contentTransform, pointerEvents: contentPointer }}>
          <div className="feature-film-edge" aria-hidden="true" />
          <div className="feature-copy">
            <span className="project-counter">0{index + 1} / 0{total}</span>
            <span className="card-label">{project.eyebrow}</span>
            <h3 id={`${project.id}-title`}>{project.name}</h3>
            <p className="feature-lead">{project.description}</p>
            <div className="feature-columns">
              <div><span>EL RETO / QUÉ SE PIDIÓ</span><p>{project.challenge}</p></div>
              <div><span>LA SOLUCIÓN / QUÉ SE CONSTRUYÓ</span><p>{project.solution}</p></div>
            </div>
            <ul className="feature-results">{project.results.map((result) => <li key={result}>{result}</li>)}</ul>
            <div className="stack-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="feature-links">
              <a className="feature-link" href={project.url} target="_blank" rel="noreferrer">Visualizar proyecto <span>↗</span></a>
              <a className="feature-link feature-link-muted" href={project.repoUrl} target="_blank" rel="noreferrer">Ver repositorio <span>↗</span></a>
            </div>
          </div>

          <ProjectGallery project={project} />

          <nav className="scene-arrows" aria-label="Cambiar proyecto">
            <button type="button" onClick={() => goTo(previousId)} disabled={!previousId} aria-label="Proyecto anterior">↑</button>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <button type="button" onClick={() => goTo(nextId)} disabled={!nextId} aria-label="Proyecto siguiente">↓</button>
          </nav>
        </motion.article>
      </div>
    </section>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  const order = ["shape", "ibn", "xeff"];
  const ordered = [...projects].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));

  return (
    <section id="proyectos" className="projects-section" aria-labelledby="projects-title">
      <header className="projects-intro">
        <span className="section-index">01 / CASOS DE ESTUDIO</span>
        <h2 id="projects-title">Cada proyecto<br /><em>tiene una historia.</em></h2>
        <p>Desliza para ver cómo una idea se convierte en una experiencia digital real.</p>
      </header>
      {ordered.map((project, index) => (
        <ProjectScene
          key={project.id}
          project={project}
          index={index}
          total={ordered.length}
          previousId={ordered[index - 1]?.id}
          nextId={ordered[index + 1]?.id}
        />
      ))}
    </section>
  );
}
