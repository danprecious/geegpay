"use client"
import React, {useState, useEffect} from "react";

import Bell from "../../public/assets/solar_bell-outline.svg";
import Image from "next/image";
import Arrowdown from "../../public/assets/Arrow-Down.svg";
import DynamicDate from "./dynamicDate";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { Popover } from "@headlessui/react";
import Link from "next/link";

const NavBar = () => {
  const path = usePathname()

  const [page, setPage] = useState("Dashboard");

  useEffect(() => {
    if (path == "/") {
      setPage("Dashboard")
    } else {
      let pathWithoutSlash = path.substring(1);
      let capitalizedPath = pathWithoutSlash.charAt(0).toUpperCase() + pathWithoutSlash.slice(1);
      setPage(capitalizedPath);
    }
  }, [path])
  
  return (
    <div className="border-b-[1px] bg-white dark:bg-gray-900 w-full md:max-w-[95vw] fixed z-50 slim-border flex items-center justify-between py-2 px-4">
      <div>
        <p className="mx-2 md:text-[1.35rem] font-semibold">
          {page}
        </p>
      </div>
      <div className="py-1 w-[70%] flex justify-end">
        <div className="hidden sm:flex py-2 px-5 rounded-3xl slim-border border-[1px] outline-gray-400">
          <div className="pt-1">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68945 1C12.9293 1 16.3781 4.3727 16.3781 8.51907C16.3781 10.4753 15.6104 12.2595 14.3542 13.5986L16.8261 16.0109C17.0574 16.2371 17.0582 16.6031 16.8269 16.8294C16.7116 16.9436 16.5592 17 16.4076 17C16.2568 17 16.1052 16.9436 15.9892 16.8309L13.4874 14.3912C12.1714 15.4219 10.5028 16.0389 8.68945 16.0389C4.44955 16.0389 1 12.6655 1 8.51907C1 4.3727 4.44955 1 8.68945 1ZM8.68945 2.15821C5.10251 2.15821 2.18433 5.01125 2.18433 8.51907C2.18433 12.0269 5.10251 14.8807 8.68945 14.8807C12.2756 14.8807 15.1938 12.0269 15.1938 8.51907C15.1938 5.01125 12.2756 2.15821 8.68945 2.15821Z" fill="#78828A"/>
            </svg>
          </div>
          <input
            type="search"
              className="bg-transparent w-full outline-none focus:outline-none px-2"
              placeholder="Search..."
          />
        </div>
        <div className="w-[25%] hidden lg:block mx-3 py-2">
          <DynamicDate />
        </div>
        <div className="w-[5%] mx-3 rounded-full hidden slim-border border-[1px] md:flex justify-center items-center">
          <Bell />
        </div>
        <Popover className="relative">
          <Popover.Button className="focus:outline-none outline-none">
            <div className="mx-3 flex slim-border justify-end self-end lg:justify-center items-center border-[1px] rounded-full">
              <div className="md:px-2 p-1">
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
              <p className="text-right lg:flex flex-col mr-2 text-sm hidden">
                Justin Bergson{" "}
                <span className="text-gray-400 text-xs">Justin@gmail.com</span>
              </p>
              <div className="hidden pl lg:block">
                <Arrowdown />
              </div>
            </div>
              
          </Popover.Button>

          <Popover.Panel className="absolute z-10 bg-white py-5 px-3 max-w-[200px] min-w-[50vw] sm:min-w-[50vw] md:min-w-[15vw] right-0 shadow-md rounded-md">
            <div className="grid">
              <Link className="py-2" href="/" >Settings</Link>
              <Link className="py-2" href="/" >Notifications</Link>
              <Link className="py-2" href="/" >Search</Link>
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  );
};

export default NavBar;
