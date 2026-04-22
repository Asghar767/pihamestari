import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { galleryItems } from "@/data/site";

export function GallerySection() {
  return (
    <section id="gallery" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Referenssit"
          title="Tänne vois laittaa muutama kuva toteutuneista kohteista"
          description="Tässä versiossa käytetään moderneja placeholder-kortteja. Kun saadaan oikeat kuvat vanhalta sivulta tai asiakkaalta, ne on helppo vaihtaa tilalle."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item, index) => (
            <Card key={item.title} className="overflow-hidden">
              <div className="aspect-[4/5] bg-[linear-gradient(145deg,rgba(68,123,81,0.18),rgba(247,197,72,0.22))] p-4">
                <div className="flex h-full items-end rounded-[24px] border border-white/60 bg-white/50 p-4 backdrop-blur-sm">
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium shadow-sm">
                    Kohde {index + 1}
                  </span>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}