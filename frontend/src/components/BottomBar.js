import React from "react";
import songContext from "../context/SongContext";
import { useRef, useState, useEffect, useContext } from "react";
import Player from "../components/BottomBar/Player";

function BottomBar() {
  const context = useContext(songContext);
  console.log(context);
  const {
    songs,
    setSongs,
    isPlaying,
    setIsPlaying,
    currentSong,
    setCurrentSong,
  } = context;

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying, currentSong]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };
  return (
    <>
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <div className="h-24 bg-footer border-t border-white border-opacity-5">
        <Player
          songs={songs}
          setSongs={setSongs}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioElem={audioElem}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />
      </div>
    </>
  );
}

export default BottomBar;
