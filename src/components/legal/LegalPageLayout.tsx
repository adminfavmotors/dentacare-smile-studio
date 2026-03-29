import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type LegalPageLayoutProps = {
  title: string;
  children: ReactNode;
};

const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-sm prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted prose-a:text-primary prose-li:text-muted">
        <nav className="text-sm text-muted mb-6 not-prose">
          <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{title}</span>
        </nav>
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export default LegalPageLayout;
