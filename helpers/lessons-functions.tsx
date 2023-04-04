import { LessonTypeTS } from "./types";
import { SectionListTS } from "./types";

export function lessonsCount(
  returnValue: string,
  heading: string,
  lessons: LessonTypeTS[]
) {
  //  TOTAL LESSONS QUANTITY INSIDE SECTION
  const filtered = lessons?.filter(
    (lesson: LessonTypeTS) => lesson.sectionName === heading
  );

  //  TOTAL LESSONS LENGTH INSIDE SECTION
  const videoDuration = filtered?.reduce((acc: number, currentValue) => {
    if (currentValue.duration) {
      return acc + Number(currentValue.duration);
    }
    return acc;
  }, 0);

  switch (returnValue) {
    case "lessonsQuantity":
      return filtered.length;
    case "lessonsDuration":
      return videoDuration;
    default:
      return null;
  }
}
//--------------------------------------
/* Convert minutes to HR and MN */
export function minutesToHours(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes };
}

//--------------------------------------
/* Creating SECTIONS list */
export function createSectionsList(lessons: LessonTypeTS[]) {
  let sections: [first: string, second: number][] = [];
  if (lessons) {
    lessons.map((lesson: LessonTypeTS) =>
      sections.push([lesson.sectionName, lesson.sectionNumber])
    );
    sections.sort(function (a, b) {
      return a[1] - b[1];
    });
  }
  let stringArray = sections.map(JSON.stringify);
  let uniqueStringArray = new Set(stringArray);
  let sectionsArray = Array.from(uniqueStringArray, JSON.parse);

  return sectionsArray;
}
//--------------------------------------
