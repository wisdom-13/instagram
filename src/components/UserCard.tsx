import { SearchUser } from '@/model/user';
import Link from 'next/link';
import Avatar from './Avatar';

type Props = {
  user: SearchUser;
};
export default function UserCard({ user: { name, username, image, followers } }: Props) {
  return (
    <div className="pb-3">
      <Link href={`/user/${username}`} key={username}>
        <div className='flex items-center'>
          <Avatar image={image} size='normal' />
          <div className="flex flex-col pl-3 text-sm">
            <b>{username}</b>
            <span className="text-gray-500">
              {name}
              {followers && ` • 팔로워 ${followers}명`}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
