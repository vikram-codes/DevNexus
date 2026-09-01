import TagCard from "@/components/cards/TagCard";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

const hotQuestions = [
  { _id: "1", title: "How to center a div in CSS?" },
  { _id: "2", title: "What is the difference between let and var in JavaScript?" },
  { _id: "3", title: "How to make a responsive navbar using Tailwind CSS?" },
  { _id: "4", title: "What is the difference between React and Angular?" },
];

const popularTags = [
  { _id: "1", title: "JavaScript", questions: 120 },
  { _id: "2", title: "React", questions: 80 },
  { _id: "3", title: "CSS", questions: 60 },
  { _id: "4", title: "HTML", questions: 50 },
  { _id: "5", title: "Node.js", questions: 40 },
  { _id: "6", title: "TypeScript", questions: 30 },
  { _id: "7", title: "Next.js", questions: 20 },
  { _id: "8", title: "Tailwind CSS", questions: 10 },
];

function RightSidebar() {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 right-0 flex h-screen w-87.5 flex-col gap-16 overflow-y-auto border-l p-6 pt-36 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-7.5">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              href={ROUTES.PROFILE(_id)}
              key={_id}
              className="flex items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt=""
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, title, questions }) => (
            <TagCard key={_id} _id={_id} title={title} questions={questions} showCount compact />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RightSidebar;
