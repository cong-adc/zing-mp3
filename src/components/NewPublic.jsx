import React, { useContext } from "react";
import CardItem from "./ui/CardItem";
import musicList from "../../data.json";
import { PlayerContext } from "../App";

export default function NewPublic() {
  const { onChangeMusicPlaying, onChangeMusicList } = useContext(PlayerContext);
  const handleClickMusic = (music) => {
    onChangeMusicPlaying(music);
    onChangeMusicList(musicList);
  };

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
      <div className="grid grid-cols-3 mt-4">
        {musicList.map((music, index) => {
          return (
            <CardItem
              key={music.cover + index}
              name={music.title}
              singer={music.artist}
              image={music.cover}
              music={music}
              onClick={handleClickMusic}
            />
          );
        })}
      </div>
    </div>
  );
}
