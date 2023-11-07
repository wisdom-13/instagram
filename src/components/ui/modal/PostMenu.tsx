'use client';

import { useState } from 'react';

type Props = {
  onClose: () => void;
  deleteModal: React.ReactNode;
  updateModal: React.ReactNode;
};

export default function PostMenu({ onClose, deleteModal, updateModal }: Props) {
  const [onDeleteModal, setOnDeleteModal] = useState(false);
  const [onUpdateModal, setOnUpdateModal] = useState(false);

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
      {onDeleteModal && deleteModal}
      {onUpdateModal && updateModal}
    </>
  );
}

