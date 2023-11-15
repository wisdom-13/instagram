import NewPost from '@/components/NewPost';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

export const metadata: Metadata = {
  title: 'New Post',
  description: 'Create a new post',
};

export default async function NewPostPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect('/api/auth/signin');
  }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <NewPost user={session.user} />
    </div>
  );
}
