import { registerEmailPassword } from "@/api/auth-api";
import { useState } from "react";
import { useAuthStateAtom } from "@/helpers/atoms";
import { useRouter } from "next/router";
import { IconSelector } from "@/helpers/icon-selector";

export default function SignUp(): JSX.Element {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [authState, setAuthState] = useAuthStateAtom();

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSignUp = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    setIsLoading(true);

    const userCredential = await registerEmailPassword(email, password);

    setForm({ email: "", password: "" });
    if (userCredential) {
      setAuthState(true);
      router.push("/");
    }
    setIsLoading(false);
  };

  return (
    <div className="container">
      {authState ? (
        <div className="my-16 flex items-center justify-center">
          <p className="text-h4">You are already signed in!</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8">
          <h3 className="text-h3 text-black">Sign Up</h3>

          {!isLoading ? (
            <form
              className="flex flex-col items-center justify-center gap-y-4 pt-16"
              action=""
              onSubmit={handleSignUp}
            >
              <div className="grid w-[30rem] grid-cols-[8rem_1fr] gap-y-4">
                <label className="py-3 px-6 text-14b text-black">Email</label>
                <input
                  className="ml-4 h-[3rem] rounded-lg border-2 border-solid  border-blue bg-blue/10 py-3 px-6 text-14b text-blue "
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                ></input>

                <label className=" py-3 px-6 text-14b text-black">
                  Password
                </label>
                <input
                  className="ml-4 h-[3rem] rounded-lg border-2 border-solid  border-blue bg-blue/10 py-3 px-6 text-14b text-blue "
                  value={form.password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                ></input>
              </div>

              <button className="buttonPrimaryBlack" type="submit">
                Sign Up
              </button>
            </form>
          ) : (
            <div className="container flex items-center justify-center">
              <IconSelector id="loadingCircle" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
