"use client"
import React from 'react';
import Arrowdown from "../../public/assets/Arrow-Down.svg";
import { Popover } from "@headlessui/react";
import { Graph } from './Graph';

const BarGraph = () => {
  return (
    <div className='w-full p-3'>
        <div className='flex justify-between items-center'>
            <p className='text-lg font-semibold'>Sales Trends</p>
            <div className='flex items-center gap-4'>
                <p>Sort by:</p>
                <Popover className="relative">
          <Popover.Button className="focus:outline-none outline-none p-2 flex gap-2 slim-border border-[1px] rounded-full items-center">
            <span>Weekly</span>
            <div><Arrowdown /></div>
          </Popover.Button>

          <Popover.Panel className="absolute z-10 bg-white dark:bg-gray-700 py-5 px-3 max-w-[200px] min-w-[50vw] sm:min-w-[50vw] md:min-w-[15vw] right-0 shadow-md rounded-md">
            <div className="grid text-left">
              <button className="py-2" >Day</button>
              <button className="py-2" >Weekly</button>
              <button className="py-2" >Monthly</button>
            </div>
          </Popover.Panel>
        </Popover>
            </div>
        </div>
        <div>

            <Graph />

        </div>

    </div>
  )
}

export default BarGraph

