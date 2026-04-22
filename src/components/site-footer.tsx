import { company } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="section-shell flex flex-col gap-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-foreground">{company.name}</p>
          <p>Ammattitaitoiset pihatyöt Tampereen ja Turun seudulla.</p>
        </div>
        <div className="flex flex-col items-start gap-1 md:items-end">
          <a href={`tel:${company.phone.replace(/\s+/g, "")}`}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>
    </footer>
  );
}