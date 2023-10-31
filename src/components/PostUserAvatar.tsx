'use client'

import useMe from '@/hooks/me';
import Avatar from './Avatar';
import MoreIcon from './ui/icons/MoreIcon';

type Props = {
  image: string;
  username: string;
};
export default function PostUserAvatar({ image, username }: Props) {
  const { user: loggedInUser } = useMe();

  return (
    <div className="flex items-center justify-between p-3">
      <div className='flex items-center'>
        <Avatar image={image} size='medium' />
        <h3 className="font-semibold pl-3">{username}</h3>
      </div>
      {username == loggedInUser?.username && <MoreIcon />}

    </div>
  );
}
