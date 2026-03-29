import { clinic } from "@/content/clinic";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

const RegulaminPage = () => (
  <LegalPageLayout title="Regulamin">
        <h1>Regulamin Świadczenia Usług</h1>

        <h2>1. Postanowienia ogólne</h2>
        <p>Niniejszy regulamin określa zasady korzystania z usług {clinic.legalName} z siedzibą przy {clinic.addressLine1}, {clinic.postalCode} {clinic.city}.</p>

        <h2>2. Umawianie i odwoływanie wizyt</h2>
        <p>Wizyty można umawiać telefonicznie, przez formularz na stronie lub WhatsApp. Odwołanie wizyty powinno nastąpić minimum 24 godziny przed umówionym terminem.</p>

        <h2>3. Prawa i obowiązki pacjenta</h2>
        <p>Pacjent ma prawo do pełnej informacji o planowanym leczeniu, dostępu do dokumentacji medycznej oraz wyboru lekarza.</p>

        <h2>4. Odpowiedzialność kliniki</h2>
        <p>Klinika ponosi odpowiedzialność za jakość świadczonych usług zgodnie z obowiązującymi standardami medycznymi.</p>

        <h2>5. Reklamacje</h2>
        <p>Reklamacje należy zgłaszać w terminie 14 dni od dnia wykonania usługi na adres email: <a href={`mailto:${clinic.complaintsEmail}`}>{clinic.complaintsEmail}</a>.</p>

        <h2>6. Formy płatności</h2>
        <p>Akceptujemy płatność gotówką, kartą płatniczą, przelewem bankowym oraz w ratach 0% (dla zabiegów powyżej 1000 zł).</p>

        <h2>7. Postanowienia końcowe</h2>
        <p>W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego. Sądem właściwym jest sąd w Krakowie.</p>
  </LegalPageLayout>
);

export default RegulaminPage;
