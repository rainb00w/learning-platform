import { useState } from "react";
import { IconSelector } from "../helpers/icon-selector";
import { slideTS } from "../helpers/types";

export default function Slider({ slides }): JSX.Element {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleClick = (id: number) => {
    setActiveSlide(id);
  };
  const handleLeftClick = () => {
    if (activeSlide === 1) {
      setActiveSlide(slides.length);
    } else if (activeSlide > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(slides.length - 1);
    }
  };
  const handleRightClick = () => {
    if (activeSlide === slides.length) {
      setActiveSlide(1);
    } else if (activeSlide < slides.length) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(slides.length - 1);
    }
  };

  return (
    <div className="container py-36">
      <p className="inline-block bg-blue bg-opacity-10 py-1.5 px-5  text-14r text-blue">
        Our categories
      </p>
      <h3 className="w-[48rem] pt-6 text-h3 text-black">
        Fostering a playful & engaging learning environment
      </h3>

      <div className="relative">
        <div className="absolute right-0  -top-24  flex gap-9 ">
          <button onClick={handleLeftClick} className="hoverItem">
            <IconSelector
              id="categoriesIconLeft"
              stroke="#158FFF"
              fill="none"
              width="36"
              height="36"
            />
          </button>
          <button onClick={handleRightClick} className="hoverItem">
            <IconSelector
              id="categoriesIconRight"
              stroke="#158FFF"
              fill="#ffffff"
              width="36"
              height="36"
            />
          </button>
        </div>
        <div className="mt-20 flex gap-12">
          {slides.map(({ id, heading, text, icon }) => {
            return (
              <div
                onClick={() => handleClick(id)}
                key={id}
                className={
                  "rounded-2xl py-12 px-16 text-16r hover:cursor-pointer hover:drop-shadow-lg " +
                  (activeSlide === id
                    ? "bg-blue text-white"
                    : " bg-white text-grey")
                }
              >
                <div className="flex items-center">
                  <div
                    className={
                      "flex h-20 w-20 items-center justify-center rounded-2xl " +
                      (activeSlide === id ? " bg-white " : " bg-blue/10 ")
                    }
                  >
                    <IconSelector
                      id={icon}
                      stroke="#158FFF"
                      fill="none"
                      width="20"
                      height="20"
                    />
                  </div>
                  <h4
                    className={
                      "ml-8 text-h4 " +
                      (activeSlide === id ? " text-white" : "  text-black")
                    }
                  >
                    {heading}
                  </h4>
                </div>

                <p className=" mt-10">{text}</p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 pt-14">
          {slides.map((slide, slideIndex) => {
            return (
              <div
                key={slideIndex}
                onClick={() => setActiveSlide(slideIndex + 1)}
                className={
                  "h-[8px] w-[8px] rounded-full hover:cursor-pointer " +
                  (activeSlide === slideIndex + 1
                    ? " w-[36px] bg-blue "
                    : "  bg-black/20 ")
                }
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
