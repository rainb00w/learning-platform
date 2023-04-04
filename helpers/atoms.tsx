import { atom, useRecoilState } from "recoil";

export const AuthStateAtom = atom({
  key: "authStateAtom",
  default: false,
});

export const useAuthStateAtom = () => useRecoilState(AuthStateAtom);

export const searchCoursesInput = atom({
  key: "searchCoursesInput",
  default: "",
});

export const useSearchCoursesInput = () => useRecoilState(searchCoursesInput);
