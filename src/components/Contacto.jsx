import './Contacto.css';
import { contacto } from '../content/home.js';

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const icons = {
  mail: (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  wa: (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M4 20l1.3-4.2A8 8 0 1 1 8.2 18.8z" />
      <path d="M9 9.5c.3 2 2.5 4.2 4.5 4.5l1.3-1.3-2-1-.8.8c-.8-.4-1.5-1.1-1.9-1.9l.8-.8-1-2z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
};

export default function Contacto() {
  const items = [
    contacto.email && {
      icon: 'mail', tag: 'Email', label: contacto.email,
      href: 'mailto:' + contacto.email,
    },
    contacto.whatsapp && {
      icon: 'wa', tag: 'WhatsApp', label: '1166008935',
      href: 'https://wa.me/' + contacto.whatsapp, wa: true,
    },
    contacto.telefono && {
      icon: 'phone', tag: 'Teléfono', label: contacto.telefono,
      href: 'tel:' + contacto.telefono.replace(/[^\d+]/g, ''),
    },
    contacto.direccion && {
      icon: 'pin', tag: 'Dirección', label: contacto.direccion,
    },
  ].filter(Boolean);

  return (
    <section className="contact" id="contacto">
      <div className="wrap pad">
        <div className={'contact__box' + (items.length === 0 ? ' contact__box--solo' : '')}>
          <div>
            <h2 className="serif h2">{contacto.titulo}</h2>
            <p className="lead">{contacto.texto}</p>
          </div>
          {items.length > 0 && (
            <ul className="contact__list">
              {items.map((it) => {
                const cls = 'c-row' + (it.wa ? ' c-row--wa' : '');
                const inner = (
                  <>
                    <span className="c-ic">{icons[it.icon]}</span>
                    <span className="c-txt">
                      <small>{it.tag}</small>
                      <b>{it.label}</b>
                    </span>
                  </>
                );
                return (
                  <li key={it.tag}>
                    {it.href ? (
                      <a
                        className={cls}
                        href={it.href}
                        {...(it.wa ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}