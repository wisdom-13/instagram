'use client'

import FollowingBar from '@/components/FollowingBar'
import PostList from '@/components/PostList'
import Profile from '@/components/Profile'
import { useSession } from 'next-auth/react';
import Image from 'next/image'

export default function Home() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      {user ? (
        <div className='w-full flex justify-evenly'>
          <div>
            <FollowingBar />
            <PostList />
          </div>
          <div>
            <Profile user={user} />
          </div>
        </div>
      ) : (
        <div></div>
      )
      }

    </>
  )
}
