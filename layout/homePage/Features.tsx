import { IconSelector } from "@/helpers/icon-selector";

export default function Features(): JSX.Element {
  return (
    <div className="bg-black/5">
      <div className="container flex gap-32  py-40">
        <div className="">
          <p className="inline rounded-lg bg-[#158FFF]  bg-opacity-10 px-5 py-2 text-14r text-blue">
            Our advantage features
          </p>
          <h3 className="mt-6 text-h3 text-black">
            Why must choose learning Platform
          </h3>
          <p className="mt-10 text-16r  text-grey">
            LearningPlatform is biggest platform to learning anything to improve
            your skill with 350+ online video course
          </p>
          <div className="mt-14 h-[1px] bg-grey"></div>
          <div className="mt-14 flex items-center gap-14">
            <div className="">
              <h4 className="text-h4 text-black">350+</h4>
              <p className="text-14r text-grey">Courses</p>
            </div>
            <div className="">
              <h4 className="text-h4 text-black">16</h4>
              <p className="text-14r text-grey">Categories</p>
            </div>
            <div className="">
              <h4 className="text-h4 text-black">20k+</h4>
              <p className="text-14r text-grey">Students</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-14">
          <div className=" flex gap-8 rounded-lg bg-white py-14 pl-14 pr-20">
            <div className="shrink">
              <IconSelector id="features1" />
            </div>
            <div className="">
              <p className="text-18b text-black">Lifetime Access</p>
              <p className="col-start-2 mt-2 text-16r text-grey">
                Only buy one time you can watch it anytime, any where, lorem
                ipsum dolot sit amet
              </p>
            </div>
          </div>
          <div className=" flex gap-8 rounded-lg border border-solid border-black/10 py-14 pl-14 pr-20 hover:bg-white">
            <div className="shrink">
              <IconSelector id="features3" />
            </div>
            <div className="">
              <p className="text-18b text-black">Expert Teachers</p>
              <p className="mt-2 text-16r text-grey">
                Only buy one time you can watch it anytime, any where, lorem
                ipsum dolot sit amet
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex gap-8 rounded-lg border border-solid border-black/10 py-14 pl-14 pr-20 hover:bg-white">
              <div className="shrink">
                <IconSelector id="features2" />
              </div>
              <div className="">
                <p className="text-18b text-black">Practical Learning</p>
                <p className="text-16r text-grey">
                  Only buy one time you can watch it anytime, any where, lorem
                  ipsum do lot sit amet
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 rounded-lg border border-solid border-black/10 py-14 pl-14 pr-20 hover:bg-white">
            <div className="shrink">
              <IconSelector id="features4" />
            </div>
            <div className="">
              <p className="text-18b text-black">Video Lessons</p>
              <p className="text-16r text-grey">
                Only buy one time you can watch it any time, any where,
                loremipsum dolot sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
