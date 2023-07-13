import { FullPost, SimplePost } from "@/model/post";
import userSWR from 'swr';

type Props = {
  post: SimplePost,
}

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = userSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;

  return (
    <div>

    </div>
  );
}


