import Link from "next/link";
import Avatar from "@/components/Avatar";
import { DetailUser } from "@/model/user";

type Props = {
  user: DetailUser
}

export default function UserListItem({ user }: Props) {
  const { username, image, name, followers } = user;

  return (
    <div className="pb-3">
      <Link href={`/user/${username}`} key={username}>
        <div className='flex items-center'>
          <Avatar image={image} size='normal' />
          <div className="flex flex-col pl-3 text-sm">
            <b>{username}</b>
            <span className="text-gray-500">
              {name}
              {followers && ` • 팔로워 ${followers?.length}명`}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

