import { useState } from 'react';
import { fondosPesos, fondosDolares } from '../content/fondos.js';

const porNombre = (a, b) => a.admin.localeCompare(b.admin, 'es');

export default function OtrosFondos() {
  const [cur, setCur] = useState('pesos');
  const [sel, setSel] = useState(null);

  const source = [...(cur === 'pesos' ? fondosPesos : fondosDolares)].sort(porNombre);
  const total = source.reduce((a, g) => a + g.funds.length, 0);
  const selected = sel != null ? source.find((g) => g.admin === sel) : null;

  const cambiar = (moneda) => {
    setCur(moneda);
    setSel(null);
  };

  return (
    <div className="otros">
      <div className="otros__head">
        <p className="otros__lede">
          Suscribís y rescatás a todos los fondos del mercado.
        </p>
        <div className="otros__controls">
          <div className="otros__tabs" role="tablist" aria-label="Moneda">
            <button
              type="button"
              role="tab"
              aria-selected={cur === 'pesos'}
              className={'otros__tab' + (cur === 'pesos' ? ' is-on' : '')}
              onClick={() => cambiar('pesos')}
            >
              Pesos
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={cur === 'dolares'}
              className={'otros__tab' + (cur === 'dolares' ? ' is-on' : '')}
              onClick={() => cambiar('dolares')}
            >
              Dólares
            </button>
          </div>
          <p className="otros__summary">
            {source.length} admin · {total} fondos
          </p>
        </div>
      </div>

      <div className="otros__wall">
        {source.map((g) => (
          <button
            type="button"
            key={g.admin}
            aria-expanded={sel === g.admin}
            className={'otros__chip' + (sel === g.admin ? ' is-on' : '')}
            onClick={() => setSel(sel === g.admin ? null : g.admin)}
          >
            {g.admin}
            <span className="otros__count">{g.funds.length}</span>
          </button>
        ))}
      </div>

      {selected ? (
        <div className="otros__panel">
          <div className="otros__panel-head">
            <h4>{selected.admin}</h4>
            <span>{selected.funds.length} fondos</span>
          </div>
          <ul className="otros__list">
            {selected.funds.map((f) => (
              <li key={f}>
                <span aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
