import { useState } from 'react';
import { fondosPesos, fondosDolares } from '../content/fondos.js';

// Los números salen de content/fondos.js: si agregás o sacás fondos, se actualizan solos.
const resumen = (lista) => ({
  admins: lista.length,
  fondos: lista.reduce((a, g) => a + g.funds.length, 0),
});

const SLIDES = [
  {
    id: 'pesos',
    tag: 'Pesos',
    title: 'Fondos en pesos',
    lead: 'Suscribís y rescatás a todos los fondos del mercado en pesos.',
    ...resumen(fondosPesos),
  },
  {
    id: 'dolares',
    tag: 'Dólares',
    title: 'Fondos en dólares',
    lead: 'Suscribís y rescatás a todos los fondos del mercado en dólares.',
    ...resumen(fondosDolares),
  },
];

export default function FondosCarrusel() {
  const [i, setI] = useState(0);
  const n = SLIDES.length;
  const s = SLIDES[i];
  const go = (d) => setI((i + d + n) % n);

  return (
    <div className="promo" role="group" aria-roledescription="carrusel" aria-label="Fondos comunes de inversión">
      <div className="promo__head">
        <div>
          <span className="eyebrow"><span aria-hidden="true" />Fondos</span>
          <h3 className="h3 serif">Fondos comunes de inversión</h3>
        </div>
        <div className="promo__nav">
          <button type="button" className="arrow" aria-label="Anterior" onClick={() => go(-1)}>←</button>
          <button type="button" className="arrow arrow--solid" aria-label="Siguiente" onClick={() => go(1)}>→</button>
        </div>
      </div>

      <div className="promo__body" aria-live="polite">
        <div className="promo__copy">
          <span className="tag">{s.tag}</span>
          <h3 className="h3 serif">{s.title}</h3>
          <p className="lead">{s.lead}</p>
          <div className="promo__dots">
            <div className="dots" role="tablist" aria-label="Elegir diapositiva">
              {SLIDES.map((x, k) => (
                <button
                  key={x.id}
                  type="button"
                  role="tab"
                  aria-selected={k === i}
                  aria-label={'Ir a ' + x.title}
                  onClick={() => setI(k)}
                />
              ))}
            </div>
            <span className="fineprint">{i + 1} de {n}</span>
          </div>
        </div>

        <div className="promo__stat card">
          <span className="promo__statLabel">Fondos disponibles</span>
          <div className="promo__statNum">{s.fondos}</div>
          <span className="fineprint">{s.admins} administradoras</span>
        </div>
      </div>

      <div className="promo__foot">
        <a className="btn btn--primary" href="#contacto">Contactate con nosotros</a>
        <p className="fineprint">Agente de Negociación. Registro CNV n° 1735</p>
      </div>
    </div>
  );
}
