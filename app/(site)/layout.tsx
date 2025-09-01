import { Navbar } from "@/components/site/navbar";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { ScrollToTop } from "@/components/site/scroll-to-top";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <ScrollToTop />
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sergi Cladera
      </footer>
    </div>
  );
}
