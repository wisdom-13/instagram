import ProfileMenu from '@/components/ProfileMenu';
import UserProfile from '@/components/UserProfile';
import React from 'react';

type Props = {
  params: {
    slug: string;
  }
}

export default function UserPage({ params: { slug } }: Props) {
  return (
    <div className='w-full h-screen flex flex-col items-center bg-white'>
      <UserProfile username={slug} />
      <ProfileMenu />
    </div>
  );
}

