"use client"
import React, { useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const {data:session}=useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex fixed w-full justify-between p-2 pl-20 pr-20 [text-decoration:none] bg-white text-left text-xs text-dimgray-200 font-roboto z-10">

      {/* logo - */}
      <div className="flex  ml-[60px] items-center justify-center gap-0">
        <img
          className=" w-[30%] h-[50px]"
          alt=""
          src="./assets/icons/logo.png"
        />
        <input
          className="[border:none] p-4 bg-[#EEF3F8] font-montserrat text-sm h-8  w-full "
          placeholder="Search"
          type="text"
        />
      </div>

      <div className="flex gap-10 items-center justify-center">

        <div className="flex flex-row ml-30 items-center justify-center gap-[43px]">

          <Link className='cursor-pointer  text-[inherit]' href="/">
            <div className="flex flex-col ml-30 items-center justify-center w-[49px] h-[35.8px]">
              <img
                className=" w-[22.29px] h-[18.15px]"
                alt=""
                src="./assets/icons/home.svg"
              />
              <div className="">Home</div>
            </div>
          </Link>


          <a className=" cursor-pointer  text-[inherit]">

            <div className="flex flex-col items-center justify-center w-[23px] h-[37.8px]">
              <img
                className="  w-[20.01px] h-[18.06px]"
                alt=""
                src="./assets/icons/jobs.svg"
              />
              <div className="">Jobs</div>
            </div>
          </a>

          <Link className='cursor-pointer  text-[inherit]' href="/chat">


            <div className="flex flex-col items-center justify-center w-[49px] h-[35.8px]">
              <img
                className=" w-[22.29px] h-[18.15px]"
                alt=""
                src="./assets/icons/chat.svg"
              />
              <div className="">Discussion</div>
            </div>
          </Link>



          <Link className=" cursor-pointer text-[inherit]" href={''}>

            <div className="flex flex-col items-center justify-center w-[57px] h-[37.72px]">
              <img
                className=" w-[19.99px] h-[19.53px]"
                alt=""
                src="./assets/icons/alert.svg"
              />
              <div className="">
                Notifications
              </div>
            </div>
          </Link>


          {/* ________________Profile */}
          <div className="relative cursor-pointer text-[inherit]">
            <div onClick={handleProfileClick} className=" items-center justify-center w-[42.64px] h-[40.91px]">
              <img
                className="rounded-[50%] w-[24.52px] h-[24.52px] object-cover"
                alt=""
                src="./assets/images/dp2.jpeg"
              />
              <div className="">Profile</div>
            </div>

            {isDropdownOpen && (
              <div className="absolute p-2 top-full w-[200px] left-0 bg-white border border-gray-300 rounded-md mt-2 shadow-md">
                <div className='flex py-2 items-start justify-between'>

                  <div className=" flex items-center gap-3 ">
                    <img
                      className=" rounded-[50%] w-[43px] h-[43px] object-cover"
                      alt=""
                      src="./assets/images/dp2.jpeg"
                    />
                    <p className="font-bold text-sm">{session?.user?.id}</p>
                  </div>

                  <img onClick={closeDropdown}
                    className="p-[2px] rounded-full w-[20px] h-[20px] hover:bg-gray-200 cursor-pointer"
                    alt=""
                    src="./assets/icons/close.svg"
                  />

                </div>
                <div className="border-t border-gray-300 w-full" />
                {/* <Link href="/profile">
                  <a onClick={closeDropdown} className="block p-2 text-sm hover:bg-gray-100 cursor-pointer">
                    View Profile
                  </a>
                </Link> */}
                <div className="border-t border-gray-300 w-full" />
                <button onClick={()=>signOut()} className="w-full p-2 text-sm hover:bg-gray-100 cursor-pointer">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="text-xs underline text-saddlebrown">
          Try Premium for free
        </div>
      </div>
    </nav>



  );
};

export default Navbar;
