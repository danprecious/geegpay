import React from 'react'



const TopPlatformBar = ({title, price, percent, color, width}) => {
  // console.log(percent)
  
  const colorVariants = {
    "primary": "bg-violet-500",
    "info": "bg-primary",
    "warning": "bg-[orange]",
    "danger": "bg-redShade",
  }

    // let width = "w-[15%]"
  

  // let width = "min-w-[" + percent + "%]"
  // let width = Math.round(Math.random() * 100)

  return (
    <div className="my-5">
        <p className='py-1'>{title}</p>
        <div className='h-2 w-full relative bg-gray-200 rounded-md'>
            <div className={`${colorVariants[color]} ${width} rounded-md h-full`}></div>
        </div>
        <div className='flex py-2 justify-between'>
            <p>{price}</p>
            <p>+{percent}%</p>
        </div>
    </div>
  )
}

export const TopPlatFormContainer = () =>{

  const topPlatforms = [
    {
      title: "Book Bazaar",
      price: "$2,500,000",
      percent: "15",
      color: "primary",
      width: "w-[50%]"
  
    },
    {
      title: "Artisan Aisle",
      price: "$1,800,000",
      percent: "10",
      color: "info",
      width: "w-[40%]"
  
    },
    {
      title: "Toy Troop",
      price: "$1,200,000",
      percent: "8",
      color: "warning",
      width: "w-[25%]"
    },
    {
      title: "Xstore",
      price: "$800,000",
      percent: "6",
      color: "danger",
      width: "w-[15%]"
    },
  ];


  return(
    <div className="md:w-[40%] lg:mx-4 relative bg-white dark:bg-gray-700 rounded-lg p-3">
          <div className="flex w-full mb-4 justify-between">
            <p className="font-medium text-lg">Top Platform</p>
            <p className="text-primary font-medium">See All</p>
            </div>
            
            <div>
              {topPlatforms.map(({ title, percent, price, color, width }) => (
                <TopPlatformBar
                  key={title}
                  title={title}
                  price={price}
                  percent={percent}
                  color={color}
                  width={width}
                />
              ))}
            </div>
        </div>
  )
}

export default TopPlatformBar;
