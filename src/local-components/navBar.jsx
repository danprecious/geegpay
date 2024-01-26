import React from "react";

import Bell from "../../public/assets/solar_bell-outline.svg";
import Image from "next/image";
import Arrowdown from "../../public/assets/Arrow-Down.svg";
// import profile from "profile.jpeg"

const NavBar = () => {
  return (
    <div className="border-b-[1px] slim-border flex items-center justify-between py-2 px-4">
      <div>Dashboard</div>
      <div className="py-1 w-[70%] flex justify-end">
        <input
          type="search"
            className="py-2 px-5 rounded-3xl slim-border border-[1px] bg-transparent outline-gray-400 w-[35%] mx-3"
        />
        <div className="w-[25%] hidden lg:block mx-3">date</div>
        <div className="w-[5%] mx-3 rounded-full hidden slim-border border-[1px] md:flex justify-center items-center">
          <Bell />
        </div>
        <div className="mx-3 flex slim-border justify-end self-end lg:justify-center items-center border-[1px] rounded-full">
          <div className="px-2">
            <div className="rounded-full overflow-hidden bg-black h-[30px] w-[30px]">
              <Image
                src={"/assets/images/profile.jpeg"}
                className="w-full min-h-full"
                width={1024}
                height={1024}
                alt="avatar"
              />
            </div>
          </div>
          <p className="text-right mr-2 text-sm hidden lg:block">
            Justin Bergson{" "}
            <span className="text-gray-400 text-xs">Justin@gmail.com</span>
          </p>
          <div className="hidden lg:block">
            <Arrowdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
