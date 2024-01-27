"use client"
import React from 'react'
import Light from "../../public/assets/brightness.svg";
import Dark from "../../public/assets/moon.svg";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
    const {theme, setTheme } = useTheme();

  return (
    <>
        <div className="flex justify-start mt-2 ml-4">
            <div className="flex flex-col items-center bg-white dark:bg-gray-700 px-1 relative py-2 rounded-full">
            <div className="bg-primary p-1 mb-1  rounded-full">
            <Light fill={"primary"} role="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            </div>
            <Dark role="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            </div>
        </div>

    </>
  )
}

export default ThemeToggler