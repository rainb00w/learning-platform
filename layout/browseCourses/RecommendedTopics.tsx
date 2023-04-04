import { topics } from "@/helpers/categories-info";

export default function RecommendedTopics(): JSX.Element {
  return (
    <div className="">
      <h4 className="text-h4 text-black">Topics recommended for you</h4>
      <ul className="mt-12 grid grid-cols-4 gap-12">
        {topics.map((topic) => (
          <li
            key={topic}
            className="flex w-[280px] cursor-pointer items-center justify-center rounded-lg border border-solid border-black/10 py-8 text-16b text-blue hover:bg-greyLight/40"
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
