'use client'

import { HomeUser, ProfileUser } from "@/model/user";
import useSWR from "swr";
import Button from "./ui/Button";

type Props = {
  user: ProfileUser;
}

export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { data: loggedInUser } = useSWR<HomeUser>('/api/me');
  const showButton = loggedInUser && loggedInUser.username !== username;
  const following = loggedInUser && loggedInUser.following.find((item) => item.username === username);
  const text = following ? '팔로우 취소' : '팔로우';

  return (
    <>
      {showButton && <Button text={text} className="ml-5" blue={!following} />}
    </>
  );
}

