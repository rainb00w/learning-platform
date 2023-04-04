export interface IconSelectorPropsTS {
  id: string;
  fill?: string;
  stroke?: string;
  width?: string;
  height?: string;
  rotate?: string;
}

export interface CourseTypeTS {
  id?: string;
  articlesQuantity?: number;
  author?: string;
  courseName?: string;
  downloadableResourses?: number;
  img?: string;
  lessonsQuantity?: number;
  longDescription?: string;
  popularity?: boolean;
  rating?: number;
  shortDescription?: string;
  videoTotalMins?: number;
  whatToLearn?: string[];
}

export interface LessonTypeTS {
  id?: string;
  courseID?: string;
  courseName?: string;
  duration?: number;
  lessonAttachment?: string[];
  lessonBody?: string;
  lessonDescription?: string;
  lessonName?: string;
  lessonNumber?: number;
  lessonType?: string;
  sectionName?: string;
  sectionNumber?: number;
  videoLink?: number;
}

export interface CourseToRenderPropsTS {
  fontColor: string;
  data: CourseTypeTS[];
}

export interface ButtonPropsTS {
  style: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export interface RatingPropsTS {
  rating: number;
}

export interface AccordionPropsTS {
  heading: string;
  lessons: LessonTypeTS[];
  courseID: string;
}

export interface AccordionSidebarPropsTS {
  heading: string;
  lessons: LessonTypeTS[];
  courseID: string;
  lessonData: LessonTypeTS;
  onClose(): any;
}

export interface ModalPropsTS {
  onClose(): any;
  lessonData: LessonTypeTS;
  lessonsList: LessonTypeTS[];
  sectionsArray: any[];
  courseID: string;
}

export interface LessonsCountPropsTS {
  returnValue: string;
  heading: string;
  lessons: LessonTypeTS[];
}

export interface RouterQueryTS {
  courseID?: string;
  lessonID?: string;
}

export interface SectionListTS {
  sectionName: string;
  sectionNumber: number;
}

export interface slideTS {
  id: number;
  icon: string;
  heading: string;
  text: string;
}
