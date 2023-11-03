'use client'

import useMe from '@/hooks/me';
import Avatar from './Avatar';
import MoreIcon from './ui/icons/MoreIcon';
import { useState } from 'react';
import PostMenu from './ui/modal/PostMenu';
import ModalPortal from './ui/ModalPortal';
import MenuModal from './MenuModal';
import DeleteConfirm from './ui/modal/DeleteConfirm';

type Props = {
  image: string;
  username: string;
  postId?: string;
};

export default function PostUserAvatar({ image, username, postId }: Props) {
  const { user: loggedInUser } = useMe();
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);

  function handleDelete() {
    console.log('delete')
    fetch('/api/posts', {
      method: 'PUT',
      body: JSON.stringify({ postId }),
    }).then(() => {
      location.reload();
    });
  }

  function closeModal() {
    setOpenModal(false);
    setOpenDeleteConfirm(false);
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
          <MenuModal onClose={closeModal}>
            {
              !openDeleteConfirm
              && <PostMenu onDelete={() => setOpenDeleteConfirm(!openDeleteConfirm)} onClose={closeModal} />
            }
            {
              openDeleteConfirm
              && <DeleteConfirm onDelete={() => handleDelete()} onClose={closeModal} />
            }
          </MenuModal>
        </ModalPortal>
      }
    </div>
  );
}
