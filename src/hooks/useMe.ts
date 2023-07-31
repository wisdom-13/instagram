import { HomeUser } from '@/model/user';
import { useCallback } from 'react';
import useSWR, { useSWRConfig } from 'swr';

async function updateBookmark(postId: string, bookmark: boolean) {
  return fetch('/api/bookmarks', {
    method: 'PUT',
    body: JSON.stringify({ id: postId, bookmark }),
  }).then((res) => res.json());
}

async function updateUser(followUserId: string, follow: boolean) {
  return fetch('/api/follow', {
    method: 'PUT',
    body: JSON.stringify({ followUserId, follow }),
  }).then((res) => res.json());
}

export default function useMe() {
  const { data: user, isLoading, error, mutate } = useSWR<HomeUser>('/api/me');

  const setBookmark = useCallback(
    (postId: string, bookmark: boolean) => {
      if (!user) return;

      const bookmarks = user.bookmarks;
      const newUser = {
        ...user,
        bookmarks: bookmark
          ? [...bookmarks, postId]
          : bookmarks.filter(b => b !== postId),
      }

      return mutate(updateBookmark(postId, bookmark), {
        optimisticData: newUser,
        populateCache: false,
        revalidate: false,
        rollbackOnError: true,
      })
    }, [user, mutate]
  )

  const followUser = (followUserId: string, follow: boolean, username: string, image?: string) => {
    if (!user) return;

    const newUser = {
      ...user,
      following: follow ? [...user.following, { username, image }] : user.following.filter(item => item.username !== username)
    }

    return mutate(updateUser(followUserId, follow), {
      optimisticData: newUser,
      populateCache: false,
      revalidate: false,
      rollbackOnError: true,
    })

  }

  return { user, isLoading, error, setBookmark, followUser }
}
