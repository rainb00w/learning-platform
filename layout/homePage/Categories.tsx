import { useCoursesList } from "@/api/fetch-api";
import { IconSelector } from "@/helpers/icon-selector";
import { categories } from "@/helpers/categories-info";
import CoursesRender from "@/components/CoursesRender";
import Link from "next/link";

export default function Categories(): JSX.Element {
  const { data } = useCoursesList();

  return (
    <div className="gradient-dark ">
      <div className="container py-40">
        <p className="inline rounded-lg bg-[#158FFF]  bg-opacity-10 px-5 py-2 text-14r text-blue">
          Categories
        </p>
        <h3 className="pt-7 text-h3 text-white">
          Train your team with real world<br></br> skills and knowledge
        </h3>

        <div className="flex items-center gap-20 pt-24">
          <div className="hoverItem cursor-pointer">
            <IconSelector
              id="categoriesIconLeft"
              stroke="#FFFFFF"
              fill="none"
              width="36"
              height="36"
            />
          </div>

          <ul className="fadingToRight flex gap-3 text-14r text-white">
            {categories.map((category) => (
              <li
                key={category}
                className=" cursor-pointer rounded-lg border border-solid border-white/10 py-6 px-10 hover:bg-white/5"
              >
                {category}
              </li>
            ))}
          </ul>

          <div className="hoverItem cursor-pointer">
            <IconSelector
              id="categoriesIconRight"
              stroke="#FFFFFF"
              fill="none"
              width="36"
              height="36"
            />
          </div>
        </div>

        <div className=" mt-24">
          {data && (
            <CoursesRender fontColor="text-white" data={data.slice(0, 4)} />
          )}
        </div>

        <div className="mt-28 flex items-center gap-x-14">
          <Link href="/sign-up" className="smoothTransition ">
            <button className="buttonPrimaryYellow"> Get started</button>
          </Link>
          <Link
            href=""
            className="smoothTransition text-18eb text-yellowLight hover:text-white"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
