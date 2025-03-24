import React, { useRef, useEffect } from "react";
import "./audioPlayer.css";

const AudioPlayer = ({ trackToPlay, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  useEffect(() => {
    const playAudio = async () => {
      try {
        if (trackToPlay.preview) {
          await audioRef.current.play();
          setIsPlaying(true);
        } else {
          console.log("no existe preview");
        }
      } catch (error) {
        console.error(error);
      }
    };

    playAudio();
  }, [trackToPlay, setIsPlaying]);

  function togglePause() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="audio-player-container">
      <img
        alt="albumImage"
        src={trackToPlay.albumImage}
        className="album-image"
      />
      <div className="line"></div>
      <h3>{trackToPlay.name}</h3>
      <audio ref={audioRef} src={trackToPlay.preview} />
      <button
        className={isPlaying ? "play-audio-pause" : "play-audio-play"}
        onClick={togglePause}
      ></button>
    </div>
  );
};

export default AudioPlayer;
