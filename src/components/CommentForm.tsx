import { FormEvent, useState } from "react";
import SmileIcon from "./ui/icons/SmileIcon";

type Props = {
  onPostComment: (comment: string) => void
}

export default function CommentForm({ onPostComment }: Props) {
  const [comment, setComment] = useState('');
  const buttonDisabled = comment.length === 0;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onPostComment(comment);
    setComment('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex border-t border-gray-200 p-3 text-sm">
      <SmileIcon />
      <input
        className="flex-grow outline-none pl-3"
        type="text"
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="댓글 달기..."
        required
      />
      <button className={` font-semibold w-[40px] ${buttonDisabled ? 'text-blue-200' : 'text-blue-600'}`} disabled={buttonDisabled}>게시</button>
    </form>
  );
}

