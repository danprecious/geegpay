import Image from "next/image";
import React from "react";

const Stats = ({
  icon,
  chart,
  tag,
  figure,
  trendFigure, 
  shades,
  trendColor,
  trendText,
  trendIcon
}) => {

  const shadesVariants = {
    "success": "bg-primaryShade/40 text-primary",
    "danger": "bg-redShade/50 text-red-600",
  }

  return (
    <div className="p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-white">
      <div className="flex justify-between">
        <div className="p-2 ">
          <div className="rounded-full bg-gray-200 p-1 h-[30px] w-[30px]  overflow-hidden">
            <Image alt="icon" src={icon} className="min-h-full w-full" width={1024} height={1024}/>
          </div>
        </div>
        <div className="pt-2">{chart}</div>
      </div>
      <div className="text-left">
        <p className="text-gray-500 dark:text-white">{tag}</p>
      </div>
      <div className="text-left py-1">
        <p className="text-secondary dark:text-white font-medium text-xl">{figure}</p>
      </div>
      <div className="flex justify-between">
        <div
          className={`${shadesVariants[shades]} text-xs rounded-xl p-1 px-2 flex`}
        >
          <p className="px-[2px] mt-[3px]">{trendIcon}</p>
          <small>
          {trendFigure}%
          </small>
        </div>
        <p className="text-xs text-gray-500 dark:text-white">vs. previous month</p>
      </div>
    </div>
  );
};

export default Stats;


