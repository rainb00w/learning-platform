import { useRouter } from "next/router";
import { useLessonsList, useFetchCourse } from "@/api/fetch-api";
import { Rating } from "@/components/Rating";
import { IconSelector } from "@/helpers/icon-selector";
import Accordion from "@/components/Accordion";
import { createSectionsList } from "@/helpers/lessons-functions";
import { minutesToHours } from "@/helpers/lessons-functions";

export default function CoursePage(): JSX.Element {
  const router = useRouter();
  const queryID = router.query.courseID;
  const {
    data: lessons,
    isLoading: lessonsLoading,
    error: lessonsLoadingError,
  } = useLessonsList(String(queryID));

  let sectionsArray;
  if (lessons) {
    sectionsArray = createSectionsList(lessons);
  }

  const {
    data: courseInfo,
    isFetching: courseFetching,
    isLoading: courseLoading,
    error: courseError,
  } = useFetchCourse(String(queryID));

  const { hours: totalCourseHours = 0, minutes: totalCourseMinutes } =
    minutesToHours(courseInfo?.videoTotalMins);

  return (
    <>
      <div className="gradient-dark">
        <div className="container grid grid-cols-3 pt-28 pb-28">
          <div className="col-span-2 w-[640px] ">
            <div className="text-h3 text-white">
              {courseInfo?.courseName}
              {courseLoading && (
                <div className=" flex items-center justify-center">
                  <IconSelector id="threeDots" />
                </div>
              )}
            </div>

            <p className="mt-10 w-[40rem] text-16r text-white">
              {courseInfo?.shortDescription}
            </p>

            <div className=" flex items-center gap-12 pt-20">
              <button className="buttonPrimaryYellow">Enroll for free</button>
              <Rating rating={Number(courseInfo?.rating)} />
              <span className="text-16r text-white">{courseInfo?.author}</span>
            </div>

            <div className="mt-14 h-[1px] bg-white/10"></div>
            <div className=" mt-16">
              <h4 className="text-h4 text-white">This course includes:</h4>
              <div className="mt-14 grid grid-cols-2 gap-x-28 gap-y-10 text-16r text-white">
                <div className="flex items-center gap-5">
                  <IconSelector id="courseTriangleRight" />
                  <span>{totalCourseHours} hours on-demand video</span>
                </div>
                <div className="flex items-center gap-5">
                  <IconSelector id="courseDownload" />
                  <span>
                    {courseInfo?.downloadableResourses} downloadable resources
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <IconSelector id="courseFileText" />
                  <span>{courseInfo?.articlesQuantity}&nbsp; articles</span>
                </div>
                <div className="flex items-center gap-5">
                  <IconSelector id="courseCertificate" />
                  <span>Certificate of completion</span>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-self-start text-white">
            <iframe
              width="440"
              height="294"
              src="https://www.youtube.com/embed/mr15Xzb1Ook"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container pt-16 pb-28">
        <div className="grid grid-cols-3 gap-x-48">
          <div className="col-span-2 ">
            <h4 className="text-h4 text-black">Course content</h4>

            <div className=" mt-5 flex items-center gap-6 text-14r text-grey">
              <div className="flex items-center gap-3">
                <IconSelector id="courseFolder" />
                <span>{sectionsArray?.length} sections</span>
              </div>
              <div className="flex items-center gap-3">
                <IconSelector id="triangleRight" />
                <span>{courseInfo?.lessonsQuantity} lessons</span>
              </div>
              <div className="flex items-center  gap-3">
                <IconSelector id="courseClock" />
                <span>
                  {totalCourseHours} hr {totalCourseMinutes} min total length
                </span>
              </div>
            </div>
            <div className=" mt-14 flex flex-col gap-y-10">
              {sectionsArray?.map((section) => (
                <div
                  key={section}
                  className=" border-b border-solid border-black/10 pb-10 last:border-b-0"
                >
                  <div>
                    <Accordion
                      heading={section[0]}
                      lessons={lessons}
                      courseID={queryID}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="my-20 h-[1px] bg-black/10"></div>
            {courseLoading && (
              <div className="container flex items-center justify-center">
                <IconSelector id="loadingCircle" />
              </div>
            )}
            <div
              className="parsedHTML"
              dangerouslySetInnerHTML={{ __html: courseInfo?.longDescription }}
            ></div>
          </div>
          <div className=" ">
            <div className="rounded-xl bg-greyLight p-14">
              <h4 className="text-h4 text-black">What you’ll learn</h4>
              <ul className=" mt-14 flex flex-col gap-10 ">
                {courseInfo?.whatToLearn?.map((item: string) => (
                  <li key={item} className="flex items-center text-16r">
                    <IconSelector id="checkmark" />
                    <span className=" ml-5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
