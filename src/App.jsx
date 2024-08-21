import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Album from "./pages/album";
import Sidebars from "./components/Sidebars";
import SidebarsRight from "./components/SidebarsRight";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import Player from "./components/Player";
export const PlayerContext = createContext({});

// alt + shift + o => xoa import khong dung
function App() {
  const [musicList, setMusicList] = useState([]);
  const [musicPlaying, setMusicPlaying] = useState({});

  const onChangeMusicPlaying = (music) => {
    setMusicPlaying(music);
  };

  const onChangeMusicList = (musicList) => {
    setMusicList(musicList);
  };

  const onNextMusic = () => {
    const indexCurrent = musicList.findIndex(
      (music) => music.id === musicPlaying.id
    );

    if (indexCurrent !== -1) {
      if (indexCurrent + 1 === musicList.length) {
        setMusicPlaying(musicList[0]);
        return;
      }
      setMusicPlaying(musicList[indexCurrent + 1]);
    }
  };

  const onPrevMusic = () => {
    const indexCurrent = musicList.findIndex(
      (music) => music.id === musicPlaying.id
    );

    if (indexCurrent !== -1) {
      if (indexCurrent === 0) {
        setMusicPlaying(musicList[musicList.length - 1]);
        return;
      }
      setMusicPlaying(musicList[indexCurrent - 1]);
    }
  };

  useEffect(() => {
    if (musicPlaying.id) {
      const historyMusic = JSON.parse(
        localStorage.getItem("musicList") ?? "[]"
      );
      const index = historyMusic.findIndex(
        (music) => music.id === musicPlaying.id
      );
      if (index !== -1) {
        historyMusic.splice(index, 1);
      }

      historyMusic.unshift(musicPlaying);

      localStorage.setItem("musicList", JSON.stringify(historyMusic));
    }
  }, [musicPlaying]);

  return (
    <PlayerContext.Provider
      value={{
        musicPlaying,
        onNextMusic,
        onPrevMusic,
        onChangeMusicPlaying,
        onChangeMusicList,
      }}
    >
      <div className="flex justify-between h-screen overflow-hidden">
        <Sidebars />
        <div className="flex-1 bg-[#170f23] overflow-y-scroll">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/album/:id" element={<Album />} />
          </Routes>
          <Player />
        </div>
        <SidebarsRight />
      </div>
    </PlayerContext.Provider>
  );
}

export default App;
