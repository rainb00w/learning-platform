import { categories } from "@/helpers/categories-info";
import { IconSelector } from "@/helpers/icon-selector";
import { useSearchCoursesInput } from "@/helpers/atoms";

export default function HeaderCourses(): JSX.Element {
  const [searchInput, setSearchInput] = useSearchCoursesInput();
  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setSearchInput(target.value);
  };

  return (
    <div className="container flex flex-col items-center justify-center pt-28 pb-40 text-center first-letter:items-center">
      <h3 className="text-h3 text-white">
        Find a course to help you reach <br></br>where you want to go
      </h3>

      <div className="relative mt-20">
        <input
          className="w-[800px] rounded-lg py-8 pl-4 text-16b "
          type="text"
          onChange={handleChange}
          placeholder="Search for anything"
        />
        <div className="absolute top-8 right-4">
          <IconSelector id="searchIcon" />
        </div>
      </div>

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
    </div>
  );
}
