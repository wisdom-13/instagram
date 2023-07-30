'use client'

import { ProfileUser } from "@/model/user";
import Button from "./ui/Button";
import useMe from "@/hooks/useMe";

type Props = {
  user: ProfileUser;
}

export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { user: loggedInUser } = useMe();
  const showButton = loggedInUser && loggedInUser.username !== username;
  const following = loggedInUser && loggedInUser.following.find((item) => item.username === username);
  const text = following ? '팔로우 취소' : '팔로우';

  return (
    <>
      {showButton && <Button text={text} className="ml-5" blue={!following} />}
    </>
  );
}

