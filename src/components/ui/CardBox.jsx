import { Ellipsis, Heart, PlayCircle } from "lucide-react";
import React from "react";

export default function CardBox({ id, image, description }) {
  return (
    <a href={`/album/${id}`} className="w-[200px]">
      <div className="rounded-lg overflow-hidden group relative">
        <img
          src={image}
          alt="image"
          className="group-hover:scale-110 transition-all duration-500"
        />
        <div className="invisible group-hover:visible transition-all  duration-200 bg-black/50 absolute left-0 top-0 w-full h-full flex items-center justify-center">
          <div className="flex items-center justify-center gap-4 text-white">
            <Heart />
            <PlayCircle size={48} strokeWidth={1} />
            <Ellipsis />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
      </div>
    </a>
  );
}
