import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { benefits } from "@/data/site";

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-secondary/40 py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Miksi valita meidät"
          title="Selkeä, luotettava ja viimeistelty tapa toteuttaa piha"
          description="Vanhan sivuston tärkeimmät myyntiargumentit on tiivistetty tähän modernimpaan, helpommin skannattavaan muotoon."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-white/60 bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}