"use client"
import { useState } from 'react';
import Link from 'next/link';


export const Graph = () =>{

   const [barHovered, setBarHovered] = useState(false)
   
   
    let months = [
        {
            id: 1,
            month: "Jan",
            priceHeight: "h-[20%]"
        },
        {
            id: 2,
            month: "Feb",
            priceHeight: "h-[35%]"
        },
        {
            id: 3,
            month: "Mar",
            priceHeight: "h-[10%]"
        },
        {
            id: 4,
            month: "April",
            priceHeight: "h-[65%]"
        },
        {
            id: 5,
            month: "May",
            priceHeight: "h-[28%]"
        },
        {
            id: 6,
            month: "Jun",
            priceHeight: "h-[90%]"
        },
        {
            id: 7,
            month: "Jul",
            priceHeight: "h-[30%]"
        },
        {
            id: 8,
            month: "Aug",
            priceHeight: "h-[40%]"
        },
        {
            id: 9,
            month: "Sep",
            priceHeight: "h-[75%]"
        },
        {
            id: 10,
            month: "Oct",
            priceHeight: "h-[15%]"
        },
        {
            id: 11,
            month: "Nov",
            priceHeight: "h-[70%]"
        },
        {
            id: 12,
            month: "Dec",
            priceHeight: "h-[60%]"
        },
    ]

    const handleBarhover = (value) =>{
        setBarHovered(value)
    }


    return(
        <div className='flex'>
            <div className='w-[10%] flex flex-col justify-between h-[16em]'>
                <p>50,000</p>
                <p>40,000</p>
                <p>30,000</p>
                <p>20,000</p>
                <p>10,000</p>
                <p>5,000</p>
                <p>0</p>
            </div>
            <div className='w-[90%]  flex justify-between'>
                {months.map((month) => {
                    return(
                        <div key={month.id} onMouseEnter={()=> handleBarhover(true)} onMouseLeave={() => handleBarhover(false)} className='w-[5%] h-[18em] relative text-center flex'>
                            <div className='h-[16em] w-full relative'><div className={`${month.priceHeight} rounded-t-full hover:bg-gradient-to-b from-primary to-white dark:to-gray-500/10 absolute bottom-0 dark:bg-gray-500 bg-primaryShade w-full`}></div></div>
                            <p className=' justify-self-end z-50 text-center absolute bottom-0'>{month.month}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}