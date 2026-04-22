import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/site";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Luottamus"
          title="Mitä asiakkaat sanovat"
          description="Asiakaspalautteet tulisi vaikka tänne heheh" 
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="h-full">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm leading-7 text-muted-foreground">
                  “{item.text}”
                </p>

                <p className="mt-5 font-semibold">
                  {item.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}