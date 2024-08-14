import { AlarmClock, Clock, Ellipsis } from "lucide-react";
import React from "react";
import CardItem from "./ui/CardItem";

export default function SidebarsRight() {
  return (
    <div className="w-[350px] bg-[#170f23] border-l border-l-slate-700">
      <div className="flex items-center p-4 justify-between">
        <div className="flex bg-white/20 p-1 rounded-3xl gap-2">
          <button className="bg-white/50 text-sm p-1 px-2 rounded-2xl text-white">
            Danh sách phát
          </button>
          <button className="p-1 px-2 text-sm rounded-2xl text-white">
            Nghe gần đây
          </button>
        </div>
        <button className="rounded-full bg-white/50 w-8 h-8 flex justify-center items-center">
          <AlarmClock width={16} className="text-white" />
        </button>
        <button className="rounded-full bg-white/50 w-8 h-8 flex justify-center items-center">
          <Ellipsis width={16} className="text-white" />
        </button>
      </div>

      <CardItem
        name="Bai 1"
        singer="Singer 1"
        image="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/4/a/8/a/4a8aa1c98b13f82c95fad774ee6589eb.jpg"
      />
    </div>
  );
}
