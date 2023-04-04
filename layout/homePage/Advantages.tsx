import { IconSelector } from "@/helpers/icon-selector";
export default function Advantages(): JSX.Element {
  return (
    <div className=" bg-blue bg-opacity-5">
      <div className="container grid grid-cols-3 py-44">
        <h2 className="w-128 text-h2 text-black">
          Online <br></br> Learning <span className="text-blue">Designed</span>{" "}
          For Real Life
        </h2>
        <div className="flex w-[27rem] flex-col">
          <IconSelector id="advantages1" />

          <h4 className="mt-10 text-h4 text-black">
            User-friendly platform to learn
          </h4>
          <p className="mt-5 text-16r text-grey">
            Learning theory, computer-based training, online learning,
            m-learning, where mobile technology is used
          </p>
        </div>

        <div className="flex w-[27rem] flex-col">
          <IconSelector id="advantages2" />

          <h4 className="mt-10 text-h4 text-black">
            Packed with modern technology
          </h4>
          <p className="mt-5 text-16r text-grey">
            Packed with modern technology, classroom learning which used to be
            done conventionally
          </p>
        </div>
      </div>
    </div>
  );
}
