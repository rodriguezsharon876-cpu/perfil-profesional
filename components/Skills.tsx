"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";

type Skill = { group: string; icon: string; items: string[] };

function SkillIcon({ group }: { group: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.65, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (group === "Frontend") return <svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="12" width="48" height="36" rx="5" {...common} /><path d="M8 21h48M25 55h14M32 48v7M25 29l-6 6 6 6M39 29l6 6-6 6" {...common} /></svg>;
  if (group === "Backend") return <svg viewBox="0 0 64 64" aria-hidden="true"><rect x="9" y="10" width="46" height="13" rx="4" {...common} /><rect x="9" y="26" width="46" height="13" rx="4" {...common} /><rect x="9" y="42" width="46" height="13" rx="4" {...common} /><path d="M17 16.5h.1M17 32.5h.1M17 48.5h.1M45 16.5h3M45 32.5h3M45 48.5h3" {...common} /></svg>;
  if (group === "Datos") return <svg viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="32" cy="14" rx="20" ry="7" {...common} /><path d="M12 14v14c0 4 9 7 20 7s20-3 20-7V14M12 28v14c0 4 9 7 20 7s20-3 20-7V28" {...common} /></svg>;
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M26 38 14 50M38 26 50 14M22 42l-8-2 10-10M42 22l2-8-10 10" {...common} /><path d="M28 36c-7-7-6-17 1-24 7-7 16-7 23-7 0 7 0 16-7 23-7 7-17 8-24 1" {...common} /><circle cx="39" cy="18" r="4" {...common} /></svg>;
}

function SkillItem({ skill, index, progress, reduce }: { skill: Skill; index: number; progress: MotionValue<number>; reduce: boolean }) {
  const focus = .08 + index * .28;
  const prominence = (value: number) => {
    const distance = Math.abs(value - focus);
    if (distance <= .09) return 1;
    return Math.max(0, 1 - (distance - .09) / .14);
  };
  const opacity = useTransform(progress, (value) => .22 + prominence(value) * .78);
  const transform = useTransform(progress, (value) => {
    const amount = prominence(value);
    const y = 14 * (1 - amount);
    const scale = .92 + amount * .135;
    return `translate3d(0, ${y}px, 0) scale(${scale})`;
  });

  return (
    <motion.article
      className="skill-showcase-item"
      style={reduce ? { opacity: 1 } : { opacity, transform }}
    >
      <span className="skill-showcase-icon"><SkillIcon group={skill.group} /></span>
      <span className="skill-order">0{index + 1}</span>
      <h3>{skill.group}</h3>
      <p>{skill.items.join(" · ")}</p>
    </motion.article>
  );
}

export default function Skills({ skills }: { skills: Skill[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);
  const reduce = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const trackTransform = useTransform(scrollYProgress, (value) => {
    const amount = Math.min(1, Math.max(0, (value - .08) / .84));
    return `translate3d(-${travel * amount}px,0,0)`;
  });

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const measure = () => setTravel(Math.max(0, track.scrollWidth - viewport.clientWidth));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="habilidades" className="skills-section" aria-labelledby="skills-title">
      <div className="skills-sticky">
        <header className="skills-title-row">
          <span className="section-index">02 / CONOCIMIENTOS</span>
          <h2 id="skills-title">SKILLS</h2>
          <p>Desliza para recorrer las tecnologías que uso de principio a fin.</p>
        </header>
        <div ref={viewportRef} className="skills-viewport">
          <motion.div
            ref={trackRef}
            className="skills-showcase"
            style={reduce ? undefined : { transform: trackTransform }}
          >
            {skills.map((skill, index) => (
              <SkillItem key={skill.group} skill={skill} index={index} progress={scrollYProgress} reduce={reduce} />
            ))}
          </motion.div>
        </div>
        <div className="skills-progress" aria-hidden="true"><motion.span style={{ scaleX: scrollYProgress }} /></div>
      </div>
    </section>
  );
}
