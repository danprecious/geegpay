"use client";
import { components } from "@/utils/reusableData";
import { StateContext } from "@/utils/context";
import { useContext } from "react";
import Link from "next/link";
import Logo from "../../public/assets/vector.svg";
import Light from "../../public/assets/brightness.svg";
import Dark from "../../public/assets/moon.svg";
import Logout from "../../public/assets/logout.svg";
import GoIn from "../../public/assets/arrow-right.svg";
import Setting from "../../public/assets/setting-2.svg";

export const SidebarComponents = () => {
  const { titleState, setTitleState } = useContext(StateContext);

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
              className={`flex items-center w-full px-6 py-3 ${
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
        <div className="flex justify-start mt-2 ml-4">
          <div className="flex flex-col items-center bg-white px-1 relative py-2 rounded-full">
            <div className="bg-primary p-1 mb-1  rounded-full">
              <Light fill={"primary"} />
            </div>
            <Dark />
          </div>
        </div>
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
