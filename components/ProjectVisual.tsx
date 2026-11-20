type Props = { type: string; expanded?: boolean };

export default function ProjectVisual({ type, expanded = false }: Props) {
  if (type === "house") {
    return (
      <div className={`project-visual house-visual ${expanded ? "expanded" : ""}`} aria-label="Ilustración de un plano arquitectónico convirtiéndose en una casa" role="img">
        <svg viewBox="0 0 600 420" aria-hidden="true">
          <path className="plan-grid" d="M40 70H560M40 140H560M40 210H560M40 280H560M110 35V385M210 35V385M310 35V385M410 35V385M510 35V385" />
          <path className="house-line" d="M112 225L300 72l188 153v142H112zM214 367V244h172v123M112 225h376M259 367V274h82v93" />
          <path className="accent-line" d="M84 250L300 48l216 202" />
        </svg>
      </div>
    );
  }

  if (type === "network") {
    return (
      <div className={`project-visual network-visual ${expanded ? "expanded" : ""}`} aria-label="Ilustración de una red comunitaria de nodos conectados" role="img">
        <svg viewBox="0 0 600 420" aria-hidden="true">
          <g className="network-lines"><path d="M300 210L126 110M300 210L474 94M300 210L500 290M300 210L105 306M300 210L302 55" /><path d="M126 110L105 306M474 94L500 290" /></g>
          <g className="nodes"><circle cx="300" cy="210" r="58" /><circle cx="126" cy="110" r="24" /><circle cx="474" cy="94" r="31" /><circle cx="500" cy="290" r="22" /><circle cx="105" cy="306" r="34" /><circle cx="302" cy="55" r="18" /></g>
          <path className="network-mark" d="M272 215l19 19 42-52" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`project-visual flow-visual ${expanded ? "expanded" : ""}`} aria-label="Ilustración de un flujo operativo entre paneles de gestión" role="img">
      <svg viewBox="0 0 600 420" aria-hidden="true">
        <g className="flow-cards"><rect x="65" y="110" width="150" height="205" rx="20" /><rect x="225" y="55" width="150" height="285" rx="20" /><rect x="385" y="110" width="150" height="205" rx="20" /></g>
        <g className="flow-content"><path d="M92 148h96M92 176h62M92 229h96M92 260h74M252 93h96M252 132h66M252 185h96M252 216h96M252 267h66M412 148h96M412 176h62M412 229h96M412 260h74" /></g>
        <path className="flow-path" d="M182 345c45 34 78 44 118 44s84-16 118-44" />
      </svg>
    </div>
  );
}
