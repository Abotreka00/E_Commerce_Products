import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import manimage from "../assets/images/man.jpg";
import womanimage from "../assets/images/women.jpg";
import kidsimage from "../assets/images/kids.jpg";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export const menuItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Contact", path: "/contact" },
];

export const catagories = [
  "Jacket",
  "Mens",
  "Women's",
  "Backpack",
  "Gold",
  "WD",
];

export const InfoSectionMap = [
  {
    icon: <FaShippingFast className="text-3xl text-redBisic" />,
    title: "Free Shipping",
    desc: "Get your orders delivered with no extra cost",
  },
  {
    icon: <FaHeadset className="text-3xl text-redBisic" />,
    title: "Support 24/7",
    desc: "We are here to assist you anytime",
  },
  {
    icon: <FaMoneyBill1Wave className="text-3xl text-redBisic" />,
    title: "100% Money Back",
    desc: "Full refund if you are not satisfied",
  },
  {
    icon: <FaLock className="text-3xl text-redBisic" />,
    title: "Payment Secure",
    desc: "Your payment is secure with us",
  },
  {
    icon: <FaTag className="text-3xl text-redBisic" />,
    title: "Discount",
    desc: "Enjoy the best prices on our products",
  },
];

export const manWK = [
  {
    id: 1,
    type: "Man",
    info: "View All",
    image: manimage,
  },
  {
    id: 2,
    type: "Women",
    info: "View All",
    image: womanimage,
  },
  {
    id: 3,
    type: "Kids",
    info: "View All",
    image: kidsimage,
  },
];
