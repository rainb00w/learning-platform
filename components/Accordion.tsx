import Link from "next/link";
import { AccordionPropsTS } from "@/helpers/types";
import { useState } from "react";
import { IconSelector } from "@/helpers/icon-selector";
import { lessonsCount } from "@/helpers/lessons-functions";

export default function Accordion({
  heading,
  lessons,
  courseID,
}: AccordionPropsTS) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div>
        <div onClick={() => setIsActive(!isActive)}>
          <div className="flex cursor-pointer justify-between">
            <div className="flex flex-col ">
              <h5 className=" text-h5 text-black ">{heading}</h5>
              <div className=" mt-4 flex items-center gap-x-2 text-14r text-grey ">
                <IconSelector id="triangleRight" />
                {lessonsCount("lessonsQuantity", heading, lessons)}
                <span>lessons</span>
                <IconSelector id="courseClock" />
                {lessonsCount("lessonsDuration", heading, lessons)}
                <span>mins</span>
              </div>
            </div>
            <span className="cursor-pointer">
              {isActive ? (
                <IconSelector id="triangleDown" />
              ) : (
                <IconSelector id="triangleUp" />
              )}
            </span>
          </div>
        </div>
        {isActive && (
          <ul className="flex flex-col gap-10 pt-10">
            {lessons
              ?.filter((lesson) => lesson.sectionName === heading)
              .map((lesson) => (
                <li
                  key={lesson.lessonName}
                  className="grid grid-cols-[50px_1fr] items-start justify-center"
                >
                  <div className="row-span-2">
                    {lesson.lessonType === "video" ? (
                      <IconSelector id="coursePlayButton" />
                    ) : (
                      <IconSelector id="courseFileTextCircle" />
                    )}
                  </div>
                  <Link href={`${courseID}/lesson/${lesson.id}`}>
                    <span className=" mt-2 text-16m text-black">
                      {lesson.lessonNumber}. {lesson.lessonName}
                    </span>
                  </Link>

                  <div className=" mt-2 flex items-center gap-x-2 text-14r text-grey">
                    <IconSelector id="courseClock" />
                    <span>{lesson.duration} min</span>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}
