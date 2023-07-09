import { SimplePost } from "@/model/post";
import Avatar from "./Avatar";
import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import Image from "next/image";
import { parseDate } from "@/util/date";

type Props = {
  post: SimplePost
}

export default function PostListCard({ post }: Props) {
  const { userImage, username, image, text, likes, createdAt } = post;
  return (
    <div className="w-[470px] bg-white border border-gray-200 rounded-lg mt-3">
      <div className="flex items-center p-3">
        <Avatar image={userImage} size='medium' />
        <h3 className="font-semibold pl-3">{username}</h3>
      </div>
      <div>
        <Image src={image} width={470} height={470} alt={username} />
      </div>
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
      <div className="flex border-t border-gray-200 p-3 text-sm">
        <input className="flex-grow outline-none" type="text" placeholder="댓글 달기..." />
        <button className="text-blue-600 font-semibold w-[40px]">게시</button>
      </div>
    </div>
  );
}

