import Image from "next/image";
import React from "react";

const Stats = ({
  icon,
  chart,
  tag,
  figure,
  trendFigure, 
  trendColor,
  trendText,
}) => {



  return (
    <div className="p-2 rounded-lg   bg-white">
      <div className="flex">
        <div className="p-2 "><div className="rounded-full bg-gray-200 p-1 h-[30px] w-[30px]  overflow-hidden"><Image src={icon} className="min-h-full w-full" width={1024} height={1024}/></div></div>
        <div>{chart}</div>
      </div>
      <div className="text-left">
        <p className="text-gray-500">{tag}</p>
      </div>
      <div className="text-left py-1">
        <p className="text-secondary font-medium text-xl">{figure}</p>
      </div>
      <div className="flex justify-between">
        <div
          className={`bg-${trendColor} text-${trendText} text-xs rounded-xl p-1`}
        >
          {trendFigure}%
        
        </div>
        <p className="text-xs text-gray-500">vs. previous month</p>
      </div>
    </div>
  );
};

export default Stats;


