import { Button } from "@/components/ui/button";
import { company } from "@/data/site";
import logo from "@/assets/Pihamestarilogo.png";

const navItems = [
  { label: "Palvelut", href: "#services" },
  { label: "Meistä", href: "#benefits" },
  { label: "Referenssit", href: "#gallery" },
  { label: "Yhteystiedot", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed w-full top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img src={logo} alt="Pihamestari" className="h-[70px] w-auto" />
          <div className="flex min-w-0 flex-col">
            {/* <span className="text-xl font-black tracking-tight text-white">Pihamestari</span> */}
            <span className="text-lg font-bold text-white/90">Tampere & Turku</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-bold text-white/90 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="hidden text-base font-bold text-white lg:block">
            {company.phone}
          </a>
          <Button size="lg" className="font-bold shadow-lg" asChild>
            <a href="#contact">Pyydä tarjous</a>
          </Button>
        </div>
      </div>
    </header>
  );
}