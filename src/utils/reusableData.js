// sidebarComponents
import Order from "../../public/assets/box.svg";
import Dashboard from "../../public/assets/category.svg";
import Trends from "../../public/assets/trend-up.svg";
import Profile from "../../public/assets/profile-2user.svg";
import Info from "../../public/assets/info-circle.svg";
import Discounts from "../../public/assets/discount-shape.svg";
import RedChart from "../../public/assets/red-chart.svg";
import GreenChart from "../../public/assets/green-chart.svg";
import GreenTrend from "../../public/assets/trending-up-green.svg";
import RedTrend from "../../public/assets/trending-up-red.svg";


// StatsComponents
// import TotalOrder from "../../public/assets/box-tick.png";
// import TotalRefund from "../../public/assets/3d-rotate.png";
// import AverageSales from "../../public/assets/shopping-cart.png";
// import TotalIncome from "../../public/assets/coin.png";

export const components = [
  {
    id: "1",
    title: "Dashboard",
    icon: <Dashboard />,
    href: "/",
  },
  {
    id: "2",
    title: "Trends",
    icon: <Trends />,
    href: "trends",
  },
  {
    id: "3",
    title: "Profile",
    icon: <Profile />,
    href: "profile",
  },
  {
    id: "4",
    title: "Orders",
    icon: <Order />,
    href: "order",
  },
  {
    id: "5",
    title: "Discounts",
    icon: <Discounts />,
    href: "discounts",
  },
  {
    id: "6",
    title: "Info",
    icon: <Info />,
    href: "info",
  },
];

export const StatsData = [
  {
    iconUrl: "/assets/box-tick.png",
    chart: <GreenChart/>,
    tag: "Total Order",
    figure: "330",
    trendFigure: "23.5",
    shade: "success",
    trendColor: "primaryShade",
    trendText: "primary",
    trendIcon: <GreenTrend />
  },
  {
    iconUrl: "/assets/3d-rotate.png",
    chart: <RedChart />,
    tag: "Total Refund",
    figure: "270",
    trendFigure: "23.5",
    shade: "danger",
    trendColor: "redShade",
    trendText: "",
    trendIcon: <RedTrend />
  },
  {
    iconUrl: "/assets/shopping-cart.png",
    chart: <RedChart />,
    tag: "Average Sales",
    figure: "1567",
    trendFigure: "23.5",
    shade: "danger",
    trendColor: "redShade",
    trendText: "",
    trendIcon: <RedTrend />
  },
  {
    iconUrl: "/assets/coin.png",
    chart: <GreenChart />,
    tag: "Total Income",
    figure: "$530.000",
    trendFigure: "23.5",
    shade: "success",
    trendColor: "primaryShade",
    trendText: "primary",
    trendIcon: <GreenTrend />
  },
];


export const topPlatforms = [
  {
    title: "Book Bazaar",
    price: "$2,500,000",
    percent: "15",
    color: "primary",
    width: "w-[15%]"

  },
  {
    title: "Artisan Aisle",
    price: "$1,800,000",
    percent: "10",
    color: "info",
    width: "w-[10%]"

  },
  {
    title: "Toy Troop",
    price: "$1,200,000",
    percent: "8",
    color: "warning",
    width: "w-[8%]"
  },
  {
    title: "Xstore",
    price: "$800,000",
    percent: "6",
    color: "danger",
    width: "w-[6%]"
  },
];

export const tableData = [
  {
    name: "Marcus Bergson",
    date: "Nov 15,2023",
    amount: "80,000",
    status: "Paid",
    imgUrl: "/assets/images/marcus.jpeg"
  },
  {
    name: "Jaydon Vaccaro",
    date: "Nov 15,2023",
    amount: "150,000",
    status: "Refund",
    imgUrl: "/assets/images/jaydon.jpeg"
  },
  {
    name: "Corey Schleifer",
    date: "Nov 14,2023",
    amount: "87,000",
    status: "Paid",
    imgUrl: "/assets/images/corey.jpeg"
  },
  {
    name: "Cooper Press",
    date: "Nov 14,2023",
    amount: "100,000",
    status: "Refund",
    imgUrl: "/assets/images/profile.jpeg"
  },
  {
    name: "Phillip Lubin",
    date: "Nov 13, 2023",
    amount: "78,000",
    status: "Paid",
    imgUrl: "/assets/images/phillip.jpeg"
  },
]
