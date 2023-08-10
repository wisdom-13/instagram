import UserSearch from '@/components/UserSearch';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'User Search',
  description: 'Search users to follow',
};

export default function SearchPage() {
  return (
    <div className='w-full h-screen flex pt-6 justify-center'>
      <UserSearch />
    </div>
  );
}
