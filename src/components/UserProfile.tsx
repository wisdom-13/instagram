import Avatar from './Avatar';
import { ProfileUser } from '@/model/user';
import FollowButton from './FollowButton';

type Props = {
  user: ProfileUser;
}

export default function UserProfile({ user }: Props) {
  const { image, username, posts, followers, following, name } = user;

  const info = [
    { title: '게시물', data: posts },
    { title: '팔로워', data: followers },
    { title: '팔로우', data: following },
  ]

  return (
    <div className='flex items-center w-full max-w-[935px] my-8'>
      <div className='grow flex justify-center'>
        <Avatar image={image} size='large' />
      </div>
      <div className='grow-[2]'>
        <div className='flex items-center mb-4'>
          <h1 className='text-xl'>{username}</h1>
          <FollowButton user={user} />
        </div>
        <ul className='flex mb-4'>
          {info.map(({ title, data }, index) => (
            <li key={index} className='mr-10'>{title} <b>{data}</b></li>
          ))}
        </ul>
        <div className='font-semibold'>{name}</div>
      </div>
    </div>
  );
}

