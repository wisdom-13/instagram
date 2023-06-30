
import { User } from "@/model/user";
import Avatar from "./Avatar";

type Props = {
  user: User;
}

export default function SideBar({ user }: Props) {
  return (
    <div className="w-[320px]">
      <div className="flex items-center">
        {user.image && <Avatar image={user.image} />}
        <div className="ml-3">
          <h3 className="font-semibold">{user.email}</h3>
          <p className="text-gray-600">{user.name}</p>
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

