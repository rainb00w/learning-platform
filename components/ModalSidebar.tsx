import AccordionSidebar from "./AccordionSidebar";
import React from "react";
import { ModalPropsTS } from "@/helpers/types";

export default function Modal({
  onClose,
  lessonData,
  lessonsList,
  sectionsArray,
  courseID,
}: ModalPropsTS): JSX.Element {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm">
      <div className="container relative">
        <div className="absolute top-0 right-0 h-screen w-[500px] bg-white">
          <div className=" px-20 pt-20">
            <div className="flex items-center justify-between">
              <h3 className="text-h3 text-black">Course content</h3>
              <button onClick={() => onClose()} className="buttonPrimaryBlue">
                Close
              </button>
            </div>
            <div className="flex items-center justify-between pt-12">
              <p className="text-14r text-black">Overall progress</p>
              <p>80%</p>
            </div>
            <div className="mt-4 h-[2px] w-full bg-greyLight">
              <div className="h-[2px] w-[80%] bg-blue"></div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-y-10 px-20">
            {sectionsArray.map((section) => (
              <div
                key={section}
                className="border-b border-solid border-black/10 pb-10 last:border-b-0"
              >
                <div>
                  <AccordionSidebar
                    onClose={onClose}
                    heading={section[0]}
                    lessons={lessonsList}
                    courseID={courseID}
                    lessonData={lessonData}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
