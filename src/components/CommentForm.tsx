import SmileIcon from "./ui/icons/SmileIcon";

export default function CommentForm() {
  return (
    <form className="flex border-t border-gray-200 p-3 text-sm">
      <SmileIcon />
      <input className="flex-grow outline-none pl-3" type="text" placeholder="댓글 달기..." />
      <button className="text-blue-600 font-semibold w-[40px]">게시</button>
    </form>
  );
}

