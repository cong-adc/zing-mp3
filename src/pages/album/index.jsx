import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CardPlayList from "../../components/ui/CardPlayList";
import data from "../../../data.json";
import CardItem from "../../components/ui/CardItem";
import { PlayerContext } from "../../App";

export default function Album() {
  const params = useParams();
  const id = params.id;

  const { onChangeMusicPlaying, onChangeMusicList } = useContext(PlayerContext);
  const handleClickMusic = (music) => {
    onChangeMusicPlaying(music);
    onChangeMusicList(data);
  };

  return (
    <div className="p-8">
      <div className="flex gap-8">
        <div>
          <CardPlayList
            id={id}
            image="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/3/0/3/1303e6c5c1b8c7b3b3d8e7d3d5c1c7b3.jpg"
            title="Nhạc Việt Hot Tháng 10"
            authors={["V.A"]}
            date="20/10/2021"
            likeCount={100}
          />
        </div>
        <div className="flex-1 pr-8">
          <h4 className="text-base text-white">
            <span className="text-gray-600">Lời tựa</span> Tựa đầu vào vai nhau
            lắng nghe những khúc nhạc tình bình yên đến lạ
          </h4>
          <table className="w-full table-auto text-gray-500">
            <thead>
              <tr>
                <th className="text-left">Bài hát</th>
                <th className="text-left">Album</th>
                <th className="text-right">Thời gian</th>
              </tr>
            </thead>
            <tbody>
              {data.map((song) => {
                return (
                  <tr key={song.id} className="hover:bg-slate-500/20 ">
                    <td>
                      <CardItem
                        key={song.id}
                        name={song.title}
                        singer={song.artist}
                        image={song.cover}
                        music={song}
                        isHover={false}
                        onClick={handleClickMusic}
                      />
                    </td>
                    <td>{song.album}</td>
                    <td className="text-right">{song.duration}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
