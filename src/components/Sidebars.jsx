import React from "react";
import logo from "../assets/react.svg";
import { ChartBar, Disc, Music2, Radio } from "lucide-react";

const menus = [
  {
    name: "Thư viện",
    link: "/library",
    icon: <Music2 width={18} />,
  },
  {
    name: "Khám phá",
    link: "/kham-pha",
    icon: <Disc width={18} />,
  },
  {
    name: "#zingchart",
    link: "/zing-chart",
    icon: <ChartBar width={18} />,
  },
  { name: "Radio", link: "/radio", icon: <Radio width={18} /> },
];

export default function Sidebars() {
  return (
    <div className="w-64 flex flex-col bg-[#231b2e]">
      <div className="flex justify-center my-2">
        <img
          src="https://www.designyourway.net/blog/wp-content/uploads/2023/04/pepsi-logo.jpg"
          className="w-28 h-12"
        />
      </div>
      <div className="flex flex-col gap-2">
        {menus.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 pl-5 text-white p-3 ${
              index === 1 && "bg-slate-500/20 border-l-2 border-fuchsia-600"
            }`}
          >
            {menu.icon}
            <span>{menu.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
