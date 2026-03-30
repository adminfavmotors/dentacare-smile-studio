import type { ReactNode } from "react";

import CookieConsent from "@/components/CookieConsent";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

type SiteLayoutProps = {
  children: ReactNode;
  afterMain?: ReactNode;
  mainClassName?: string;
  showCookieConsent?: boolean;
  showFloatingButtons?: boolean;
};

const SiteLayout = ({
  children,
  afterMain,
  mainClassName,
  showCookieConsent = false,
  showFloatingButtons = false,
}: SiteLayoutProps) => (
  <div className="min-h-screen bg-background">
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-button focus:bg-card focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-card-hover"
    >
      Przejdź do treści
    </a>
    <Navbar />
    <main id="main-content" className={cn(mainClassName)} tabIndex={-1}>
      {children}
    </main>
    {afterMain}
    <Footer />
    {showFloatingButtons ? <FloatingButtons /> : null}
    {showCookieConsent ? <CookieConsent /> : null}
  </div>
);

export default SiteLayout;
