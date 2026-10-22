import { useState } from 'react';
import { marketData } from '../content/mercado.js';
import { inversiones } from '../content/site.js';

const TABS = [
  { id: 'acciones', label: 'Acciones', title: 'Top 5 · acciones' },
  { id: 'bonos', label: 'Bonos', title: 'Top 5 · bonos' },
  { id: 'cedears', label: 'Cedears', title: 'Top 5 · cedears' },
];

const riskClass = (risk) =>
  'mkt__risk mkt__risk--' +
  risk.toLowerCase().replace('bajo-medio', 'bajomedio').replace('medio-alto', 'medioalto');

export default function MercadoCapitales() {
  const [tab, setTab] = useState(null);
  const active = TABS.find((t) => t.id === tab);

  return (
    <>
      <div className="inv__note">
        <span className="inv__kicker">{inversiones.note.kicker}</span>
        <h3>{inversiones.note.title}</h3>
        <p>{inversiones.note.body}</p>
        <div className="mkt__tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-expanded={tab === t.id}
              className={'mkt__tab' + (tab === t.id ? ' is-on' : '')}
              onClick={() => setTab(tab === t.id ? null : t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="mkt">
          <div className="mkt__head">
            <span className="mkt__label">{active.title}</span>
            <button type="button" className="mkt__close" onClick={() => setTab(null)}>
              Cerrar
            </button>
          </div>
          <ul className="mkt__list">
            {marketData[active.id].map((r) => (
              <li className="mkt__row" key={r.ticker}>
                <span className="mkt__ticker">{r.ticker}</span>
                <div className="mkt__copy">
                  <span className="mkt__name">{r.name}</span>
                  <span className="mkt__desc">{r.desc}</span>
                </div>
                <span className={riskClass(r.risk)}>{r.risk}</span>

              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}