// import { UserButton } from '@clerk/nextjs'
import Link from "next/link";
import { Fahkwang } from "next/font/google";
import { StatsData, topPlatforms } from "@/utils/reusableData";
import Stats from "@/local-components/Stats";
import TopPlatformBar from "@/local-components/topPlatformBar";

const michroma = Fahkwang({ subsets: ["latin"], weight: "700" });

const Home = () => {
  return (
    <div className="flex relative flex-col h-[90vh] overflow-y-scroll">
      <div className="lg:h-[50%] relative sm:flex-col lg:flex-row flex m-4 slim-border border-[1px]">
        <div className="lg:w-[60%] p-3 bg-white rounded-lg hidden md:flex">
          barchart
        </div>
        <div className="lg:mx-3 p-2 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full  lg:w-[40%]">
          {StatsData.map(
            ({
              iconUrl,
              chart,
              tag,
              figure,
              trendFigure,
              trendColor,
              trendText,
            }) => {
              // console.log(iconUrl);

              return (
                <Stats
                  key={tag}
                  icon={iconUrl}
                  chart={chart}
                  tag={tag}
                  figure={figure}
                  trendFigure={trendFigure}
                  trendColor={trendColor}
                  trendText={trendText}
                />
              );
            }
          )}
        </div>
      </div>
      <div className="relative md:flex mx-4">
        <div className="md:w-[60%] bg-white rounded-lg p-3">Last orders</div>
        <div className="lg:w-[40%] lg:mx-4 relative bg-white rounded-lg  p-3">
          <div className="flex w-full mb-4 justify-between">
            <p className="font-medium">Top Platform</p>
            <p className="text-primary">See All</p>
            </div>
            <div>
              {topPlatforms.map(({ title, percent, price }) => (
                <TopPlatformBar
                  key={title}
                  title={title}
                  price={price}
                  percent={percent}
                />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
