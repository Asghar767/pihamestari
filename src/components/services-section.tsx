import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/site";

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Palvelut"
          title="Kaikki tärkeimmät pihatyöt yhdestä paikasta"
          description="Vanhan sivuston palvelusisällön pohjalta rakennettu MVP nostaa heti näkyviin tärkeimmät palvelut ja asiakkaalle olennaiset hyödyt."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="h-full border-border/70 transition hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-6">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}