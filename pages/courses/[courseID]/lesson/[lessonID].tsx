import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuthStateAtom } from "@/helpers/atoms";
import { useFetchLesson, useLessonsList } from "@/api/fetch-api";
import { IconSelector } from "@/helpers/icon-selector";
import { createSectionsList } from "@/helpers/lessons-functions";
import Modal from "@/components/ModalSidebar";
import { RouterQueryTS } from "@/helpers/types";

export default function LessonPage(): JSX.Element {
  const router = useRouter();
  const [authState, setAuthState] = useAuthStateAtom();
  const { courseID, lessonID }: RouterQueryTS = router.query;

  const {
    data: lessonsList,
    isLoading: lessonsLoading,
    error: lessonsError,
    isSuccess: lessonsSuccess,
  } = useLessonsList(String(courseID));
  const {
    data: lessonData,
    isLoading: lessonLoading,
    error: lessonError,
  } = useFetchLesson(String(lessonID));

  const nextLesson = lessonsList?.find(
    (lesson) => lesson?.lessonNumber === lessonData?.lessonNumber + 1
  );
  const previousLesson = lessonsList?.find(
    (lesson) => lesson?.lessonNumber === lessonData?.lessonNumber - 1
  );

  const [ModalIsOpen, setModalIsOpen] = useState<Boolean>();

  let sectionsArray;
  if (lessonsList) {
    sectionsArray = createSectionsList(lessonsList);
  }

  return (
    <>
      {ModalIsOpen &&
        lessonsList &&
        lessonData &&
        sectionsArray &&
        courseID && (
          <Modal
            onClose={() => setModalIsOpen(false)}
            lessonsList={lessonsList}
            lessonData={lessonData}
            sectionsArray={sectionsArray}
            courseID={courseID}
          />
        )}

      {authState ? (
        <>
          <div className="gradient-dark ">
            <div className="container ">
              {lessonLoading ? (
                <div className=" flex items-center justify-center py-24">
                  <IconSelector id="threeDots" />
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between pt-28">
                    <h3 className="text-h3 text-white">
                      {lessonData?.courseName}
                    </h3>
                    <button
                      className=" buttonSecondaryYellow"
                      onClick={() => setModalIsOpen(true)}
                    >
                      Show lessons
                    </button>
                  </div>

                  {lessonData?.lessonType === "video" && (
                    <div className=" my-20">
                      <iframe
                        width="100%"
                        height="840px"
                        src={lessonData?.videoLink}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                      VIDEO
                    </div>
                  )}
                  <div className="mt-16 grid grid-cols-[750px_1fr] gap-x-48 pb-28">
                    <div className=" text-16m text-grey">
                      <p className="flex items-center gap-x-3">
                        {lessonData?.sectionName}
                        <span className="dot"></span>
                        <span>Lesson</span>
                        {lessonData?.lessonNumber}
                      </p>
                      <h4 className="mt-5 text-h4 text-white">
                        {lessonData?.lessonName}
                      </h4>

                      <p className="mt-10 text-16r">
                        {lessonData?.lessonDescription}
                      </p>
                    </div>
                    <div className="rounded-xl border border-solid border-white/20 pt-16 pr-10 pl-14 pb-14 text-14r text-grey">
                      <div className="flex justify-between">
                        {nextLesson && (
                          <div className="">
                            <p className="flex items-center gap-x-4 ">
                              Next <span className="dot"></span> Lesson{" "}
                              {nextLesson?.lessonNumber}
                            </p>
                            <p className="mt-2 text-16r text-white">
                              {nextLesson?.lessonName}
                            </p>
                            <p className="mt-6 flex items-center gap-x-3">
                              <IconSelector id="courseClock" />
                              <span>{nextLesson?.duration} min</span>
                            </p>
                          </div>
                        )}

                        {previousLesson && (
                          <div className="flex h-[24px] items-center">
                            <Link
                              href={`/courses/${courseID}/lesson/${previousLesson?.id}`}
                            >
                              <button className="buttonSecondaryBlack ">
                                Previous lesson
                              </button>
                            </Link>
                          </div>
                        )}
                        {nextLesson && (
                          <div className="flex h-[24px] items-center">
                            <Link
                              href={`/courses/${courseID}/lesson/${nextLesson?.id}`}
                            >
                              <button className="buttonSecondaryBlack ">
                                Next lesson
                              </button>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="container ">
            <div className="grid grid-cols-[750px_1fr] gap-x-48 py-28">
              {lessonLoading && (
                <div className="container flex items-center justify-center">
                  <IconSelector id="loadingCircle" />
                </div>
              )}
              <div
                className="parsedHTML"
                dangerouslySetInnerHTML={{ __html: lessonData?.lessonBody }}
              ></div>
              {lessonData && (
                <div className="">
                  <h4 className="text-h4 text-black">Lesson attachment</h4>
                  <ul className="my-8 flex flex-col gap-4">
                    {lessonData?.lessonAttachment?.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-x-3 text-16m text-black"
                      >
                        <IconSelector id="courseFileYellow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-14b text-blue">Download all</p>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-y-8 py-24">
          <h3
            className="text-bla text-h3
          "
          >
            Please sign in to see the content
          </h3>
          <Link href="/sign-in">
            <button className="buttonPrimaryYellow">Sign in</button>
          </Link>
        </div>
      )}
    </>
  );
}
