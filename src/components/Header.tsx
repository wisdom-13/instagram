'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'


import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { BsPlusSquare, BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine, RiSearchFill } from 'react-icons/ri';

export default function Header() {
  const pathname = usePathname();

  return (
    <div className='w-1/5 max-w-sm h-screen	p-6 border border-r-gray-200'>
      <h1 className='mt-4 mb-9 text-2xl font-bold'>Instantgram</h1>
      <nav className=''>
        <Link className='flex items-center text-lg py-3' href='/'>
          {pathname == "/"
            ? <><AiFillHome className='mr-3' size='24' /><span className='font-bold'>홈</span></>
            : <><AiOutlineHome className='mr-3' size='24' /><span>홈</span></>
          }
        </Link>
        <Link className='flex items-center text-lg py-3' href='/search'>
          {pathname == "/search"
            ? <><RiSearchFill className='mr-3' size='24' /><span className='font-bold'>검색</span></>
            : <><RiSearchLine className='mr-3' size='24' /><span>검색</span></>
          }
        </Link>
        <Link className='flex items-center text-lg py-3' href='/new'>
          {pathname == "/new"
            ? <><BsPlusSquareFill className='mr-3' size='24' /><span className='font-bold'>만들기</span></>
            : <><BsPlusSquare className='mr-3' size='24' /><span>만들기</span></>
          }
        </Link>
      </nav>
      <Link className='flex items-center text-lg py-3' href='/'>
        Sign in
      </Link>
    </div>
  );
}

