import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import { parseDate } from "@/util/date";
import { useState } from "react";
import ToggleButton from "./ui/ToggleButton";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import { SimplePost } from "@/model/post";
import { useSession } from "next-auth/react";
import { useSWRConfig } from "swr";

type Props = {
  post: SimplePost
}

export default function ActionBar({ post }: Props) {
  const { id, likes, username, text, createdAt } = post;
  const { data: session } = useSession();
  const user = session?.user;

  const liked = user ? likes.includes(user.username) : false;
  const [bookmarked, setBookmarked] = useState(false);

  const { mutate } = useSWRConfig();

  const handleLike = (like: boolean) => {
    fetch('api/likes', {
      method: 'PUT',
      body: JSON.stringify({ id, like })
    }).then(() => mutate('/api/posts'))
  }

  return (
    <div className="p-3">
      <div className="flex justify-between">
        <ToggleButton toggled={liked} onToggle={handleLike} onIcon={<HeartFillIcon />} offIcon={<HeartIcon />} />
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

