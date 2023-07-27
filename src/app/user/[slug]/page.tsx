import UserProfile from '@/components/UserProfile';
import React from 'react';
import notFound from './not-found';
import UserPosts from '@/components/UserPosts';
import { getUserProfile } from '@/service/user';

type Props = {
  params: {
    slug: string;
  }
}


export default async function UserPage({ params: { slug } }: Props) {
  const user = await getUserProfile(slug);

  if (!user) {
    notFound();
  }

  return (
    <div className='w-full h-screen flex flex-col items-center bg-white'>
      <UserProfile user={user} />
      <UserPosts user={user} />
    </div>
  );
}

