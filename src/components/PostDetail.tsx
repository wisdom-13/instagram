import { FullPost, SimplePost } from "@/model/post";
import Image from "next/image";
import userSWR from 'swr';
import PostUserAvatar from "./ui/PostUserAvatar";

type Props = {
  post: SimplePost,
}

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = userSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;

  return (
    <section>
      <div className="relative">
        <Image src={image} alt={`photo by ${username}`} fill sizes='650px' priority />
      </div>
      <div>
        <PostUserAvatar image={userImage} username={username} />
      </div>
    </section>
  );
}


