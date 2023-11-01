'use client'

import useMe from '@/hooks/me';
import Avatar from './Avatar';
import MoreIcon from './ui/icons/MoreIcon';
import { useState } from 'react';
import PostMenu from './ui/modal/PostMenu';
import ModalPortal from './ui/ModalPortal';
import PostModal from './PostModal';
import MenuModal from './MenuModal';
import { useRouter } from 'next/navigation';

type Props = {
  image: string;
  username: string;
  postId?: string;
};

export default function PostUserAvatar({ image, username, postId }: Props) {
  const { user: loggedInUser } = useMe();
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  function handleDelete() {
    console.log('delete')
    fetch('/api/posts', {
      method: 'PUT',
      body: JSON.stringify({ postId }),
    }).then(() => {
      console.log('success')
      router.push('/');
    });
  }

  return (
    <div className="flex items-center justify-between p-3">
      <div className='flex items-center'>
        <Avatar image={image} size='medium' />
        <h3 className="font-semibold pl-3">{username}</h3>
      </div>
      {(username == loggedInUser?.username && postId)
        && <button onClick={() => setOpenModal(!openModal)}><MoreIcon /></button>
      }
      {
        openModal && <ModalPortal>
          <MenuModal onClose={() => setOpenModal(false)}>
            <PostMenu onDelete={() => handleDelete()} onClose={() => setOpenModal(false)} />
          </MenuModal>
        </ModalPortal>
      }
    </div>
  );
}
