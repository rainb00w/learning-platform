import Link from "next/link";
import { useRouter } from "next/router";
import { IconSelector } from "@/helpers/icon-selector";

export default function Footer(): JSX.Element {
  const router = useRouter();
  return (
    <div className="gradient-dark pt-24 pb-12">
      <footer>
        <nav>
          <div className="container flex items-center justify-between text-16b text-white">
            <div className=" flex items-center gap-x-6 hover:text-yellowLight">
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
                  router.pathname == "/courses" ? "text-yellow" : ""
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
            <div className="flex gap-10">
              <div className="hoverItem cursor-pointer">
                <IconSelector id="facebook" />
              </div>
              <div className="hoverItem cursor-pointer">
                <IconSelector id="youtube" />
              </div>
              <div className="hoverItem cursor-pointer">
                <IconSelector id="instagram" />
              </div>
            </div>
          </div>
        </nav>

        <div className="container pt-40">
          <p className="text-14r text-grey">© learningPlatform, 2023</p>
        </div>
      </footer>
    </div>
  );
}
