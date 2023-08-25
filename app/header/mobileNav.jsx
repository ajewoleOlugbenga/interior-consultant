"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLink from "../components/navLink";
import { AiOutlineClose } from "react-icons/ai";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center md:hidden ">
      <h1 className="border-2 w-[103px] h-[31px] mt-3 ml-3 pl-2">
        This Interior
      </h1>
      <nav className=" flex items-center">
        <GiHamburgerMenu
          size={30}
          className="absolute right-2 cursor-pointer "
          onClick={() => setOpen(!open)}
        />

        {open && (
          <section className="fixed bg-gray-800 w-screen h-screen z-10 top-0 left-0 justify-center items-center flex flex-col ">
            <div className="flex self-end py-2 pr-3">
              <AiOutlineClose
                size={30}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="inline-flex flex-col justify-center items-center grow gap-10">
              <a href="#" className="text-xl hover:border-b">Home</a>
              <a href="#" className="text-xl hover:border-b">Collection</a>
              <a href="#" className="text-xl hover:border-b">About</a>
              <a href="#" className="text-xl hover:border-b ">Contact</a>
            </div>
          </section>
        )}
      </nav>
    </header>
  );
};

export default MobileNav;
