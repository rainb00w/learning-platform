import {
  // onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

export const loginEmailPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential;
  } catch (error) {
    console.log("Something went wrong during logIn");
  }
};

export const registerEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.log("Something went wrong during register");
  }
};

export const logOutFunction = async () => {
  try {
    const response = await signOut(auth);
    return response;
  } catch (error) {
    console.log("Something went wrong during logOut");
  }
};

// --- FOR TESTING PURPOSES
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("LOGGED IN ");
//   } else {
//     console.log("LOGGED OUT ");
//   }
// });
