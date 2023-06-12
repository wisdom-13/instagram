import Link from 'next/link';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { BsPlusSquare, BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine, RiSearchFill } from 'react-icons/ri';

export default function Header() {
  return (
    <div className='w-1/5 max-w-sm h-screen	p-6 border border-r-gray-200'>
      <h1 className='mt-4 mb-9 text-2xl font-bold'>Instantgram</h1>
      <nav className=''>
        <Link className='flex items-center text-lg py-3' href='/'>
          <AiOutlineHome className='mr-3' size='24' />홈
        </Link>
        <Link className='flex items-center text-lg py-3' href='/search'>
          <RiSearchLine className='mr-3' size='24' /> 검색
        </Link>
        <Link className='flex items-center text-lg py-3' href='/new'>
          <BsPlusSquare className='mr-3' size='24' /> 만들기
        </Link>
      </nav>
      <Link className='flex items-center text-lg py-3' href='/'>
        Sign in
      </Link>
    </div>
  );
}

