import { ProfileUser } from '@/model/user';
import Avatar from './Avatar';
import FollowButton from './FollowButton';

type Props = {
  user: ProfileUser;
};
export default function UserProfile({ user }: Props) {
  const { image, username, name, followers, following, posts } = user;

  const info = [
    { title: '게시물', data: posts },
    { title: '팔로워', data: followers },
    { title: '팔로우', data: following },
  ]

  return (
    <>
      <div className='flex items-center w-full max-w-[935px] my-8'>
        <div className='grow flex flex-col items-center justify-center'>
          <Avatar image={image} size='large' />
          <div className='md:hidden font-semibold text-sm'>{name}</div>
        </div>
        <div className='grow-[2]'>
          <div className='flex flex-col md:flex-row items-start md:items-center mb-4'>
            <h1 className='text-xl'>{username}</h1>
            <FollowButton user={user} />
          </div>
          <ul className='md:flex mb-4 hidden'>
            {info.map(({ title, data }, index) => (
              <li key={index} className='mr-10'>{title} <b>{data}</b></li>
            ))}
          </ul>
          <div className='hidden md:block font-semibold'>{name}</div>
        </div>
      </div>
      <ul className='flex justify-between w-full py-2 md:hidden border-t border-gray-300 text-sm'>
        {info.map(({ title, data }, index) => (
          <li key={index} className='text-center w-full'>
            {title}<br /> <b>{data}</b>
          </li>
        ))}
      </ul>
    </>
  );
}
