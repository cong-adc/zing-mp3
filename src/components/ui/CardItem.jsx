import React from "react";

export default function CardItem({ name, singer, image }) {
  return (
    <div className="flex items-center gap-2 hover:bg-slate-500/20 p-2">
      <div>
        <img className="w-12 h-12" src={image} />
      </div>
      <div className="text-white">
        <h5>{name}</h5>
        <p className="text-sm text-gray-500">{singer}</p>
      </div>
    </div>
  );
}
