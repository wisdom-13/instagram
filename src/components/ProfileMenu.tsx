import HeartIcon from "./ui/icons/HeartIcon";

export default function ProfileMenu() {
  return (
    <div className="flex items-center w-full max-w-[935px] border-t border-gray-300">
      <ul className="flex w-full h-[53px] items-center justify-center text-xs">
        <li className="mx-5 py-5 mt-[2px] border-t-2 border-gray-500">게시물</li>
        <li className="mx-5">저장됨</li>
        <li className="mx-5 flex">좋아함</li>
      </ul>
    </div>
  );
}

