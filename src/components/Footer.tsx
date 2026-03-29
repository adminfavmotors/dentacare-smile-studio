import { Link } from "react-router-dom";

import { clinic } from "@/content/clinic";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <span className="text-2xl font-serif font-bold">
            Denta<span className="text-accent">Kraków</span>
          </span>
          <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed">
            Nowoczesna stomatologia w samym sercu Krakowa. Bezbolesne leczenie, transparentne ceny.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-sans font-semibold text-sm mb-4 text-primary-foreground/80">Nawigacja</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><Link to="/" className="hover:text-accent transition-colors">Strona główna</Link></li>
            <li><Link to="/cennik" className="hover:text-accent transition-colors">Usługi i cennik</Link></li>
            <li><Link to="/#zespol" className="hover:text-accent transition-colors">Nasz zespół</Link></li>
            <li><Link to="/#kontakt" className="hover:text-accent transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-sans font-semibold text-sm mb-4 text-primary-foreground/80">Informacje prawne</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><Link to="/polityka-prywatnosci" className="hover:text-accent transition-colors">Polityka prywatności</Link></li>
            <li><Link to="/polityka-cookies" className="hover:text-accent transition-colors">Polityka cookies</Link></li>
            <li><Link to="/regulamin" className="hover:text-accent transition-colors">Regulamin</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans font-semibold text-sm mb-4 text-primary-foreground/80">Kontakt</h4>
          <div className="space-y-2 text-sm text-primary-foreground/60">
            <p>{clinic.addressLine1}</p>
            <p>{clinic.postalCode} {clinic.city}</p>
            <p><a href={clinic.phoneHref} className="hover:text-accent transition-colors">{clinic.phoneDisplay}</a></p>
            <p><a href={`mailto:${clinic.registrationEmail}`} className="hover:text-accent transition-colors">{clinic.registrationEmail}</a></p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
        <p>© 2026 {clinic.legalName}. Wszelkie prawa zastrzeżone.</p>
        <a
          href="https://node48.pl"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors"
        >
          Realizacja: Node48.pl
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
