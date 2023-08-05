'use client'

import { ProfileUser } from "@/model/user";
import Button from "./ui/Button";
import useMe from "@/hooks/useMe";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";

type Props = {
  user: ProfileUser;
}

export default function FollowButton({ user }: Props) {
  const { id, username } = user;
  const { user: loggedInUser, toggleFollow } = useMe();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isUpdating = isPending || isFetching;

  const showButton = loggedInUser && loggedInUser.username !== username;
  const following = loggedInUser && loggedInUser.following.find((item) => item.username === username);
  const text = following ? '팔로우 취소' : '팔로우';

  const handleFollow = async () => {
    setIsFetching(true);
    await toggleFollow(id, !following);
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    })
  }

  return (
    <>
      {showButton &&
        <div className='relative ml-5'>
          {isUpdating && (
            <div className='absolute z-20 inset-0 flex justify-center items-center'>
              <PulseLoader size={6} />
            </div>
          )}
          <Button text={text} blue={!following} onClick={handleFollow} disabled={isUpdating} />
        </div>
      }
    </>
  );
}

