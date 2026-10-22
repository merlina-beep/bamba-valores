import { useState } from 'react';
import { inversiones } from '../content/site.js';
import OtrosFondos from './OtrosFondos.jsx';
import MercadoCapitales from './MercadoCapitales.jsx';


export default function Inversiones() {
  const [cur, setCur] = useState('ars');
  const group = inversiones.groups.find((g) => g.id === cur);

  return (
    <section className="section inv-sec" id="Inversiones">
      <div className="wrap pad inv">
        <div className="inv__top">
          <div className="inv__head">
            <span className="eyebrow"><span aria-hidden="true" />{inversiones.kicker}</span>
            <h2 className="serif h2">{inversiones.title}</h2>
          </div>
          <div className="inv__seg" role="tablist" aria-label="Moneda">
            {inversiones.groups.map((g) => (
              <button
                type="button"
                key={g.id}
                role="tab"
                aria-selected={cur === g.id}
                className={'inv__seg-opt' + (cur === g.id ? ' is-on' : '')}
                onClick={() => setCur(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {cur === 'otros' ? (
          <OtrosFondos />
        ) : (
          <div className="inv__funds">
            {group.funds.map((f) => (
              <article className="fund" key={f.name}>
                <h3>{f.name}</h3>
                <span className="fund__type">{f.type}</span>
                <span className="fund__liq">{f.liquidity}</span>
              </article>
            ))}
          </div>
        )}

        <div className="inv__pair">
          <div className="inv__mep">
            <span className="inv__kicker">{inversiones.mep.kicker}</span>
            <h3>{inversiones.mep.title}</h3>
            <p>{inversiones.mep.body}</p>
          </div>

           <MercadoCapitales />
           
          </div>
      
        <p className="legalette"></p>
      </div>
    </section>
  );
}