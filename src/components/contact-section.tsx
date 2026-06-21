import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { company } from "@/data/site";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Yhteystiedot"
          title="Pyydä tarjous tai varaa maksuton kartoitus"
          description="Tämä MVP käyttää toimivaa front-end-lomaketta. Seuraavassa vaiheessa siihen voidaan liittää esimerkiksi Formspree, Resend, Supabase tai oma backend."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold">Pihamestari Tampere Oy</h3>
              <p className="mt-2 text-sm text-muted-foreground">Y-tunnus {company.businessId}</p>

              <div className="mt-6 space-y-5">
                <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Puhelin</p>
                    <p className="text-sm text-muted-foreground">{company.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${company.email}`} className="flex items-start gap-3 break-all">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Sähköposti</p>
                    <p className="text-sm text-muted-foreground">{company.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Osoitteet</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      {company.addresses.map((address) => (
                        <p key={address}>{address}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col justify-center p-6 min-h-[300px]">
              <div className="flex flex-col items-center justify-center space-y-6 text-center h-full py-8">
                <p className="text-lg font-medium text-muted-foreground">Ota yhteyttä suoraan:</p>
                <div className="space-y-4">
                  <a href={`mailto:${company.email}`} className="flex items-center justify-center gap-3 text-xl sm:text-2xl font-bold text-primary hover:underline">
                    <Mail className="h-6 w-6" />
                    {company.email}
                  </a>
                  <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="flex items-center justify-center gap-3 text-xl sm:text-2xl font-bold text-primary hover:underline">
                    <Phone className="h-6 w-6" />
                    {company.phone}
                  </a>
                </div>
              </div>

              {/*
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Nimi / yritys" required />
                  <Input type="email" placeholder="Sähköposti" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Puhelin" />
                  <Input placeholder="Paikkakunta" />
                </div>
                <Textarea placeholder="Kerro lyhyesti millainen pihaprojekti on mielessäsi" required />
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Lähetä tarjouspyyntö
                </Button>
                {submitted ? (
                  <p className="text-sm text-primary">
                    Viesti tallennettiin demona onnistuneesti. Seuraavaksi tähän voi liittää oikean lähetyksen.
                  </p>
                ) : null}
              </form>
              */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}