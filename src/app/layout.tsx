import './globals.css';
import { Open_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';
import { Metadata } from 'next';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Instantgram',
    template: 'Instantgram | %s',
  },
  description: 'Instantgram Photos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className='flex'>
        <AuthContext>
          <Navbar />
          <section className={`${openSans.className} flex bg-gray-50 w-full h-fit min-h-screen ml-[245px]`}>
            <SWRConfigContext>{children}</SWRConfigContext>
          </section>
        </AuthContext>
        <div id='portal'></div>
      </body>
    </html>
  )
}
