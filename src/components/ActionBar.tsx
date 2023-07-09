import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import { parseDate } from "@/util/date";

type Props = {
  likes: string,
  username: string;
  text: string;
  createdAt: string;
}

export default function ActionBar({ likes, username, text, createdAt }: Props) {
  return (
    <div className="p-3">
      <div className="flex justify-between">
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div className="text-sm py-3">
        <b>{`좋아요 ${likes?.length ?? 0}개`}</b>
      </div>
      <div className="text-sm">
        <p><b className="pr-1">{username}</b>{text}</p>
        <p className="text-xs text-gray-500 mt-2">{parseDate(createdAt)}</p>
      </div>
    </div>
  );
}

