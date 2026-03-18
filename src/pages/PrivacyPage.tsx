import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PrivacyPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-sm prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted prose-a:text-primary">
        <nav className="text-sm text-muted mb-6 not-prose">
          <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Polityka prywatności</span>
        </nav>

        <h1>Polityka Prywatności</h1>

        <h2>1. Administrator danych osobowych</h2>
        <p>DentaKraków Klinika Stomatologiczna, ul. Starowiślna 28/3, 31-032 Kraków, NIP: 677-123-45-67, email: <a href="mailto:rejestracja@dentakrakow.pl">rejestracja@dentakrakow.pl</a></p>

        <h2>2. Cele i podstawy przetwarzania</h2>
        <ul>
          <li>Rejestracja pacjentów i umawianie wizyt (art. 6 ust. 1 lit. b RODO — wykonanie umowy)</li>
          <li>Dokumentacja medyczna (art. 9 ust. 2 lit. h RODO — medycyna)</li>
          <li>Marketing za zgodą (art. 6 ust. 1 lit. a RODO)</li>
          <li>Analityka strony (Google Analytics — uzasadniony interes, art. 6 ust. 1 lit. f RODO)</li>
        </ul>

        <h2>3. Dane zbierane przez formularz</h2>
        <p>Imię, telefon, email (opcjonalnie), treść wiadomości.</p>

        <h2>4. Prawa pacjenta</h2>
        <p>Przysługuje Ci prawo dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, przeniesienia danych oraz sprzeciwu.</p>

        <h2>5. Okres przechowywania</h2>
        <p>Dane medyczne — 20 lat (zgodnie z ustawą), dane marketingowe — do cofnięcia zgody.</p>

        <h2>6. Przekazywanie danych</h2>
        <p>Dane mogą być przekazywane hostingodawcy oraz platformie emailowej — wyłącznie w UE/EOG lub z odpowiednimi zabezpieczeniami.</p>

        <h2>7. Inspektor Ochrony Danych</h2>
        <p>Kontakt: <a href="mailto:iod@dentakrakow.pl">iod@dentakrakow.pl</a></p>

        <h2>8. Prawo skargi</h2>
        <p>Masz prawo wniesienia skargi do Prezesa UODO, ul. Stawki 2, 00-193 Warszawa.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPage;
