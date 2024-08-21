import {
  ArrowLeftRight,
  AudioLines,
  MicVocal,
  PauseCircle,
  Shuffle,
  StepBack,
  StepForward,
} from "lucide-react";
import React, { useContext, useEffect, useRef } from "react";
import CardItem from "./ui/CardItem";
import { PlayerContext } from "../App";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";

export default function Player() {
  const { musicPlaying, onNextMusic, onPrevMusic } = useContext(PlayerContext);
  const refAudio = useRef(null);

  useEffect(() => {
    if (musicPlaying?.url) {
      refAudio.current.src = musicPlaying.url;
    }
  }, [musicPlaying, refAudio]);

  const handlePlayAndPause = () => {
    if (refAudio.current.paused) {
      refAudio.current.play();
    } else {
      refAudio.current.pause();
    }
  };

  return (
    <div className="flex items-center justify-between h-20 bg-slate-900 fixed left-0 bottom-0 w-full px-8">
      <div>
        <CardItem
          name={musicPlaying.title}
          image={musicPlaying.cover}
          singer={musicPlaying.artist}
        />
      </div>
      <div className="w-full">
        {/* <div className="text-white flex items-center gap-4">
          <button className="hover:bg-purple-900/80 p-2 rounded-full">
            <Shuffle width={24} />
          </button>
          <button className="hover:bg-purple-900/80 p-2 rounded-full">
            <StepBack width={24} />
          </button>
          <button
            onClick={handlePlayAndPause}
            className="hover:bg-purple-900/80 p-2 rounded-full"
          >
            <PauseCircle width={24} />
          </button>
          <button
            onClick={onNextMusic}
            className="hover:bg-purple-900/80 p-2 rounded-full"
          >
            <StepForward width={24} />
          </button>
          <button className="hover:bg-purple-900/80 p-2 rounded-full">
            <ArrowLeftRight width={24} />
          </button>
        </div> */}
        <AudioPlayer
          ref={refAudio}
          src={musicPlaying.url}
          showJumpControls
          showSkipControls
          onClickNext={onNextMusic}
          onClickPrevious={onPrevMusic}
          className="bg-transparent h-full overflow-hidden shadow-none"
        />
      </div>
      <div className="text-white flex items-center gap-4">
        <button>
          <MicVocal width={20} />
        </button>
        <button>
          <MicVocal width={20} />
        </button>
        <button>
          <MicVocal width={20} />
        </button>
        <button>
          <AudioLines width={20} />
        </button>
      </div>
    </div>
  );
}
