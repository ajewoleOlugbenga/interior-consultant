import React from 'react';


const NavLink = () => {
  return (
    <section className='fixed bg-gray-800 w-screen h-screen z-10 top-0 left-0'>
        <div className='flex flex-col'>
            <a href='#' >Home</a>
            <a href='#' >Collection</a>
            <a href='#' >About</a>
            <a href='#' >Contact</a>
        </div>
    </section>
  )
}

export default NavLink
