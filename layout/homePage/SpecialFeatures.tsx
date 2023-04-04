import Link from "next/link";

export default function SpecialFeatures(): JSX.Element {
  return (
    <div className="relative">
      <div className="container relative z-10 flex w-full items-center justify-between rounded-md bg-yellowLight pt-24 pb-28 pl-28 pr-44">
        <div className="">
          <h3 className="text-h3 text-black">
            Join now for <br></br>get special features!
          </h3>
          <p className="mt-7 text-16r text-black">
            Let's subscribe with us and find the fun.
          </p>
        </div>

        <div className="">
          <Link href="/sign-up">
            <button className="buttonPrimaryBlack"> Get started</button>
          </Link>
        </div>
      </div>
      <div className="gradient-dark absolute bottom-0 z-0 h-[50%] w-full"></div>
    </div>
  );
}
