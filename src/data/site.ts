import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Flower2,
  Hammer,
  MapPin,
  Phone,
  Shovel,
  Star,
  Trees,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

export const company = {
  name: "Pihamestari Tampere Oy",
  businessId: "3137407-2",
  phone: "040 198 2851",
  email: "info.pihamestari@gmail.com",
  areas: ["Tampereen seutu", "Turun seutu"],
  addresses: [
    "Niittyläntie 12, 33480 Ylöjärvi",
    "Kardinaalikatu 4 K 64, 20540 Turku",
  ],
};

export const heroStats = [
  { label: "Palvelualue", value: "Tampere & Turku" },
  { label: "Kartoitus", value: "Maksuton" },
  { label: "Palvelumalli", value: "Avaimet käteen" },
];

export const services: ServiceItem[] = [
  {
    title: "Pihalaatoitus ja kivetykset",
    description:
      "Tyylikkäät ja kestävät kiveykset pihoille, kulkuväylille ja ajopihoille – huolellisella pohjatyöllä.",
    icon: Shovel,
    bullets: [
      "Pihakivet ja pihalaatat",
      "Kiviportaat ja kulkuväylät",
      "Pengerrykset ja tukimuurit",
      "Reunakivet ja koristekivet",
    ],
  },
  {
    title: "Viherrakentaminen",
    description:
      "Toimivat ja viihtyisät pihat kokonaisuutena: istutukset, nurmikot ja piharakenteet saman kumppanin kautta.",
    icon: Trees,
    bullets: [
      "Istutustyöt",
      "Nurmikon perustaminen",
      "Kukkapenkit ja istutusaltaat",
      "Aidat, pergolat ja piharakenteet",
    ],
  },
  {
    title: "Puutarhatyöt ja viimeistely",
    description:
      "Viimeistelemme pihasi siistiksi, toimivaksi ja pitkäikäiseksi – ulkonäköä ja käytännöllisyyttä unohtamatta.",
    icon: Flower2,
    bullets: [
      "Pihan kunnostus",
      "Rakenteiden viimeistely",
      "Kiveyksen huolto ja uusiminen",
      "Kokonaisuuden suunnittelu asiakkaan kanssa",
    ],
  },
];

export const benefits = [
  {
    title: "Budjetti pitää",
    description: "Selkeä tarjous, eritellyt materiaalit ja työn osuus sekä realistinen toteutus.",
    icon: BadgeCheck,
  },
  {
    title: "Aikataulu sovitusti",
    description: "Työt tehdään suunnitelmallisesti ilman turhaa venymistä.",
    icon: Hammer,
  },
  {
    title: "Palvelemme kahdella alueella",
    description: "Tampereen ja Turun seutu samalla palvelulupauksella.",
    icon: MapPin,
  },
  {
    title: "Asiakaskokemus edellä",
    description: "Suunnittelu tehdään yhdessä asiakkaan toiveita kuunnellen.",
    icon: Star,
  },
];

export const galleryItems = [
  {
    title: "Moderni pihakiveys",
    description: "Selkeä kulkuväylä, viimeistelty reunustus ja yhtenäinen ilme koko pihalle.",
  },
  {
    title: "Istutukset ja viherrakenne",
    description: "Viihtyisä kokonaisuus, jossa kiveys ja vihreä piha tukevat toisiaan.",
  },
  {
    title: "Ajopiha ja sisäänkäynti",
    description: "Kantava pohja, toimivat kallistukset ja siisti ensivaikutelma.",
  },
  {
    title: "Kokonaisvaltainen piharemontti",
    description: "Avaimet käteen -ratkaisu suunnittelusta toteutukseen ja viimeistelyyn.",
  },
];

export const testimonials = [
  {
    name: "Asiakas, Tampere",
    text: "Piha valmistui sovitussa aikataulussa ja lopputulos oli todella siisti. Kommunikointi oli helppoa koko projektin ajan.",
  },
  {
    name: "Asiakas, Turku",
    text: "Saimme kilpailukykyisen tarjouksen ja selkeän suunnitelman. Koko piha näyttää nyt huomattavasti viimeistellymmältä.",
  },
  {
    name: "Asiakas, Pirkanmaa",
    text: "Työn jälki oli huolellista ja budjetti piti. Suosittelen lämpimästi pihaprojektiin.",
  },
];

export const contactHighlights = [
  {
    icon: Phone,
    label: "Puhelin",
    value: company.phone,
    href: `tel:${company.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Toimialue",
    value: "Tampereen ja Turun seutu",
    href: "#contact",
  },
];