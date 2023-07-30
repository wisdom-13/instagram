import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import { parseDate } from "@/util/date";
import ToggleButton from "./ui/ToggleButton";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import usePosts from "@/hooks/usePosts";
import useMe from "@/hooks/useMe";
import { SimplePost } from "@/model/post";

type Props = {
  post: SimplePost
}

export default function ActionBar({ post }: Props) {
  const { id, likes, username, text, createdAt, comments } = post;

  const { user, setBookmark } = useMe();
  const { setLike } = usePosts();

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like)
  }

  const handleBookmark = (bookmark: boolean) => {
    user && setBookmark(id, bookmark);
  }


  return (
    <div className="p-3">
      <div className="flex justify-between">
        <ToggleButton toggled={liked} onToggle={handleLike} onIcon={<HeartFillIcon />} offIcon={<HeartIcon />} />
        <ToggleButton toggled={bookmarked} onToggle={handleBookmark} onIcon={<BookmarkFillIcon />} offIcon={<BookmarkIcon />} />
      </div>
      <div className="text-sm py-3">
        <b>{`좋아요 ${likes?.length ?? 0}개`}</b>
      </div>
      {text && <div className="text-sm mb-2">
        <p><b className="pr-1">{username}</b>{text}</p>
      </div>}

      <p className='text-sm font-semibold text-blue-500 mb-3'>View all {comments} comments</p>
      <p className="text-xs text-gray-500">{parseDate(createdAt)}</p>
    </div>
  );
}

