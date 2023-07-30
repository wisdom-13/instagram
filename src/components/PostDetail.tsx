import { SimplePost } from "@/model/post";
import Image from "next/image";
import PostUserAvatar from "./ui/PostUserAvatar";
import Avatar from "./Avatar";
import ActionBar from "./ActionBar";
import useFullPost from "@/hooks/useFullPost";

type Props = {
  post: SimplePost,
}

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image } = post;
  const { post: data, postComment } = useFullPost(id);
  const comments = data?.comments;

  return (
    <section className="flex w-full h-full bg-black">
      <div className="relative basis-1/2">
        <Image src={image} className="object-contain" alt={`photo by ${username}`} fill sizes='650px' priority />
      </div>
      <div className="bg-white basis-1/2 flex flex-col text-sm">
        <PostUserAvatar image={userImage} username={username} />
        <ul className="border-t border-gray-200 h-full overflow-y-auto">
          {comments && comments.map(({ image, username: commentUsername, comment, createdAt }, index) => <li key={index}>
            <div className="flex items-center p-3">
              <Avatar image={image} size='medium' />
              <span className="font-semibold pl-3 pr-2">{commentUsername}</span>
              <span>{comment}</span>
            </div>
          </li>)}
        </ul>
        <div>
          <ActionBar post={post} onComment={postComment} />

        </div>
      </div>
    </section>
  );
}


