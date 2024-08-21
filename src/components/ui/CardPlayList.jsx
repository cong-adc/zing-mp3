import { Ellipsis, Heart, PlayCircle } from "lucide-react";
import React from "react";

export default function CardPlayList({
  id,
  image,
  title,
  authors = [],
  date,
  likeCount,
}) {
  return (
    <div className="w-[300px]">
      <div className="rounded-lg overflow-hidden group relative">
        <img
          src={image}
          alt="image"
          className="w-full group-hover:scale-110 transition-all duration-500"
        />
        <div className="invisible group-hover:visible transition-all  duration-200 bg-black/50 absolute left-0 top-0 w-full h-full flex items-center justify-center">
          <div className="flex items-center justify-center gap-4 text-white">
            <PlayCircle size={48} strokeWidth={1} />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="text-white font-bold text-lg text-center">{title}</h2>
        <p className="text-gray-400 text-sm text-center"> Cập nhật {date}</p>
        <p className="text-gray-400 text-sm text-center">
          {authors?.join(", ")}
        </p>
        <p className="text-gray-400 text-sm text-center">
          {likeCount} nguười yêu thích
        </p>
      </div>
    </div>
  );
}
