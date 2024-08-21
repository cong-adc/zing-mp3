import { AlarmClock, Clock, Ellipsis } from "lucide-react";
import React, { useContext, useEffect } from "react";
import CardItem from "./ui/CardItem";
import { PlayerContext } from "../App";

export default function SidebarsRight() {
  const { musicPlaying } = useContext(PlayerContext);

  const [listHistory, setListHistory] = React.useState([]);

  useEffect(() => {
    const fetchHistory = () => {
      const historyMusic = JSON.parse(
        localStorage.getItem("musicList") ?? "[]"
      );
      setListHistory(historyMusic);
    };
    setTimeout(fetchHistory, 100);
  }, [musicPlaying]);

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

      {listHistory.map((music) => (
        <CardItem
          key={music.id}
          name={music.title}
          singer={music.artist}
          image={music.cover}
        />
      ))}
    </div>
  );
}
