import { hero } from '../content/home.js';

// Texto con partes resaltadas: ['Tu Puente del ', { resaltado: 'Campo' }, ' al Mercado']
function Rich({ parts }) {
  return parts.map((p, i) =>
    typeof p === 'string' ? (
      <span key={i}>{p}</span>
    ) : (
      <span key={i} className="resaltado">{p.resaltado}</span>
    )
  );
}

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__dots" aria-hidden="true" />
      <div className="wrap pad hero__inner">
        <h1 className="hero__title"><Rich parts={hero.titulo} /></h1>
        <p className="hero__lead"><Rich parts={hero.bajada} /></p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contacto">{hero.cta}</a>
          <a className="btn btn--ghost" href="#Inversiones">{hero.ctaSecundario}</a>
        </div>
      </div>
    </section>
  );
}
