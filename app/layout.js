import './globals.css';
import MobileNav from './header/mobileNav';
import DesktopNav from './header/desktopNav';

export const metadata = {
  title: 'Interior Consultant',
  description: 'An Interior Priority First Company',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <body>
      <main className='w-screen h-screen bg-gray-900 overflow-hidden'>
        <span className='hidden md:flex'>
          <DesktopNav/>
        </span>
        <span>
        <MobileNav />
        </span>
        
      {children}
      </main>
    </body>
  </html>
  )
}

export default RootLayout
