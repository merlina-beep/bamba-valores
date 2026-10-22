import { footer } from '../content/home.js';

export default function Footer() {
  const enlaces = footer.enlaces.filter((l) => l.href);
  const cnv = <img className="footer__cnv" src="/assets/img/cnv.png" alt={footer.cnv.alt} />;

  return (
    <footer className="footer">
      <div className="wrap pad footer__inner">
        <div className="footer__top">
          <img className="footer__logo" src="/assets/img/logo-bamba-valores-blanco.png" alt="Bamba Valores" />
          {enlaces.length > 0 && (
            <nav className="footer__links" aria-label="Información legal">
              {enlaces.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
              ))}
            </nav>
          )}
        </div>

        <div className="footer__legalbox">
          <div className="footer__legaltext">
            <p>{footer.legal}</p>
            <p className="footer__lines">
              {footer.miembro.map((l) => <span key={l}>{l}</span>)}
            </p>
            <p className="footer__lines">
              {footer.direccion.map((l) => <span key={l}>{l}</span>)}
              <a href={'mailto:' + footer.email}>{footer.email}</a>
            </p>
          </div>
          {footer.cnv.href ? (
            <a className="footer__cnvlink" href={footer.cnv.href} target="_blank" rel="noopener noreferrer">{cnv}</a>
          ) : (
            cnv
          )}
        </div>

        <p className="footer__copy">© {new Date().getFullYear()} {footer.nombre}</p>
      </div>
    </footer>
  );
}
