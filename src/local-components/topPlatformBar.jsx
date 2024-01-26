import React from 'react'

const TopPlatformBar = ({title, price, percent, color}) => {
  console.log(percent)

  return (
    <div className=''>
        <p className='py-1'>{title}</p>
        <div className='h-2 w-full relative bg-gray-200 rounded-md'>
            <div className={`bg-${color} bg-violet-500 w-[${percent}%]  rounded-md h-full`}></div>
        </div>
        <div className='flex py-2 justify-between'>
            <p>{price}</p>
            <p>+{percent}%</p>
        </div>
    </div>
  )
}

export default TopPlatformBar;
