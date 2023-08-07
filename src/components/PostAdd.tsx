'use client'

import React from 'react';
import Button from './ui/Button';
import MediaIcon from './ui/icons/MediaIcon';
import { signIn, useSession } from 'next-auth/react';
import Avatar from './Avatar';
import PostUserAvatar from './ui/PostUserAvatar';

export default function PostAdd() {
  const { data: session } = useSession();
  const user = session?.user;

  if (!user) {
    return signIn();
  }

  return (
    <form className='w-[1000px] h-[calc(100%-3rem)] bg-white border border-gray-200 rounded-lg mt-3'>
      <div className='flex items-center h-[48px] justify-between border-b border-gray-200'>
        <div className='w-[80px]'></div>
        <h1 className='font-semibold'>새 게시물 만들기</h1>
        <button className=' font-semibold w-[80px] text-sm text-blue-600'>공유하기</button>
      </div>
      <div className='flex h-[inherit]'>
        <div className='w-3/5 h-full flex flex-col items-center justify-center text-center'>
          <input type='file' name='post_img' accept='image/jpg,impge/png,image/jpeg,image/gif' />
          <MediaIcon />
          <p className='text-2xl'>사진을 여기에 끌어다 놓으세요</p>
          <Button className='mt-5' text='컴퓨터에서 선택' blue={true}></Button>
        </div>
        <div className='w-2/5 border-l border-gray-200'>
          <PostUserAvatar username={user.username} image={user.image} />
          <div className='px-3 border-b border-gray-200'>
            <textarea name='post_comment' className='w-full resize-none outline-none' placeholder='문구 입력...' rows={10}></textarea>
          </div>
        </div>
      </div>
    </form>
  );
}

