import { useState } from "react";
import { IconSelector } from "@/helpers/icon-selector";

export default function Testimonials(): JSX.Element {
  const slides = [
    {
      id: 1,
      name: "Viezh Robert",
      text: "I’ve been with learningPlatform in 1 year, I got a lot of new skills. I’m very happy with learningPlatform.",
    },
    {
      id: 2,
      name: "Yessica Christy",
      text: "With this learningPlatform I can learn easily and got updated course from teachers. This is the most helpful project.",
    },
    {
      id: 3,
      name: "Kim Young Jou",
      text: "I got a lot of new skills here with a really professional specialists. I got a lot of energy I can learn anything.",
    },
  ];

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
    <div className="container  py-36">
      <p className="inline-block bg-blue bg-opacity-10 py-1.5 px-5  text-14r text-blue">
        Testimonials
      </p>
      <h3 className="w-[48rem] pt-6 text-h3 text-black">
        People say about learning
      </h3>
      <p className="text-16r text-grey">
        Global learning platform that provides <br></br> international quality
        learning
      </p>

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
          {slides.map(({ id, name, text }) => {
            return (
              <div
                onClick={() => handleClick(id)}
                key={id}
                className={
                  " flex flex-col gap-10 rounded-2xl py-10 pr-40 pl-10 text-grey hover:cursor-pointer hover:bg-white hover:drop-shadow-lg " +
                  (activeSlide === id
                    ? "testimonials-drop-shadow bg-white"
                    : "border border-solid border-black/10")
                }
              >
                <IconSelector
                  id="quotes"
                  stroke="#158FFF"
                  fill={activeSlide === id ? "#158FFF" : "#939393"}
                  width="20"
                  height="20"
                />

                <p className="text-16r ">{text}</p>
                <div className="flex items-center gap-5">
                  <div className="h-[32px] w-[32px]">
                    <img
                      src={`img/testimonials/testimonials_${id}.png`}
                      alt={name}
                    />
                  </div>

                  <p>{name}</p>
                </div>
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
