import { useState } from 'react';
import { navegacion } from '../content/navegacion.js';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap pad nav__inner">
        <a className="nav__logo" href="#inicio" aria-label="Bamba Valores, ir al inicio" onClick={close}>
          <img src="/assets/img/logo-bamba-valores.png" alt="Bamba Valores" />
        </a>

        <nav id="menu" className={'nav__links' + (open ? ' is-open' : '')} aria-label="Principal">
          {navegacion.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--primary btn--sm nav__cta" href="#contacto" onClick={close}>
            Contactanos
          </a>
        </nav>

        <button
          type="button"
          className="nav__burger"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
