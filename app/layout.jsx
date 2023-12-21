import '@/styles/global.css';
import { Inter } from 'next/font/google';
import { Navbar } from './component/navbar';
import { JumboTron } from './component/jumbotron';

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
        <Navbar />
        <JumboTron />
        <div className='clear-both'></div>       
        {children}
      </body>
    </html>
  )
}
