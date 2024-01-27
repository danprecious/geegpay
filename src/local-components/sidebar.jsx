"use client"

import { useContext } from "react";
import { SidebarComponents } from "./sideBarComponents";
import { StateContext } from "@/utils/context";

const Sidebar = () => {
  const {titleState} = useContext(StateContext)


  return (
    <div className={`${titleState ? "fixed" : ""} flex flex-col sidebar items-center z-50 bg-bg dark:bg-gray-800 min-h-[100vh] slim-border border-r-[1px]`}>
      <SidebarComponents />
    </div>
  );
};

export default Sidebar;


