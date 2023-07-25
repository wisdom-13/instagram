import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import PostGridIcon from "./ui/icons/PostGridIcon";

const tab = [
  { 'title': '게시물', 'icon': <PostGridIcon className="w-3" /> },
  { 'title': '저장됨', 'icon': <BookmarkIcon className="w-3" /> },
  { 'title': '좋아함', 'icon': <HeartIcon className="w-3" /> },
]

export default function ProfileMenu() {
  return (
    <div className="flex items-center w-full max-w-[935px] border-t border-gray-300">
      <ul className="flex w-full h-[53px] items-center justify-center text-xs">
        {tab.map(({ title, icon }) => (
          <li key={title} className="flex items-center h-[55px] mx-5 border-t-2 border-gray-500">
            {icon}<span className="pl-1">{title}</span>
          </li>
        ))}


      </ul>
    </div>
  );
}

