import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import AuthContext from '@/context/AuthContext'
import SWRConfigContext from '@/context/SWRConfigContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Instagram',
    template: 'Instagram | %s'
  },
  description: 'Instagram Photos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex'>
        <AuthContext>
          <Navbar />
          <section className={`${inter.className} flex bg-gray-50 w-full ml-[245px]`}>
            <SWRConfigContext>{children}</SWRConfigContext>
          </section>
        </AuthContext>
        <div id='portal'></div>
      </body>
    </html>
  )
}
