import React, { useState, useEffect } from "react";
import "./track.css";

const Track = ({ track, addToPlayList, removeFromPlayList }) => {
  const [hiddenClass, setHiddenClass] = useState("hiddenTrack");
  useEffect(() => {
    const timer = setTimeout(() => {
      setHiddenClass("track");
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={hiddenClass}>
      <div className="flex-container">
        <div>
          <p>{track.name}</p>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
        {addToPlayList && (
          <button type="submit" onClick={() => addToPlayList(track)}></button>
        )}
        {removeFromPlayList && (
          <button
            type="submit"
            className="removeButton"
            onClick={() => removeFromPlayList(track)}
          ></button>
        )}
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Track;
