import Link from "next/link";
import { IconSelector } from "@/helpers/icon-selector";

export default function Header(): JSX.Element {
  return (
    <>
      <header>
        <div className="gradient-dark ">
          <div className="container relative z-0 grid grid-cols-2 py-28">
            <div className="absolute top-1/2 -left-64 -z-10 -translate-y-96">
              <IconSelector id="headerCircleLeft" />
            </div>
            <div className="absolute -bottom-20 right-0 -z-10 translate-y-96 rotate-180 ">
              <IconSelector id="headerCircleRight" fill="black" />
            </div>
            <div className="">
              <p className="inline rounded-lg bg-[#158FFF]  bg-opacity-10 px-5 py-2 text-14r text-blue">
                Education
              </p>
              <h1 className="mt-10 text-h1 text-white">
                Learn anything <br></br>to improve your skills
              </h1>
              <p className="mt-8 text-16r text-grey">
                LearningPlatform is an online learning site that provides tens{" "}
                <br></br> of thousands of classes with experienced instructions.
              </p>
              <div className="mt-20 flex gap-x-14">
                <span className="flex items-center gap-x-8 text-16b text-white">
                  <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white bg-opacity-10">
                    <IconSelector id="header1" />
                  </span>
                  Career-Oriented
                </span>
                <span className="flex items-center gap-x-8 text-16b text-white">
                  <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white bg-opacity-10">
                    <IconSelector id="header2" />
                  </span>
                  Creative Thinking
                </span>
              </div>

              <div className="mt-28 flex items-center gap-x-14">
                <Link href="/sign-up">
                  <button className="buttonPrimaryYellow smoothTransition">
                    Get started
                  </button>
                </Link>
                <Link
                  href=""
                  className="smoothTransition text-18eb text-yellowLight hover:text-white"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className=" relative flex after:absolute after:bottom-16  after:block  after:h-12 after:w-12 after:rounded-full after:bg-blue after:bg-opacity-50 after:content-['']">
              <div
                className="absolute -top-8 -ml-6 h-500 w-500 rounded-full border border-solid 
border-blue"
              ></div>
              <div className=" relative flex h-500 w-500 items-end justify-center overflow-hidden rounded-full bg-blue ">
                <img
                  src="/img/header.png"
                  alt="girl with notebooks"
                  className="hoverItem h-5/6"
                />
              </div>
              <div className="absolute top-1/2 -left-32 flex -translate-y-1/2 items-center gap-x-6 rounded-2xl bg-black p-6">
                <IconSelector id="header3" />

                <div>
                  <h4 className="text-h4 text-white">2K+</h4>
                  <p className="text-14r text-grey">Video Courses</p>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 flex flex-col items-center gap-x-6 rounded-2xl bg-black p-6">
                <IconSelector id="header4" />

                <h4 className="text-h4 text-white">5K+</h4>
                <p className="text-14r text-grey">Online Courses</p>
              </div>
              <div className="absolute bottom-16 left-1/2 flex items-center gap-x-6 rounded-2xl bg-black p-6">
                <IconSelector id="header5" />

                <div>
                  <h4 className="text-h4 text-white">250+</h4>
                  <p className="text-14r text-grey">Tutors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
