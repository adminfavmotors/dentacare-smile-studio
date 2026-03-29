import LegalPageLayout from "@/components/legal/LegalPageLayout";

const CookiesPage = () => (
  <LegalPageLayout title="Polityka cookies">
        <h1>Polityka Cookies</h1>

        <h2>1. Co to są cookies</h2>
        <p>Cookies (ciasteczka) to małe pliki tekstowe zapisywane na Twoim urządzeniu podczas odwiedzania stron internetowych. Służą do zapamiętywania preferencji i poprawy jakości usług.</p>

        <h2>2. Rodzaje cookies na naszej stronie</h2>
        <h3>Niezbędne (Strictly Necessary)</h3>
        <p>Cookies sesyjne, CSRF, preferencje języka — nie wymagają zgody. Czas: do końca sesji / 24h.</p>
        <h3>Analityczne (Google Analytics GA4)</h3>
        <p>Anonimowe statystyki odwiedzin — wymagają Twojej zgody. Czas: 13 miesięcy.</p>
        <h3>Marketingowe</h3>
        <p>Śledzenie konwersji (opcjonalnie) — wymagają Twojej zgody. Czas: 6 miesięcy.</p>

        <h2>3. Jak zarządzać cookies</h2>
        <p>Możesz zmienić ustawienia cookies w swojej przeglądarce lub skorzystać z naszego panelu preferencji (przycisk „Ustawienia cookies" w stopce strony).</p>

        <h2>4. Czas przechowywania</h2>
        <ul>
          <li>Niezbędne: do końca sesji / 24h</li>
          <li>Analityczne: 13 miesięcy</li>
          <li>Marketingowe: 6 miesięcy</li>
        </ul>
  </LegalPageLayout>
);

export default CookiesPage;
