import { AuthUser } from '@/model/user';
import Avatar from './Avatar';

type Props = {
  user: AuthUser;
};
export default function SideBar({ user: { name, email, image } }: Props) {
  return (
    <div className="w-[320px]">
      <div className="flex items-center">
        {image && <Avatar image={image} />}
        <div className="ml-3">
          <h3 className="font-semibold">{email}</h3>
          <p className="text-gray-600">{name}</p>
        </div>
      </div>
      <p className="text-xs text-gray-300 mt-5">
        About · Help · Press · API · Jobs · Privacy · Terms · Location · Language
      </p>
      <p className="text-xs text-gray-300 mt-5">
        @Copyright Instagram from METAL
      </p>
    </div>
  );
}
