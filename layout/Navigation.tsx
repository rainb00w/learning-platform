import Link from "next/link";
import { IconSelector } from "../helpers/icon-selector";
import { useRecoilValue } from "recoil";
import { AuthStateAtom } from "../helpers/atoms";
import { useRouter } from "next/router";

export default function Navigation(): JSX.Element {
  const isLoggedIn = useRecoilValue(AuthStateAtom);
  const router = useRouter();

  return (
    <>
      <nav>
        <div className="gradient-dark">
          <div className="container flex h-32 items-center justify-between text-16b text-white ">
            <div className="-ml-16 flex cursor-pointer items-center  gap-x-6 hover:text-yellowLight">
              <div className="hoverItem">
                <IconSelector id="navigationLogo" />
              </div>

              <Link href="/" className="smoothTransition py-4">
                learningPlatform
              </Link>
            </div>
            <div className="flex items-center gap-x-12 ">
              <Link
                href="/courses"
                className={`smoothTransition py-4 hover:text-yellowLight   ${
                  router.pathname == "/courses" ? "activeNavLink" : ""
                }`}
              >
                Browse
              </Link>
              <Link
                href="/courses"
                className="smoothTransition py-4 hover:text-yellowLight"
              >
                Categories
              </Link>
              <Link
                href="/courses"
                className=" smoothTransition py-4 hover:text-yellowLight"
              >
                FAQ
              </Link>
            </div>
            <div className="flex items-center gap-x-10">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center gap-x-8">
                    <IconSelector id="profileIcon" />
                    <Link
                      className={`smoothTransition  py-4 hover:text-yellowLight   ${
                        router.pathname == "/profile" ? "activeSignIn" : ""
                      }`}
                      href="/profile"
                    >
                      <span>Profile</span>
                    </Link>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-x-8">
                  <Link
                    className={`smoothTransition py-4 hover:text-yellowLight   ${
                      router.pathname == "/sign-in" ? "activeSignIn" : ""
                    }`}
                    href="/sign-in"
                  >
                    Sign in
                  </Link>
                  <Link className="smoothTransition py-4" href="/sign-up">
                    <button className="buttonSecondaryYellow">
                      Get started
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="border-b border-solid border-black "></div>
        </div>
      </nav>
    </>
  );
}
