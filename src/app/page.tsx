import FollowingBar from '@/components/FollowingBar'
import PostList from '@/components/PostList'
import SideBar from '@/components/SideBar';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect('/api/auth/signin');
  }

  return (
    <>
      {user ? (
        <div className='w-full flex pt-6 justify-center'>
          <div>
            <FollowingBar />
            <PostList />
          </div>
          <div className='ml-8'>
            <SideBar user={user} />
          </div>
        </div>
      ) : (
        <div></div>
      )
      }

    </>
  )
}
