"use client";
import { components } from "@/utils/reusableData";
import { StateContext } from "@/utils/context";
import { useContext } from "react";
import Link from "next/link";


import Logout from "../../public/assets/logout.svg";
import GoIn from "../../public/assets/arrow-right.svg";
import Setting from "../../public/assets/setting-2.svg";
import { usePathname } from "next/navigation";
import ThemeToggler from "./themeToggler";

export const SidebarComponents = () => {
  const { titleState, setTitleState } = useContext(StateContext);

  const path = usePathname();

  const handleHoverState = () => {};

  return (
    <div className="flex flex-col">
      <div>
        <div className="p-4 mt-1 mb-2">
          {/* <Logo /> */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z" fill="#34CAA5"/>
          </svg>

        </div>
        <div className="relative">
          {components.map((icon) => (
            <Link
              key={icon.id}
              href={icon.href} 
              className={`flex ${path === icon.href ? "active" : ''} items-center w-full px-6 py-3 border-solid ${
                titleState ? "" : ""
              }`}
              onMouseEnter={() => setTitleState(true)}
              onMouseLeave={() => setTitleState(false)}
            >
              {icon.icon}

              {titleState ? <p className="mx-3">{icon.title}</p> : ""}
            </Link>
          ))}
        </div>
        <ThemeToggler />
      </div>
      <div className="flex flex-col ml-4 mt-[6em] justify-self-end">
        <div className="p-2">
          <GoIn />
        </div>
        <div className="p-2">
          <Setting />
        </div>
        <div className="p-2">
          <Logout />
        </div>
      </div>
    </div>
  );
};
