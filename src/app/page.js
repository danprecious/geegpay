// import { UserButton } from '@clerk/nextjs'
import Link from "next/link";
import { Fahkwang } from "next/font/google";
import { StatsData, topPlatforms } from "@/utils/reusableData";
import Stats from "@/local-components/Stats";
import TopPlatformBar, { TopPlatFormContainer } from "@/local-components/topPlatformBar";
import LastOrdersTable from "@/local-components/lastOrdersTable";
import BarGraph from "@/local-components/barGraph";

const michroma = Fahkwang({ subsets: ["latin"], weight: "700" });


const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="lg:h-[50%] relative sm:flex-col lg:flex-row flex m-4">
        <div className="lg:w-[60%] p-3 bg-white dark:bg-gray-700 rounded-lg hidden md:flex">
          <BarGraph />
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
              shade,
              trendText,
              trendIcon
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
                  shades={shade}
                  trendIcon={trendIcon}
                />
              );
            }
          )}
        </div>
      </div>
      <div className="relative md:flex mx-4">
        <div className="md:w-[60%]  overflow-x-scroll overflow-hidden bg-white dark:bg-gray-700 rounded-lg p-3">
            <div className="flex justify-between px-3">
              <p className="font-medium text-lg">Last Orders</p>
              <p className="font-medium text-primary bg-">See All</p>
            </div>
            <LastOrdersTable />
        </div>
        <TopPlatFormContainer />
      </div>
    </div>
  );
};

export default Home;

