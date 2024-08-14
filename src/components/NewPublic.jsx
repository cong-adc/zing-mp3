import React from "react";
import CardItem from "./ui/CardItem";

export default function NewPublic() {
  return (
    <div className="px-10 mt-10">
      <h2 className="font-bold text-white text-xl">Mới phát hành</h2>

      <div className="flex items-center gap-4 text-white mt-4">
        <button className="bg-purple-500 px-4 rounded-full">Tất cả</button>
        <button className="px-4 rounded-full border border-gray-700">
          Việt Nam
        </button>
        <button className="px-4 rounded-full border border-gray-700">
          Quốc tế
        </button>
      </div>
      <div>
        <CardItem name="asd" />
      </div>
    </div>
  );
}
