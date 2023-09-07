import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, PrevButton, NextButton } from "./Navigators";
import "../../stylesheets/carousel.css";

import { data } from "./Data.jsx";
const Carousel = (props) => {
  const { setId } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="embla w-full flex justify-evenly md:flex-row-reverse flex-col-reverse items-center">
        <div className="embla__viewport w-full " ref={emblaRef}>
          <div className="embla__container">
            {data.map((data) => (
              <div
                onClick={() => {
                  // setTimeout(() => setId(data.id), 1000);
                  setId(data.id);
                }}
                className="embla__slide text-center border relative hover:bg-slate-400 hover:cursor-pointer"
                key={data.id}
              >
                <div className="w-[200px] h-32 text-2xl text-slate-50">
                  <img
                    className="embla__slide__img"
                    src={data.img}
                    alt="Your alt text"
                  />
                </div>

                <p className=" text-slate-50 capitalize font-bold text-sm ">
                  {data.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="embla__buttons text-slate-50  md:justify-center justify-between w-full md:gap-12"> */}
        <div className="embla__buttons text-slate-50 md:basis-[300px] md:self-center justify-around md:mb-0 self-end mb-2">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
