'use client';


import UserList from "@/components/UserList";

export default function SearchPage() {

  return (
    <div className='w-full h-screen flex pt-6 justify-center'>
      <div className="w-[470px] bg-white border border-gray-200 rounded-lg mt-3">
        <div className="p-5 border-b border-gray-200 ">
          <h1 className="font-bold text-2xl">검색</h1>
          <form className="mt-5">
            <input className="w-full bg-gray-100 p-2 px-4 rounded-md outline-0" placeholder="Search for a email or name" />
          </form>
        </div>
        <UserList />
      </div>
    </div>
  );
}

