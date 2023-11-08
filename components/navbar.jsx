import Link from 'next/link';
const Navbar = () => {
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



          <a className=" cursor-pointer text-[inherit]">

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
          </a>

          <Link className="cursor-pointer text-[inherit]" href="/profile">

            <div className="  w-[42.64px] h-[40.91px]">
              <img
                className=" rounded-[50%] w-[24.52px] h-[24.52px] object-cover"
                alt=""
                src="./assets/images/dp2.jpeg"
              />
             
              <div className="">Profile</div>
            </div>
          </Link>


        </div>

        <div className=" text-xs [text-decoration:underline] text-saddlebrown">
          Try Premium for free
        </div>
      </div>


    </nav>



  );
};

export default Navbar;
