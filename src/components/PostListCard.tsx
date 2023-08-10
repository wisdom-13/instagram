'use client';

import usePosts from '@/hooks/posts';
import { Comment, SimplePost } from '@/model/post';
import Image from 'next/image';
import { useState } from 'react';
import ActionBar from './ActionBar';
import PostDetail from './PostDetail';
import PostModal from './PostModal';
import PostUserAvatar from './PostUserAvatar';
import ModalPortal from './ui/ModalPortal';

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, comments, text } = post;
  const [openModal, setOpenModal] = useState(false);
  const { postComment } = usePosts();
  const handlePostComment = (comment: Comment) => {
    postComment(post, comment);
  };

  return (
    <div className="w-[470px] bg-white border border-gray-200 rounded-lg mt-3">
      <PostUserAvatar image={userImage} username={username} />
      <div>
        <Image
          className="w-full object-cover aspect-square"
          src={image} width={470} height={470} alt={username} priority={priority}
          onClick={() => setOpenModal(true)} />
      </div>
      <ActionBar post={post} onComment={handlePostComment}>
        {text && <div className="text-sm mb-2">
          <p><b className="pr-1">{username}</b>{text}</p>
        </div>}
        {comments > 1 && (
          <button
            className='text-sm font-semibold text-blue-500 mb-3'
            onClick={() => setOpenModal(true)}>
            {`View all ${comments - 1} comments`}
          </button>
        )}
      </ActionBar>
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
