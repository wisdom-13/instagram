'use client';

import useSWR from "swr";
import { DetailUser } from "@/model/user";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@/components/Avatar";

export default function SearchPage() {
  const { data, isLoading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following;

  return (
    <div className='w-full flex pt-6 justify-center'>
      <form>
        <input placeholder="Search for a email or name" />
      </form>
      <div>
        <div>
          {users && users.map(({ image, username }) =>
            <Link href={`/user/${username}`} key={username}>
              <div className='flex'>
                <Avatar image={image} size='medium' />
                <div>
                  <b>{username}</b>
                  {username}
                </div>
              </div>

            </Link>)}
        </div>
      </div>
    </div>
  );
}

