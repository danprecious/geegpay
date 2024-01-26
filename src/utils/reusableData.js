// sidebarComponents
import Order from "../../public/assets/box.svg";
import Dashboard from "../../public/assets/category.svg";
import Trends from "../../public/assets/trend-up.svg";
import Profile from "../../public/assets/profile-2user.svg";
import Info from "../../public/assets/info-circle.svg";
import Discounts from "../../public/assets/discount-shape.svg";

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
    href: "dashboard",
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
    chart: "",
    tag: "Total Order",
    figure: "330",
    trendFigure: "23.5",
    trendColor: "primaryShade",
    trendText: "primary"
  },
  {
    iconUrl: "/assets/3d-rotate.png",
    chart: "",
    tag: "Total Refund",
    figure: "270",
    trendFigure: "23.5",
    trendColor: "redShade",
    trendText: ""
  },
  {
    iconUrl: "/assets/shopping-cart.png",
    chart: "",
    tag: "Average Sales",
    figure: "1567",
    trendFigure: "23.5",
    trendColor: "redShade",
    trendText: ""
  },
  {
    iconUrl: "/assets/coin.png",
    chart: "",
    tag: "Total Income",
    figure: "$530.000",
    trendFigure: "23.5",
    trendColor: "primaryShade",
    trendText: "primary"
  },
];


export const topPlatforms = [
  {
    title: "Book Bazaar",
    price: "$2,500,000",
    percent: "15",
    color: ""
  },
  {
    title: "Artisan Aisle",
    price: "$1,800,000",
    percent: "10",
    color: ""
  },
  {
    title: "Toy Troop",
    price: "$1,200,000",
    percent: "8",
    color: ""
  },
  {
    title: "Xstore",
    price: "$800,000",
    percent: "6",
    color: ""
  },
]
