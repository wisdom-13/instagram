'use client';
import { CacheKeysContext } from '@/context/CacheKeysContext';
import { ProfileUser } from '@/model/user';
import { useState } from 'react';
import PostGrid from './PostGrid';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import HeartIcon from './ui/icons/HeartIcon';
import PostGridIcon from './ui/icons/PostGridIcon';

type Props = {
  user: ProfileUser;
};
const tabs = [
  { 'type': 'posts', 'title': '게시물', 'icon': <PostGridIcon className="w-3" /> },
  { 'type': 'saved', 'title': '저장됨', 'icon': <BookmarkIcon className="w-3" /> },
  { 'type': 'liked', 'title': '좋아함', 'icon': <HeartIcon className="w-3" /> },
];
export default function UserPosts({ user: { username } }: Props) {
  const [query, setQuery] = useState(tabs[0].type);

  return (
    <div className="flex flex-col items-center w-full max-w-[935px] border-t border-gray-300">
      <ul className="flex w-full h-[53px] items-center justify-center text-xs">
        {tabs.map(({ type, title, icon }) => (
          <li
            key={title}
            className={`flex items-center h-[55px] mx-6 cursor-pointer ${type == query ? 'border-t-2 border-gray-500' : ''}`}
            onClick={() => setQuery(type)}>
            <button className="scale-300 md:scale-100">{icon}</button>
            <span className="hidden md:inline pl-1">{title}</span>
          </li>
        ))}
      </ul>
      <CacheKeysContext.Provider value={{ postsKey: `/api/users/${username}/${query}` }}>
        <PostGrid />
      </CacheKeysContext.Provider>

    </div>
  );
}
