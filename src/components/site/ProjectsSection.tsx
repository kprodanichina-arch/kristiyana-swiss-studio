import {
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type GallerySection = {
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  images: GalleryImage[];
};

const image = (
  project: number,
  number: number,
  alt: string,
): GalleryImage => ({
  src: `/images/projects/project${project}/${number}.webp`,
  alt,
});

const renderImage = (number: number): GalleryImage => ({
  src: `/images/renders/${number}.webp`,
  alt: `Architekturvisualisierung ${number}`,
});

const shuffle = <T,>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const gallerySections: GallerySection[] = [
  {
    eyebrow: "02 — Ausführungsplanung",
    title: "Technische Planung & Dokumentation",
    description:
      "Ausführungs- und Detailplanung für Architekturprojekte – von der Bearbeitung von Grundrissen, Schnitten und Ansichten bis zur detaillierten Planaufbereitung.",
    price: "Stundensatz ab 55 €",
    images: [
      image(1, 2, "Grundriss – Ausführungsplanung"),
      image(1, 3, "Grundriss – Ausführungsplanung"),
      image(1, 5, "Schnitt – Ausführungsplanung"),
      image(1, 6, "Fensterdetail – Ausführungsplanung"),

      image(2, 2, "Grundriss – Ausführungsplanung"),
      image(2, 3, "Grundriss – Ausführungsplanung"),
      image(2, 4, "Dachaufsicht – Ausführungsplanung"),
      image(2, 6, "Schnitt – Ausführungsplanung"),

      image(3, 2, "Grundriss – Ausführungsplanung"),
      image(3, 3, "Dachaufsicht – Ausführungsplanung"),
      image(3, 4, "Schnitt – Ausführungsplanung"),
      image(3, 5, "Fensterdetail – Ausführungsplanung"),

      image(4, 2, "Schnitt – Ausführungsplanung"),
      image(4, 3, "Grundriss – Ausführungsplanung"),
      image(4, 4, "Dachaufsicht – Ausführungsplanung"),

      image(5, 3, "Grundriss – Ausführungsplanung"),
      image(5, 4, "Dachaufsicht – Ausführungsplanung"),
      image(5, 5, "Schnitt – Ausführungsplanung"),
      image(5, 6, "Fensterdetail – Ausführungsplanung"),

      image(6, 3, "Grundriss – Ausführungsplanung"),
      image(6, 4, "Schnitt – Ausführungsplanung"),
      image(6, 5, "Dachaufsicht – Ausführungsplanung"),
      image(6, 6, "Fensterdetail – Ausführungsplanung"),

      image(7, 2, "Grundriss – Ausführungsplanung"),
      image(7, 3, "Dachaufsicht – Ausführungsplanung"),
      image(7, 4, "Schnitt – Ausführungsplanung"),
      image(7, 5, "Fensterdetail – Ausführungsplanung"),

      image(8, 4, "Grundriss – Ausführungsplanung"),
      image(8, 5, "Grundriss – Ausführungsplanung"),
      image(8, 6, "Schnitt – Ausführungsplanung"),

      image(9, 4, "Grundriss – Ausführungsplanung"),
      image(9, 5, "Grundriss – Ausführungsplanung"),
      image(9, 7, "Schnitt – Ausführungsplanung"),
    ],
  },

  {
    eyebrow: "03 — Fassaden & Details",
    title: "Fassadenplanung & architektonische Details",
    description:
      "Fassaden, Ansichten und ausgewählte architektonische Details aus verschiedenen Projekten.",
    price: "Stundensatz ab 55 €",
    images: [
      image(