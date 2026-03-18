import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const RegulaminPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-sm prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted prose-a:text-primary">
        <nav className="text-sm text-muted mb-6 not-prose">
          <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Regulamin</span>
        </nav>

        <h1>Regulamin Świadczenia Usług</h1>

        <h2>1. Postanowienia ogólne</h2>
        <p>Niniejszy regulamin określa zasady korzystania z usług DentaKraków Klinika Stomatologiczna z siedzibą przy ul. Starowiślnej 28/3, 31-032 Kraków.</p>

        <h2>2. Umawianie i odwoływanie wizyt</h2>
        <p>Wizyty można umawiać telefonicznie, przez formularz na stronie lub WhatsApp. Odwołanie wizyty powinno nastąpić minimum 24 godziny przed umówionym terminem.</p>

        <h2>3. Prawa i obowiązki pacjenta</h2>
        <p>Pacjent ma prawo do pełnej informacji o planowanym leczeniu, dostępu do dokumentacji medycznej oraz wyboru lekarza.</p>

        <h2>4. Odpowiedzialność kliniki</h2>
        <p>Klinika ponosi odpowiedzialność za jakość świadczonych usług zgodnie z obowiązującymi standardami medycznymi.</p>

        <h2>5. Reklamacje</h2>
        <p>Reklamacje należy zgłaszać w terminie 14 dni od dnia wykonania usługi na adres email: <a href="mailto:skargi@dentakrakow.pl">skargi@dentakrakow.pl</a>.</p>

        <h2>6. Formy płatności</h2>
        <p>Akceptujemy płatność gotówką, kartą płatniczą, przelewem bankowym oraz w ratach 0% (dla zabiegów powyżej 1000 zł).</p>

        <h2>7. Postanowienia końcowe</h2>
        <p>W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego. Sądem właściwym jest sąd w Krakowie.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default RegulaminPage;
