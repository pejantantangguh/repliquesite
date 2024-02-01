import '@/styles/global.css';
import { Inter } from 'next/font/google';
import { Navbar } from './component/navbar';
import { JumboTron } from './component/jumbotron';
import { Navbar2 } from './component/navbar2';

const inter = Inter({ subsets: ['latin'] })
const bodyLayout = ""


export const metadata = {
  title: 'Replique ministry Brisbane - Indonesian Church',
  description: 'Indonesian Community Church 3/35 Manilla St East Brisbane QLD AU',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body className={`${inter.className} ${bodyLayout}`} >
        <Navbar2 />
        <div className='clear-both'></div>
        <main className="flex-auto">
          <div className='relative py-20 sm:pb-24 sm:pt-25 mt-5 bg-replique'>
            <div className='inset-0 overflow-hidden  -bottom-14 -top-36'>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                {children}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
