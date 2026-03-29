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
    <Navbar />
    <main className={cn(mainClassName)}>{children}</main>
    {afterMain}
    <Footer />
    {showFloatingButtons ? <FloatingButtons /> : null}
    {showCookieConsent ? <CookieConsent /> : null}
  </div>
);

export default SiteLayout;
