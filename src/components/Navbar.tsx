'use client';

import Link from 'next/link';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import HomeIcon from './ui/icons/HomeIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import NewIcon from './ui/icons/NewIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import Avatar from './Avatar';
import { InstagramIcon } from './ui/icons';
import MenuIcon from './ui/icons/MenuIcon';
import LogOutIcon from './ui/icons/LogoutIcon';
import LoginIcon from './ui/icons/LoginIcon';
import LogoutIcon from './ui/icons/LogoutIcon';

const menu = [
  {
    href: '/',
    title: '홈',
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: '/search',
    title: '검색',
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: '/new',
    title: '만들기',
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
]

export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className='flex flex-col items-center justify-between w-[75px] pt-6 max-w-sm h-screen bg-white border border-r-gray-200 fixed
    md:items-start md:w-[245px] md:p-6'>
      <div className='md:w-full'>
        <Link href='/'>
          <h1 className='h-[32px] mt-4 mb-9 text-2xl font-bold'>
            <span className='hidden md:block'>Instantgram</span>
            <InstagramIcon className='md:hidden text-center m-auto' />
          </h1>

        </Link>
        <nav>
          <ul>
            {
              menu.map(item =>
                <li key={item.href}>
                  <Link className='group flex items-center text-md py-4 px-3 md:pr-0 my-1 md:-ml-3 rounded-lg hover:bg-gray-50' href={item.href}>
                    {pathName == item.href
                      ? item.clickedIcon
                      : item.icon
                    }
                    <span className='font-semibold hidden md:block'>{item.title}</span>
                  </Link>
                </li>)
            }
            {user &&
              <li>
                <Link className='group flex items-center text-md py-4 pl-3 my-1 md:-ml-3 rounded-3xl hover:bg-gray-50' href={`/user/${user.username}`}>
                  <Avatar size='small' image={user.image} />
                  <span className='font-semibold ml-3 hidden md:block'>프로필</span>
                </Link>
              </li>
            }
          </ul>
        </nav>
      </div>

      {
        <button className='flex items-center text-md py-4 pl-3 my-1 -ml-3 rounded-3xl hover:bg-gray-50' onClick={() => session ? signOut() : signIn()}>
          <span className='md:block hidden'>{session ? 'Sign out' : 'Sign out'}</span>
          {
            session ? (
              <LogoutIcon className='md:hidden' />
            ) : (
              <LoginIcon className='md:hidden' />
            )
          }

        </button>
      }

    </div>
  );
}
