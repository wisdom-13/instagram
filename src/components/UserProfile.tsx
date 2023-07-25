import Avatar from './Avatar';
import { getUserProfile } from '@/service/user';

type Props = {
  username: string;
}

export default async function UserProfile({ username }: Props) {
  const profile = await getUserProfile(username);

  if (!profile) {
    return '';
  }

  return (
    <div className='flex items-center w-full max-w-[935px] my-8'>
      <div className='grow flex justify-center'>
        <Avatar image={profile.image} size='large' />
      </div>
      <div className='grow-[2]'>
        <h1 className='text-xl mb-4'>{profile.username}</h1>
        <ul className='flex mb-4'>
          <li className='mr-10'>게시물 <b>{profile.posts}</b></li>
          <li className='mr-10'>팔로워 <b>{profile.followers}</b></li>
          <li>팔로우 <b>{profile.following}</b></li>
        </ul>
        <div className='font-semibold'>{profile.name}</div>
      </div>
    </div>
  );
}

