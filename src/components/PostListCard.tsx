'use client'

import { SimplePost } from "@/model/post";
import Avatar from "./Avatar";
import Image from "next/image";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";

type Props = {
  post: SimplePost;
  priority?: boolean;
}

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, text, likes, createdAt } = post;
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-[470px] bg-white border border-gray-200 rounded-lg mt-3">
      <div className="flex items-center p-3">
        <Avatar image={userImage} size='medium' />
        <h3 className="font-semibold pl-3">{username}</h3>
      </div>
      <div>
        <Image
          className="w-full object-cover aspect-square"
          src={image} width={470} height={470} alt={username} priority={priority}
          onClick={() => setOpenModal(true)} />
      </div>
      <ActionBar likes={likes} username={username} text={text} createdAt={createdAt} />
      <CommentForm />
      {
        openModal && <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      }
    </div>
  );
}

