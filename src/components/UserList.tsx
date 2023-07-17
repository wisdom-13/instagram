import useSWR from "swr";
import { DetailUser } from "@/model/user";
import UserListItem from "./UserListItem";

export default function UserList() {
  const { data: users, isLoading, error } = useSWR<DetailUser[]>('/api/user');

  return (
    <div className="p-5">
      {users && users.map((user) =>
        <UserListItem key={user.username} user={user} />
      )}
    </div>
  );
}

