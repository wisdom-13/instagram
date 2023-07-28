import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import { parseDate } from "@/util/date";
import { useState } from "react";
import ToggleButton from "./ui/ToggleButton";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";

type Props = {
  likes: string,
  username: string;
  text?: string;
  createdAt: string;
}

export default function ActionBar({ likes, username, text, createdAt }: Props) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <div className="p-3">
      <div className="flex justify-between">
        <ToggleButton toggled={liked} onToggle={setLiked} onIcon={<HeartFillIcon />} offIcon={<HeartIcon />} />
        <ToggleButton toggled={bookmarked} onToggle={setBookmarked} onIcon={<BookmarkFillIcon />} offIcon={<BookmarkIcon />} />
      </div>
      <div className="text-sm py-3">
        <b>{`좋아요 ${likes?.length ?? 0}개`}</b>
      </div>
      {text && <div className="text-sm mb-2">
        <p><b className="pr-1">{username}</b>{text}</p>
      </div>}
      <p className="text-xs text-gray-500">{parseDate(createdAt)}</p>
    </div>
  );
}

