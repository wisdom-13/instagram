'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"

import { HomeIcon, HomeFillIcon, SearchIcon, SearchFillIcon, NewIcon, NewFillIcon } from './ui/icons'
import Avatar from './Avatar';

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

export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className='flex flex-col justify-between w-1/5 max-w-sm h-screen	p-6 border border-r-gray-200'>
      <div>
        <Link href='/'>
          <h1 className='mt-4 mb-9 text-2xl font-bold'>Instantgram</h1>
        </Link>
        <nav>
          <ul>
            {
              menu.map(item =>
                <li key={item.href}>
                  <Link className='group flex items-center text-md py-4 pl-3 my-1 -ml-3 rounded-3xl hover:bg-gray-50' href={item.href}>
                    {pathname == item.href
                      ? item.clickedIcon
                      : item.icon
                    }
                    <span className='font-semibold'>{item.title}</span>
                  </Link>
                </li>)
            }
            {user &&
              <li>
                <Link className='group flex items-center text-md py-4 pl-3 my-1 -ml-3 rounded-3xl hover:bg-gray-50' href={`/user/${user.username}`}>
                  <Avatar size='small' image={user.image} />
                  <span className='font-semibold'>프로필</span>
                </Link>
              </li>
            }
          </ul>
        </nav>
      </div>
      {
        session ? (
          <button className='flex items-center text-md py-4 pl-3 my-1 -ml-3 rounded-3xl hover:bg-gray-50' onClick={() => signOut()}>
            Sign out
          </button>
        ) : (
          <button className='flex items-center text-md py-4 pl-3 my-1 -ml-3 rounded-3xl hover:bg-gray-50' onClick={() => signIn()}>
            Sign in
          </button>
        )
      }

    </div>
  );
}

