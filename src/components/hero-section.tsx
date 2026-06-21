import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { company, heroStats } from "@/data/site";

import bg1 from "@/assets/backround/picture1 (1).jpg";
import bg2 from "@/assets/backround/picture1 (2).jpg";
import bg4 from "@/assets/backround/picture1 (4).jpg";
import bg5 from "@/assets/backround/picture1 (5).jpg";
import bg6 from "@/assets/backround/picture1 (6).jpg";

const backgrounds = [bg1, bg2, bg4, bg5, bg6];

export function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden border-b pt-24 pb-14 lg:pt-32 lg:pb-20 z-0">
      {/* Background Carousel */}
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={bg}
            alt={`Hero background ${index + 1}`}
            className="h-full w-full object-cover object-center"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
      ))}

      <div className="section-shell relative z-20 w-full text-white">
        <div className="max-w-3xl">
          <Badge className="mb-6 bg-black/30 backdrop-blur-md text-white hover:bg-black/40 border-none px-4 py-1.5 text-sm font-semibold shadow-lg">
            Pihalaatoitus • Kivetykset • Viherrakentaminen
          </Badge>
          
          <h1 className="max-w-3xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]">
            Tyylikäs ja toimiva piha
            <span className="text-primary drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]"> avaimet käteen </span>
            -palveluna.
          </h1>

          <div className="mt-10 bg-black/30 p-6 sm:p-8 rounded-3xl backdrop-blur-md shadow-xl w-fit">
            <p className="max-w-2xl text-xl font-semibold text-white drop-shadow-sm">
              Toteutamme pihalaatoitukset, kivetykset ja viherrakentamisen Tampereen ja Turun seudulla.
              Suunnittelu tehdään yhdessä asiakkaan kanssa, jotta lopputulos on käytännöllinen,
              kest&auml;v&auml; ja oman pihan näköinen.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-bold px-8 shadow-lg">
                <a href="#contact">
                  Pyydä maksuton kartoitus
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/50 text-white bg-white/10 hover:bg-white/20 text-base font-bold px-8 shadow-lg">
                <a href="#services">Tutustu palveluihin</a>
              </Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-base font-medium text-white shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-primary drop-shadow-sm" />
                Selkeä tarjous ja kilpailukykyinen hinnoittelu
              </div>
              <div className="flex items-center gap-3 text-base font-medium text-white shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-primary drop-shadow-sm" />
                Kotitalousvähennys työn osuudesta mahdollinen
              </div>
              <div className="flex items-center gap-3 text-base font-medium text-white shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-primary drop-shadow-sm" />
                Huolelliset pohjatyöt ja viimeistely
              </div>
              <div className="flex items-center gap-3 text-base font-medium text-white shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-primary drop-shadow-sm" />
                Tampereen ja Turun seutu
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}