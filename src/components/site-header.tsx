import { Button } from "@/components/ui/button";
import { company } from "@/data/site";

const navItems = [
  { label: "Palvelut", href: "#services" },
  { label: "Miksi me", href: "#benefits" },
  { label: "Referenssit", href: "#gallery" },
  { label: "Yhteystiedot", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex min-w-0 flex-col">
          <span className="text-lg font-black tracking-tight">Pihamestari</span>
          <span className="text-xs text-muted-foreground">Tampere & Turku</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="hidden text-sm font-medium lg:block">
            {company.phone}
          </a>
          <Button asChild>
            <a href="#contact">Pyydä tarjous</a>
          </Button>
        </div>
      </div>
    </header>
  );
}