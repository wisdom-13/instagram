import { User } from "next-auth";
import Avatar from "./Avatar";

type Props = {
  user: User;
}

export default function Profile({ user }: Props) {
  return (
    <div className="">
      <div className="flex items-center">
        <Avatar size='xl' image={user.image} />
        <div>
          <h3 className="font-semibold">{user.email}</h3>
          <p>{user.name}</p>
        </div>
      </div>
      <p className="text-sm text-gray-300 mt-5">
        About · Help · Press · API · Jobs · Privacy · Terms · Location · Language
      </p>
      <p className="text-sm text-gray-300 mt-5">
        @Copyright Instagram from METAL
      </p>
    </div>
  );
}

