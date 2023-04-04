import { useCoursesList } from "@/api/fetch-api";
import HeaderCourses from "@/layout/browseCourses/HeaderCourses";
import RecommendedTopics from "@/layout/browseCourses/RecommendedTopics";
import CoursesRender from "@/components/CoursesRender";
import { IconSelector } from "@/helpers/icon-selector";
import { useSearchCoursesInput } from "@/helpers/atoms";
import { CourseTypeTS } from "@/helpers/types";

export default function CoursesPage(): JSX.Element {
  const { data, isLoading, error } = useCoursesList();
  const [searchInput, setSearchInput] = useSearchCoursesInput();

  let filtered: CourseTypeTS[] = [];
  if (data && searchInput) {
    filtered = data.filter((course) =>
      course.courseName?.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
  return (
    <div className=" mb-28">
      <div className="gradient-dark">
        <HeaderCourses />
      </div>
      {isLoading && (
        <div className="container flex items-center justify-center">
          <IconSelector id="loadingCircle" />
        </div>
      )}

      {searchInput ? (
        <div className="container">
          <div className=" mt-14">
            {data && <CoursesRender fontColor="text-black" data={filtered} />}
            {filtered.length === 0 && (
              <div className="flex items-center justify-center py-12">
                <h4 className="text-h4 text-black">Nothing have been found</h4>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className=" mt-28">
            <div className="  flex justify-between">
              <h4 className="text-h4 text-black">Recommended for you</h4>
              <button className=" flex items-center justify-center rounded-lg bg-greyLight py-4 px-10 text-14b text-blue hover:bg-black/10">
                Explore all
              </button>
            </div>
            <div className=" mt-14">
              {data && (
                <CoursesRender fontColor="text-black" data={data.slice(0, 4)} />
              )}
            </div>
          </div>

          <div className=" mt-40">
            <div className="  flex justify-between">
              <h4 className="text-h4 text-black">Students are viewing</h4>
              <button className=" flex items-center justify-center rounded-lg bg-greyLight py-4 px-10 text-14b text-blue hover:bg-black/10">
                Explore all
              </button>
            </div>
            <div className=" mt-14">
              {data && (
                <CoursesRender fontColor="text-black" data={data.slice(0, 8)} />
              )}
            </div>
          </div>

          <div className="mt-40">
            <RecommendedTopics />
          </div>

          <div className=" mt-40">
            <div className="  flex justify-between">
              <h4 className="text-h4 text-black">
                Top courses in <span className="text-blue">Development</span>{" "}
              </h4>
              <button className=" flex items-center justify-center rounded-lg bg-greyLight py-4 px-10 text-14b text-blue hover:bg-black/10">
                Explore all
              </button>
            </div>
            <div className=" mt-14">
              {data && (
                <CoursesRender fontColor="text-black" data={data.slice(0, 8)} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
