import ROUTES from "@/constants/routes";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { getDeviconClassName } from "@/lib/utils";

interface Props {
  _id: string;
  title: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}

function TagCard({ _id, title, questions, showCount, compact }: Props) {
  const iconClassName = getDeviconClassName(title);
  return (
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 tracking-wider uppercase transition-all duration-300 hover:brightness-90 dark:hover:brightness-110">
        <div className="flex-center space-x-2">
          <i className={`${iconClassName} text-sm`}></i>
          <span>{title}</span>
        </div>
      </Badge>
      {showCount && <p className="small-medium text-dark500_light700">{questions}</p>}
    </Link>
  );
}

export default TagCard;
