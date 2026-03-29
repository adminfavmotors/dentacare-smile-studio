import { clinic } from "@/content/clinic";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

const PrivacyPage = () => (
  <LegalPageLayout title="Polityka prywatności">
        <h1>Polityka Prywatności</h1>

        <h2>1. Administrator danych osobowych</h2>
        <p>{clinic.legalName}, {clinic.addressLine1}, {clinic.postalCode} {clinic.city}, NIP: {clinic.nip}, email: <a href={`mailto:${clinic.registrationEmail}`}>{clinic.registrationEmail}</a></p>

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
        <p>Kontakt: <a href={`mailto:${clinic.privacyEmail}`}>{clinic.privacyEmail}</a></p>

        <h2>8. Prawo skargi</h2>
        <p>Masz prawo wniesienia skargi do Prezesa UODO, ul. Stawki 2, 00-193 Warszawa.</p>
  </LegalPageLayout>
);

export default PrivacyPage;
