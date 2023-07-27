import UserProfile from '@/components/UserProfile';
import React, { cache } from 'react';
import notFound from './not-found';
import UserPosts from '@/components/UserPosts';
import { getUserProfile } from '@/service/user';
import { Metadata } from "next";

type Props = {
  params: {
    username: string;
  }
}

const getUser = cache(async (username: string) => getUserProfile(username));

export default async function UserPage({ params: { username } }: Props) {
  const user = await getUser(username);

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

export async function generateMetadata({ params: { username } }: Props): Promise<Metadata> {
  const user = await getUser(username);
  return {
    title: `${user?.name} (@${user?.username})`,
    description: `${user?.name}의 Instagram 사진`
  }
}