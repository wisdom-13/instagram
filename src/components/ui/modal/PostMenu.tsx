'use client';

import { useState } from 'react';
import DeleteConfirm from './DeleteConfirm';
import NewPost from '@/components/NewPost';
import useFullPost from '@/hooks/post';

type Props = {
  username: string;
  userImage: string;
  postId: string;
  onClose: () => void;
};

export default function PostMenu({ username, userImage, postId, onClose }: Props) {
  const [onDeleteModal, setOnDeleteModal] = useState(false);
  const [onUpdateModal, setOnUpdateModal] = useState(false);

  const { post } = useFullPost(postId);

  function handleDelete() {
    console.log('delete')
    fetch('/api/posts', {
      method: 'PUT',
      body: JSON.stringify({ postId }),
    }).then(() => {
      location.reload();
    });
  }

  return (
    <>
      {
        !onDeleteModal && !onUpdateModal &&
        <div className='w-[300px] bg-white rounded-lg'>
          <ul className='text-sm text-center divide-y divide-slate-200 flex-col cursor-pointer'>
            <li className='leading-[40px] text-red-500 font-bold'><button className='w-full' onClick={() => setOnDeleteModal(true)}>삭제</button></li>
            <li className='leading-[40px]'><button className='w-full' onClick={() => setOnUpdateModal(true)}>수정</button></li>
            <li className='leading-[40px]'><button className='w-full' onClick={onClose}>취소</button></li>
          </ul>
        </div>
      }
      {onDeleteModal && <DeleteConfirm key='deleteModal' onDelete={() => handleDelete()} onClose={onClose} />}
      {onUpdateModal && <NewPost key='updateModal' user={user} post={post} />}
    </>
  );
}

