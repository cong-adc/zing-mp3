import React from "react";

export default function CardItem({
  name,
  singer,
  image,
  music,
  onClick,
  isHover = true,
}) {
  return (
    <div
      className={`flex items-center gap-2  p-2  ${
        isHover ? "hover:bg-slate-500/20" : ""
      }  `}
      onClick={() => onClick && onClick(music)}
    >
      <div>
        <img className="w-12 h-12 object-cover" src={image} />
      </div>
      <div className="text-white">
        <h5>{name}</h5>
        <p className="text-sm text-gray-500">{singer}</p>
      </div>
    </div>
  );
}
