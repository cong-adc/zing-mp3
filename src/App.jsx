import { createContext, useState } from "react";
import "./App.css";
import Sidebars from "./components/Sidebars";
import SidebarsRight from "./components/SidebarsRight";
import Header from "./components/Header";
import Banner from "./components/Banner";
import NewPublic from "./components/NewPublic";
import Player from "./components/Player";

export const PlayerContext = createContext({});

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

  return (
    <PlayerContext.Provider
      value={{
        musicPlaying,
        onNextMusic,
        onChangeMusicPlaying,
        onChangeMusicList,
      }}
    >
      <div className="flex justify-between h-screen overflow-hidden">
        <Sidebars />
        <div className="flex-1 bg-[#170f23] overflow-y-scroll">
          <Header />
          <Banner />
          <NewPublic />
        </div>
        <SidebarsRight />
        <Player />
      </div>
    </PlayerContext.Provider>
  );
}

export default App;
