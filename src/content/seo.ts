import { clinic, faqItems, socialProof } from "@/content/clinic";

type SeoConfig = {
  description: string;
  path: string;
  robots?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
  title: string;
};

const siteOrigin = clinic.canonicalUrl.replace(/\/$/, "");

const buildUrl = (path: string) => (path === "/" ? clinic.canonicalUrl : `${siteOrigin}${path}`);

const buildBreadcrumbSchema = (items: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: buildUrl(item.path),
  })),
});

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinic.legalName,
  url: clinic.canonicalUrl,
  telephone: clinic.phoneDisplay,
  email: clinic.registrationEmail,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.addressLine1,
    postalCode: clinic.postalCode,
    addressLocality: clinic.city,
    addressCountry: "PL",
  },
  openingHours: ["Mo-Fr 08:00-20:00", "Sa 09:00-15:00"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: socialProof.rating.replace(",", ".").replace("/5", ""),
    reviewCount: socialProof.reviewsLabel.match(/\d[\d\s]*/)?.[0]?.replace(/\s/g, "") ?? "1200",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const seoConfig = {
  home: {
    title: `Stomatolog ${clinic.city} — ${clinic.legalName} | ${clinic.district}`,
    description: `Nowoczesna stomatologia w centrum ${clinic.city}. Leczenie, implanty, ortodoncja, wybielanie i bezpłatna konsultacja. Zadzwoń: ${clinic.phoneDisplay}.`,
    path: "/",
    structuredData: [dentistSchema, faqSchema],
  },
  pricing: {
    title: `Cennik usług stomatologicznych ${clinic.city} | ${clinic.brandName}`,
    description: `Sprawdź aktualny cennik ${clinic.brandName} w ${clinic.city}. Profilaktyka, leczenie, implanty, ortodoncja i stomatologia dziecięca w przejrzystych widełkach cenowych.`,
    path: "/cennik",
    structuredData: buildBreadcrumbSchema([
      { name: "Strona główna", path: "/" },
      { name: "Usługi i cennik", path: "/cennik" },
    ]),
  },
  privacy: {
    title: `Polityka prywatności | ${clinic.brandName}`,
    description: `Zasady przetwarzania danych osobowych pacjentów i osób kontaktujących się z ${clinic.legalName}.`,
    path: "/polityka-prywatnosci",
    structuredData: buildBreadcrumbSchema([
      { name: "Strona główna", path: "/" },
      { name: "Polityka prywatności", path: "/polityka-prywatnosci" },
    ]),
  },
  cookies: {
    title: `Polityka cookies | ${clinic.brandName}`,
    description: `Informacje o plikach cookies, czasie ich przechowywania oraz zasadach zarządzania zgodami w serwisie ${clinic.brandName}.`,
    path: "/polityka-cookies",
    structuredData: buildBreadcrumbSchema([
      { name: "Strona główna", path: "/" },
      { name: "Polityka cookies", path: "/polityka-cookies" },
    ]),
  },
  terms: {
    title: `Regulamin świadczenia usług | ${clinic.brandName}`,
    description: `Regulamin świadczenia usług stomatologicznych, zasad umawiania wizyt, reklamacji i płatności w ${clinic.legalName}.`,
    path: "/regulamin",
    structuredData: buildBreadcrumbSchema([
      { name: "Strona główna", path: "/" },
      { name: "Regulamin", path: "/regulamin" },
    ]),
  },
  notFound: {
    title: `404 | ${clinic.brandName}`,
    description: "Szukana strona nie istnieje. Wróć do strony głównej lub przejdź do cennika.",
    path: "/404",
    robots: "noindex, nofollow",
  },
} satisfies Record<string, SeoConfig>;
