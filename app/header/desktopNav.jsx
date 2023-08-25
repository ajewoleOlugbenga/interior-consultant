import React from 'react';

const DesktopNav = () => {
  return (
    <header className=''>
      <div className='hidden md:flex md:justify-between md:items-center md:my-5 mx-10'>
    <h1 className='border-2 w-[103px] h-[31px] '>This Interior</h1>
    <div className='space-x-20'>
        <a href='#' className='hover:border-b-4'>Home</a>
        <a href='#' className='hover:border-b-4'>Collection</a>
        <a href='#' className='hover:border-b-4'>About</a>
        <a href='#' className='hover:border-b-4'>Contact</a>
    </div>
    </div>
</header>
  )
}

export default DesktopNav
