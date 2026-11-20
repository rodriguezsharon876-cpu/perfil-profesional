const entries = [
  { number: "01", label: "Proyectos", detail: "SHAPE · IBN · XEFF", href: "#proyectos", tone: "wine" },
  { number: "02", label: "Skills", detail: "Tecnologías y herramientas", href: "#habilidades", tone: "sand" },
  { number: "03", label: "Formación", detail: "Mi proceso de aprendizaje", href: "#formacion", tone: "light" },
  { number: "04", label: "Contacto", detail: "Hablemos de oportunidades", href: "#contacto", tone: "wine" },
];

export default function IndexSection() {
  return (
    <nav id="indice" className="index-section" aria-labelledby="index-title">
      <div className="index-shell">
        <header className="index-heading">
          <span className="section-index">NAVEGACIÓN PRINCIPAL</span>
          <div>
            <h2 id="index-title">Índice del portafolio</h2>
            <p>Accede directamente a mis proyectos, conocimientos, formación y canales de contacto.</p>
          </div>
        </header>
        <div className="index-grid">
          {entries.map((entry) => (
            <a key={entry.href} href={entry.href} className={`index-card index-${entry.tone}`}>
              <span className="index-number">{entry.number}</span>
              <div className="index-card-copy"><strong>{entry.label}</strong><small>{entry.detail}</small></div>
              <span className="index-card-link">Ver sección</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
