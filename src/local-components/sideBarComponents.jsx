"use client";
import { components } from "@/utils/reusableData";
import { StateContext } from "@/utils/context";
import { useContext } from "react";
import Link from "next/link";
import Logo from "../../public/assets/vector.svg";

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
          <Logo />
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
