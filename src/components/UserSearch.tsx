'use client';

import useDebounce from '@/hooks/debounce';
import { SearchUser } from '@/model/user';
import { FormEvent, useState } from 'react';
import useSWR from 'swr';
import UserCard from './UserCard';
import { PropagateLoader } from 'react-spinners';

export default function UserSearch() {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword);
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debouncedKeyword}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="w-[470px] bg-white border border-gray-200 rounded-lg mt-3">
      <div className="p-5 border-b border-gray-200 ">
        <h1 className="font-bold text-2xl">검색</h1>
        <form className="mt-5" onSubmit={onSubmit}>
          <input
            className="w-full bg-gray-100 p-2 px-4 rounded-md outline-0"
            placeholder="Search for a email or name"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            autoFocus />
        </form>
      </div>
      <div className="p-5">
        {isLoading && <PropagateLoader className="text-center mt-10" size={8} color='blue' />}
        {error && <p className="text-gray-600 text-center text-sm">사용자를 검색하는 중 문제가 발생하였습니다.</p>}
        {!isLoading && !error && users?.length === 0 && <p className="text-gray-600 text-center text-sm">일치하는 사용자 정보를 찾을 수 없습니다.</p>}
        {users && users.map((user) =>
          <UserCard key={user.username} user={user} />
        )}
      </div>
    </div>
  );
}
