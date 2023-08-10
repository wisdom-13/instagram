import FollowingBar from '@/components/FollowingBar';
import PostList from '@/components/PostList';
import SideBar from '@/components/SideBar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect('/api/auth/signin');
  }

  return (
    <>
      {user ? (
        <div className='w-full min-h-full flex pt-6 justify-center'>
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
      )}
    </>
  );
}
