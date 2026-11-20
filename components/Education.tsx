"use client";

import { motion, useReducedMotion } from "motion/react";

const education = [
  {
    date: "2025",
    title: "Bachiller académico",
    institution: "Colegio Manuel Cepeda Vargas",
    text: "Educación media académica finalizada en 2025.",
  },
  {
    date: "2024",
    title: "Certificación de inglés A2",
    institution: "Centro Colombo Americano",
    text: "Formación comunicativa certificada en nivel A2.",
  },
  {
    date: "FINALIZADO · 2025",
    title: "Técnica en Programación de Software",
    institution: "SENA",
    text: "Formación en lógica de programación, desarrollo web y bases de datos.",
  },
  {
    date: "EN CURSO",
    title: "Tecnología en Análisis y Desarrollo de Software",
    institution: "SENA",
    text: "Formación en análisis, diseño, desarrollo y pruebas de soluciones de software.",
  },
];

export default function Education() {
  const reduce = useReducedMotion();

  return (
    <section id="formacion" className="education-section" aria-labelledby="education-title">
      <header className="education-heading">
        <span className="section-index">03 / MI PROCESO</span>
        <div>
          <h2 id="education-title">FORMACIÓN</h2>
          <p>Un recorrido de aprendizaje continuo que conecta comunicación, programación y desarrollo integral de software.</p>
        </div>
      </header>
      <ol className="education-timeline">
        {education.map((item, index) => (
          <motion.li
            key={item.title}
            initial={reduce ? false : { opacity: 0, transform: "translate3d(0, 24px, 0)" }}
            whileInView={reduce ? {} : { opacity: 1, transform: "translate3d(0, 0, 0)" }}
            transition={{ duration: .55, ease: [0.23, 1, 0.32, 1], delay: index * .07 }}
            viewport={{ once: true, margin: "-15%" }}
          >
            <span className="education-marker" aria-hidden="true" />
            <time>{item.date}</time>
            <h3>{item.title}</h3>
            <strong>{item.institution}</strong>
            <p>{item.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
