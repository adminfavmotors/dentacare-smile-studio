import { Link } from "react-router-dom";

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
            <li><a href="/#zespol" className="hover:text-accent transition-colors">Nasz zespół</a></li>
            <li><a href="/#kontakt" className="hover:text-accent transition-colors">Kontakt</a></li>
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
            <p>ul. Starowiślna 28/3</p>
            <p>31-032 Kraków</p>
            <p><a href="tel:+48124567890" className="hover:text-accent transition-colors">+48 12 456 78 90</a></p>
            <p><a href="mailto:rejestracja@dentakrakow.pl" className="hover:text-accent transition-colors">rejestracja@dentakrakow.pl</a></p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
        <p>© 2026 DentaKraków Klinika Stomatologiczna. Wszelkie prawa zastrzeżone.</p>
        <p>Designed in Kraków 🦷</p>
      </div>
    </div>
  </footer>
);

export default Footer;
