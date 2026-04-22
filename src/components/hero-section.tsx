import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { company, heroStats } from "@/data/site";

export function HeroSection() {
  return (
    <section id="home" className="hero-gradient border-b">
      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <div>
          <Badge className="mb-4">Pihalaatoitus • Kivetykset • Viherrakentaminen</Badge>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Tyylikäs ja toimiva piha
            <span className="text-primary"> avaimet käteen </span>
            -palveluna.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Toteutamme pihalaatoitukset, kivetykset ja viherrakentamisen Tampereen ja Turun seudulla.
            Suunnittelu tehdään yhdessä asiakkaan kanssa, jotta lopputulos on käytännöllinen,
            kest&auml;v&auml; ja oman pihan näköinen.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#contact">
                Pyydä maksuton kartoitus
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">Tutustu palveluihin</a>
            </Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Selkeä tarjous ja kilpailukykyinen hinnoittelu
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Kotitalousvähennys työn osuudesta mahdollinen
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Huolelliset pohjatyöt ja viimeistely
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Tampereen ja Turun seutu
            </div>
          </div>
        </div>

        <Card className="overflow-hidden border-white/60 bg-white/80 shadow-xl backdrop-blur">
          <CardContent className="p-0">
            <div className="grid gap-0">
              <div className="aspect-[4/3] bg-[linear-gradient(135deg,rgba(68,123,81,0.95),rgba(110,170,119,0.85))] p-6 text-white">
                <div className="flex h-full flex-col justify-between rounded-[24px] border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/80">Pihamestari</p>
                    <h3 className="mt-3 text-2xl font-bold">Moderni pihaprojekti ilman turhaa säätöä</h3>
                    <p className="mt-3 max-w-sm text-sm text-white/80">
                      Kivetykset, viherrakentaminen ja pihan viimeistely samasta paikasta.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {heroStats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl bg-white/10 p-3">
                        <p className="text-xs text-white/70">{stat.label}</p>
                        <p className="mt-1 text-sm font-semibold">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Puhelin</p>
                  <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="mt-1 block font-semibold">
                    {company.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Sähköposti</p>
                  <a href={`mailto:${company.email}`} className="mt-1 block font-semibold break-all">
                    {company.email}
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}