import { getDoc, getDocs, query, where, doc } from "firebase/firestore/lite";
import { courses as coursesDB, lessons as lessonsDB } from "@/api/firebase";
import { useQuery, QueryClient } from "@tanstack/react-query";
import { LessonTypeTS, CourseTypeTS } from "@/helpers/types";

const fetchLessons = async (courseID: string) => {
  const request = query(lessonsDB, where("courseID", "==", courseID));
  const snapshot = await getDocs(request);
  const result: LessonTypeTS[] = [];

  snapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() });
  });

  return result;
};

const fetchLesson = async (lessonID: string) => {
  if (lessonID === undefined) {
    return;
  }
  const docRef = doc(lessonsDB, lessonID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("No such lesson!");
  }
};

const fetchCourses = async () => {
  const snapshot = await getDocs(coursesDB);
  const result: CourseTypeTS[] = [];

  snapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() });
  });

  return result;
};

const fetchCourse = async (courseID: string) => {
  if (courseID === undefined) {
    return;
  }
  const docRef = doc(coursesDB, courseID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("No such course!");
  }
};

export const useCoursesList = () =>
  useQuery({
    queryKey: ["coursesList"],
    queryFn: fetchCourses,
  });

export const useLessonsList = (id: string) =>
  useQuery({
    queryKey: ["lessonsList"],
    queryFn: () => fetchLessons(id),
    enabled: !!id,
  });

export const useFetchCourse = (id: string) => {
  const queryClient = new QueryClient();
  const result = useQuery({
    queryKey: [id],
    queryFn: () => fetchCourse(id),
    enabled: !!id,
    initialData: () =>
      queryClient.getQueriesData(["coursesList"])?.find((course) => {
        return course.id === id;
      }),
  });
  return result;
};

export const useFetchLesson = (id: string) => {
  const queryClient = new QueryClient();
  const result = useQuery({
    queryKey: [id],
    queryFn: () => fetchLesson(id),
    enabled: !!id,
    initialData: () =>
      queryClient
        .getQueriesData(["lessonsList"])
        ?.find((lesson) => lesson.id === id),
  });
  return result;
};
