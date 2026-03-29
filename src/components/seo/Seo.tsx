import { useEffect } from "react";

import { clinic } from "@/content/clinic";

type SeoProps = {
  description: string;
  path: string;
  robots?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
  title: string;
};

const ensureMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value));
    document.head.appendChild(element);
  }

  return element;
};

const ensureCanonical = () => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  return element;
};

const ensureStructuredData = () => {
  const selector = 'script[data-seo="structured-data"]';
  let element = document.head.querySelector<HTMLScriptElement>(selector);

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.dataset.seo = "structured-data";
    document.head.appendChild(element);
  }

  return element;
};

const buildUrl = (path: string) => {
  const origin = clinic.canonicalUrl.replace(/\/$/, "");
  return path === "/" ? clinic.canonicalUrl : `${origin}${path}`;
};

const Seo = ({ title, description, path, robots = "index, follow", structuredData }: SeoProps) => {
  useEffect(() => {
    const url = buildUrl(path);

    document.title = title;

    ensureMeta('meta[name="description"]', { name: "description" }).content = description;
    ensureMeta('meta[name="robots"]', { name: "robots" }).content = robots;

    ensureMeta('meta[property="og:title"]', { property: "og:title" }).content = title;
    ensureMeta('meta[property="og:description"]', { property: "og:description" }).content = description;
    ensureMeta('meta[property="og:url"]', { property: "og:url" }).content = url;
    ensureMeta('meta[property="og:type"]', { property: "og:type" }).content = "website";
    ensureMeta('meta[property="og:locale"]', { property: "og:locale" }).content = "pl_PL";
    ensureMeta('meta[property="og:site_name"]', { property: "og:site_name" }).content = clinic.legalName;

    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card" }).content = "summary_large_image";
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title" }).content = title;
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description" }).content = description;

    ensureCanonical().href = url;

    const structuredDataScript = document.head.querySelector<HTMLScriptElement>('script[data-seo="structured-data"]');

    if (structuredData) {
      ensureStructuredData().textContent = JSON.stringify(structuredData);
    } else if (structuredDataScript) {
      structuredDataScript.remove();
    }
  }, [description, path, robots, structuredData, title]);

  return null;
};

export default Seo;
