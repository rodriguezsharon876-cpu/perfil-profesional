"use client";

import { FormEvent, useState } from "react";

type Profile = { email: string; phone: string; github: string; linkedin: string; name: string };

export default function Contact({ profile }: { profile: Profile }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Nueva oportunidad · ${data.get("name")}`);
    const body = encodeURIComponent(`Nombre: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    setSent(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <footer id="contacto" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-intro">
        <span className="section-index">04 / CONTACTO</span>
        <h2 id="contact-title">¿Construimos<br /><em>algo valioso?</em></h2>
        <p>Estoy abierta a oportunidades laborales, colaboraciones y proyectos con una intención clara.</p>
        <a href={`mailto:${profile.email}`} className="email-link">{profile.email} <span>↗</span></a>
      </div>

      <form className="contact-form" onSubmit={submit}>
        <label><span>Tu nombre</span><input name="name" type="text" autoComplete="name" required placeholder="¿Cómo te llamas?" /></label>
        <label><span>Tu correo</span><input name="email" type="email" autoComplete="email" required placeholder="hola@empresa.com" /></label>
        <label><span>Cuéntame sobre la oportunidad</span><textarea name="message" required rows={4} placeholder="Proyecto, rol o idea…" /></label>
        <button type="submit">Enviar mensaje <span aria-hidden="true">↗</span></button>
        {sent && <p className="form-note" role="status">Se abrió tu aplicación de correo con el mensaje listo para enviar.</p>}
      </form>

      <div className="footer-bar">
        <span>© 2026 {profile.name}</span>
        <div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="#inicio">Volver arriba ↑</a></div>
      </div>
    </footer>
  );
}
