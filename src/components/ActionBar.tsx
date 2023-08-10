import BookmarkIcon from './ui/icons/BookmarkIcon';
import HeartIcon from './ui/icons/HeartIcon';
import { parseDate } from '@/util/date';
import ToggleButton from './ui/ToggleButton';
import HeartFillIcon from './ui/icons/HeartFillIcon';
import BookmarkFillIcon from './ui/icons/BookmarkFillIcon';
import { Comment, SimplePost } from '@/model/post';
import usePosts from '@/hooks/posts';
import useMe from '@/hooks/me';
import CommentForm from './CommentForm';

type Props = {
  post: SimplePost;
  children?: React.ReactNode;
  onComment: (comment: Comment) => void;
};

export default function ActionBar({ post, children, onComment }: Props) {
  const { id, likes, createdAt } = post;
  const { user, setBookmark } = useMe();
  const { setLike } = usePosts();

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };

  const handleBookmark = (bookmark: boolean) => {
    user && setBookmark(id, bookmark);
  };

  const handleComment = (comment: string) => {
    user && onComment({ comment, username: user.username, image: user.image });
  };

  return (
    <>
      <div className="p-3">
        <div className="flex justify-between">
          <ToggleButton toggled={liked} onToggle={handleLike} onIcon={<HeartFillIcon />} offIcon={<HeartIcon />} />
          <ToggleButton toggled={bookmarked} onToggle={handleBookmark} onIcon={<BookmarkFillIcon />} offIcon={<BookmarkIcon />} />
        </div>
        <div className="text-sm py-3">
          <b>{`좋아요 ${likes?.length ?? 0}개`}</b>
        </div>
        {children}
        <p className="text-xs text-gray-500">{parseDate(createdAt)}</p>
      </div>
      <CommentForm onPostComment={handleComment} />
    </>
  );
}
