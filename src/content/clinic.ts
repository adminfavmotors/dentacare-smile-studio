import type { LucideIcon } from "lucide-react";
import { Award, Clock, MessageCircle, Smile } from "lucide-react";

import annaImg from "@/assets/doctor-anna.jpg";
import katarzynaImg from "@/assets/doctor-katarzyna.jpg";
import marcinImg from "@/assets/doctor-marcin.jpg";

export const clinic = {
  brandName: "DentaKraków",
  legalName: "DentaKraków Klinika Stomatologiczna",
  city: "Kraków",
  district: "Starowiślna",
  addressLine1: "ul. Starowiślna 28/3",
  postalCode: "31-032",
  phoneDisplay: "+48 12 456 78 90",
  phoneHref: "tel:+48124567890",
  whatsappHref: "https://wa.me/48124567890",
  registrationEmail: "rejestracja@dentakrakow.pl",
  privacyEmail: "iod@dentakrakow.pl",
  complaintsEmail: "skargi@dentakrakow.pl",
  nip: "677-123-45-67",
  canonicalUrl: "https://dentakrakow.pl/",
  hours: [
    "Pn–Pt 8:00–20:00",
    "Sb 9:00–15:00",
  ],
} as const;

export const socialProof = {
  rating: "4,9/5",
  reviewsLabel: "1 200+ opinii Google",
  patientsLabel: "ponad 1 200 zadowolonych pacjentów",
} as const;

export const financingProviders = ["MediRaty", "Twisto"] as const;

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  { icon: Smile, title: "Leczenie bez bólu", description: "Znieczulenie miejscowe i nowoczesny sprzęt — wizyta bez stresu" },
  { icon: Clock, title: "Przyjmujemy do 20:00", description: "Wieczorne godziny — bez kolizji z pracą" },
  { icon: MessageCircle, title: "Bezpłatna konsultacja", description: "Pierwsza rozmowa z lekarzem — gratis, bez zobowiązań" },
  { icon: Award, title: "15 lat doświadczenia", description: "Lekarze z certyfikatami PTS i wieloletnią praktyką" },
];

export const doctors = [
  {
    image: katarzynaImg,
    name: "lek. dent. Katarzyna Nowak",
    specialization: "Stomatologia ogólna, protetyka",
    credentials: "Uniwersytet Jagielloński, specjalizacja PTS",
    experience: "12 lat doświadczenia",
  },
  {
    image: marcinImg,
    name: "lek. dent. Marcin Wiśniewski",
    specialization: "Implantologia, chirurgia stomatologiczna",
    credentials: "UM w Krakowie, kursy EAO",
    experience: "9 lat doświadczenia",
  },
  {
    image: annaImg,
    name: "lek. dent. Anna Kowalska",
    specialization: "Ortodoncja, stomatologia dziecięca",
    credentials: "UJ CM, certyfikat ortodontyczny",
    experience: "8 lat doświadczenia",
  },
] as const;

export const reviews = [
  { text: "Pierwszy raz w życiu nie bałem się dentysty. Pani Katarzyna jest bardzo profesjonalna i spokojnie wytłumaczyła każdy krok. Polecam serdecznie!", author: "Tomasz W." },
  { text: "Higienizacja wykonana bardzo dokładnie, bez bólu. Gabinet nowoczesny, personel miły. Umówiłam córkę następnego dnia.", author: "Aleksandra K." },
  { text: "Implant wszczepiony przez dr Wiśniewskiego — bez komplikacji, cena zgodna z cennikiem. Jestem bardzo zadowolony.", author: "Krzysztof M." },
  { text: "Łatwe umawianie wizyty online, godziny wieczorne — idealne dla pracujących. Polecam całej rodzinie.", author: "Monika L." },
  { text: "Wybielanie zębów — efekt przekroczył moje oczekiwania. Dziękuję!", author: "Joanna P." },
  { text: "Aparat dla córki — dr Kowalska wyjaśniła wszystko rodzicom i dziecku. Poczułyśmy się bezpiecznie.", author: "Beata S." },
] as const;

export const faqItems = [
  { question: "Czy leczenie boli?", answer: "Stosujemy nowoczesne znieczulenie miejscowe. Większość zabiegów jest całkowicie bezbolesna." },
  { question: "Jak umówić wizytę?", answer: `Przez formularz na stronie, telefonicznie (${clinic.phoneDisplay}) lub WhatsApp.` },
  { question: "Czy przyjmujecie pacjentów bez skierowania?", answer: "Tak, nie jest wymagane żadne skierowanie." },
  { question: "Jak długo trwa pierwsza wizyta?", answer: "Konsultacja trwa ok. 30 minut. Wycena jest bezpłatna." },
  { question: "Czy oferujecie raty?", answer: `Tak, dla większych zabiegów oferujemy płatność w ratach 0% (${financingProviders[0]}).` },
  { question: "Czy przyjmujecie dzieci?", answer: "Tak, od 3. roku życia. Mamy lekarza specjalizującego się w stomatologii dziecięcej." },
  { question: "Jak wygląda higienizacja?", answer: "Scaling (usuwanie kamienia), piaskowanie i polerowanie. Trwa ok. 60 minut." },
  { question: "Czy można przyjść w nagłym przypadku?", answer: "Tak, prosimy o kontakt telefoniczny — postaramy się przyjąć tego samego dnia." },
] as const;
