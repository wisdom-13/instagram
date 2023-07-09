import { SimplePost } from "@/model/post";
import Avatar from "./Avatar";
import Image from "next/image";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";

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
        <Image className="w-full object-cover aspect-square" src={image} width={470} height={470} alt={username} />
      </div>
      <ActionBar likes={likes} username={username} text={text} createdAt={createdAt} />
      <CommentForm />
    </div>
  );
}

