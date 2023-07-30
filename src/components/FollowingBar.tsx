'use client';

import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";
import useMe from "@/hooks/useMe";

export default function FollowingBar() {
  const { user, isLoading, error } = useMe();
  // const users = data?.following;
  const users = user?.following && [
    ...user?.followers,
    ...user?.followers,
    ...user?.followers,
    ...user?.followers,
  ];

  return (
    <section>
      <div className="w-[470px] bg-white p-3 border border-gray-200 rounded-lg text-center min-h-[112px] overflow-x-auto pr-0 relative z-0">
        {isLoading ? (
          <PropagateLoader className="mt-[35px]" size={8} color='red' />
        ) : (
          (!users || users.length === 0) && <p className="mt-[25px]">{`You don't have following`}</p>
        )}
        {users && users.length > 0 &&
          <div>
            <ScrollableBar>
              {users.map(({ image, username }) => (
                <Link key={username} className="text-center " href={`/user/${username}`}>
                  <Avatar image={image} highlight={true} />
                  <p className="text-sm text-gray-800 overflow-hidden w-16 text-ellipsis">{username}</p>
                </Link>
              ))}
            </ScrollableBar>
          </div>
        }
      </div>
    </section>
  );
}

