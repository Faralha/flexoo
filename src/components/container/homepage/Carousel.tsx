import React from "react";
import ReactDOM from "react-dom/client";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const slideClient = [
  {
    title: "Fourjectiv",
    image: "/img/clients/Fourjectiv.png",
    tag: ["UI/UX", "Frontend", "Backend"],
  },
  {
    title: "TO CPNS",
    image: "/img/clients/CPNS.png",
    tag: ["UI/UX", "Frontend", "Backend"],
  },
  {
    title: "Logistik Tracker",
    image: "/img/clients/LogistikTracker.png",
    tag: ["UI/UX", "Frontend", "Backend"],
  },
  {
    title: "MyMebel",
    image: "/img/clients/MyMebel.png",
    tag: ["UI/UX", "Frontend", "Backend"],
  },
  {
    title: "Samsul",
    image: "/img/clients/Samsul.png",
    tag: ["UI/UX", "Frontend", "Backend"],
  },
  {
    title: "ActiveAte",
    image: "/img/clients/ActiveAte.png",
    tag: ["UI/UX"],
  },
];

export default function Carousel() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full py-16"
      id="klien">
      <h1 className="mb-3 font-bold">Our Clients</h1>
      <h3 className="mb-6 font-normal">Klien yang pernah bekerja dengan kami</h3>
      <EmblaCarousel slides={slideClient} options={OPTIONS} />
    </div>
  );
}