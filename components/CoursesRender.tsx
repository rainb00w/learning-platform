import { CourseToRenderPropsTS } from "@/helpers/types";
import { IconSelector } from "@/helpers/icon-selector";
import Link from "next/link";
import { Rating } from "./Rating";

export default function CoursesRender({
  fontColor,
  data,
}: CourseToRenderPropsTS): JSX.Element {
  return (
    <ul className=" grid grid-cols-4 gap-y-16">
      {data?.map((course) => (
        <li key={course.id} className={`relative w-[280px] ${fontColor}`}>
          <div className="flex h-[184px] w-[280px] items-center">
            <Link href={`courses/${course.id}`}>
              <img
                className="hoverItem "
                src={`/img/courses-images/${course.img}`}
                alt={course.courseName}
                height={184}
                width={280}
                loading="lazy"
              />
            </Link>
          </div>
          <div className="mt-7 flex items-center text-16b text-yellowLight">
            <span className=" mr-3">
              {course.rating?.toString().slice(0, 1) +
                "." +
                course.rating?.toString().slice(1, 2)}
            </span>
            <Rating rating={course.rating} />
          </div>
          <Link href={`courses/${course.id}`}>
            <p className=" mt-3 text-16b hover:border-r-2 hover:border-solid hover:border-grey ">
              {course.courseName}
            </p>
          </Link>
          <div className="mt-3 flex items-center text-14r text-grey">
            <span>
              <IconSelector id="author" />
            </span>
            <p className=" ml-4">{course.author}</p>
            <span className=" ml-8">
              <IconSelector id="triangleRight" />
            </span>
            <p className=" ml-4">{course.lessonsQuantity} lessons</p>
          </div>
          {course.popularity && (
            <span className="absolute top-4 left-4 flex items-center justify-center rounded-3xl bg-blue py-3 px-6 text-14r text-white">
              Popular
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
