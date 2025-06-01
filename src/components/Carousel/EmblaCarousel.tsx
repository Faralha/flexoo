'use client';
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type slideClientType = {
  title: string;
  image: string;
  tag: string[];
}

type PropType = {
  slides: slideClientType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* Slides Content */}
          {slides.map((slide, idx) => (
            <div className="embla__slide" key={slide.title + idx}>
              <div className="embla__slide__number w-full h-full ">
                <Image
                  alt={slide.title}
                  width={1766}
                  height={888}
                  src={slide.image}
                  sizes="max-width: 100%; height: auto;"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls flex flex-col justify-between items-center">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          {/* Slide Title */}
          <div>
            <h3 className="font-semibold">
              {slides[selectedIndex]?.title || "No Slide Selected"}
            </h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {slides[selectedIndex]?.tag?.map((tag, i) => (
                <span
                  key={tag + i}
                  className="px-2 py-0.5 rounded bg-gray-200 text-xs text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
