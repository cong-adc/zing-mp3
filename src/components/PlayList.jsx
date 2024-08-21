import { Ellipsis, Heart, Play, PlayCircle } from "lucide-react";
import React, { useState } from "react";
import CardBox from "./ui/CardBox";

export default function PlayList({ title }) {
  const [list, setList] = useState([
    {
      id: 1,
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/d/c/b/cdcba8f6026e4e90e33f2d4d4604d515.jpg",
      description: "ABC",
    },
    {
      id: 2,
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/d/c/b/cdcba8f6026e4e90e33f2d4d4604d515.jpg",
      description: "NHAC CHILLLLLLLL",
    },
  ]);

  return (
    <div className="px-10 mt-10">
      <h2 className="font-bold text-white text-xl">{title}</h2>

      <div className="flex items-center gap-4 text-white mt-4">
        <button className="bg-purple-500 px-4 rounded-full">Tất cả</button>
        <button className="px-4 rounded-full border border-gray-700">
          Việt Nam
        </button>
        <button className="px-4 rounded-full border border-gray-700">
          Quốc tế
        </button>
      </div>
      <div className="grid grid-cols-4 mt-4">
        {list.map((item) => (
          <CardBox key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
