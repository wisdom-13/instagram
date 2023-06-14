'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { HomeIcon, HomeFillIcon, SearchIcon, SearchFillIcon, NewIcon, NewFillIcon } from './ui/icons'

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
  const pathname = usePathname();

  return (
    <div className='w-1/5 max-w-sm h-screen	p-6 border border-r-gray-200'>
      <Link href='/'>
        <h1 className='mt-4 mb-9 text-2xl font-bold'>Instantgram</h1>
      </Link>

      <nav>

        <ul>
          {
            menu.map(item => <li key={item.href}>
              <Link className='flex items-center text-lg py-3' href={item.href}>
                {pathname == item.href
                  ? item.clickedIcon
                  : item.icon
                }
                <span className='font-semibold'>{item.title}</span>
              </Link>
            </li>)
          }
        </ul>
      </nav>
      <Link className='flex items-center text-lg py-3' href='/'>
        Sign in
      </Link>
    </div>
  );
}

