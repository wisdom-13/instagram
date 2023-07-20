'use client';


import UserSearch from "@/components/UserSearch";

export default function SearchPage() {

  return (
    <div className='w-full h-screen flex pt-6 justify-center'>
      <div className="w-[470px] bg-white border border-gray-200 rounded-lg mt-3">
        <UserSearch />
      </div>
    </div>
  );
}

