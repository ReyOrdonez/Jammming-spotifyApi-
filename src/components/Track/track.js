import React, { useState, useEffect } from "react";
import "./track.css";

const Track = ({
  track,
  addToPlayList,
  removeFromPlayList,
  setTrackToPlay,
  setIsPlaying,
}) => {
  const [hiddenClass, setHiddenClass] = useState("hiddenTrack");

  function handleOnClick() {
    setTrackToPlay(track);
    setIsPlaying(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setHiddenClass("track");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={hiddenClass}>
      <div className="flex-container">
        <div className="data">
          <p>{track.name}</p>
          <p className="sub">
            {track.artist} | {track.album}
          </p>
        </div>
        <div className="agroup-container">
          {track.preview && (
            <button
              type="button"
              className="play-button"
              onClick={handleOnClick}
            ></button>
          )}
          {addToPlayList && (
            <button
              type="submit"
              className="add-button"
              onClick={() => addToPlayList(track)}
            ></button>
          )}
          {removeFromPlayList && (
            <button
              type="submit"
              className="removeButton"
              onClick={() => removeFromPlayList(track)}
            ></button>
          )}
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Track;
