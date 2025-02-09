import React, { useContext, useRef, useEffect, useState } from "react";
import SongContext from "../contexts/SongContext";
import play from "../assets/icons/play.png";
import pause from "../assets/icons/pause.png";
import previous from "../assets/icons/previous.png";
import next from "../assets/icons/next.png";

const Player = () => {
  const { songs, currentSongIndex, setCurrentSongIndex } =
    useContext(SongContext);
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (songs.length > 0 && audioRef.current) {
      audioRef.current.src = songs[currentSongIndex].audio;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSongIndex, songs]);

  useEffect(() => {
    setIsPlaying(false);
    const updateProgress = () => {
      if (audioRef.current) {
        const progressPercent =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(progressPercent || 0);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
  };

  // Handle progress bar click (seek)
  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const newTime = (clickPosition / rect.width) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  return (
    <div className="fixed bottom-[20px] left-auto w-full max-w-[375px] bg-gray-900 py-4 px-0 h-[90px]">
      {songs.length > 0 ? (
        <>
          <div
            className="w-full h-[4px] bg-[#FFFFFF4F] cursor-pointer"
            ref={progressRef}
            onClick={handleProgressClick}
          >
            <div
              className="relative h-full bg-[#FFFFFF] transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
            <div
              className="absolute w-[16px] h-[16px] rounded-[16px] bg-[#FFFFFF]"
              style={{ left: `${progress}%`, top: "11%" }}
            ></div>
          </div>
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <img
                src={songs[currentSongIndex].albumArt}
                alt="albumArt"
                className="h-[66px] w-[66px]"
              />
              <div>
                <h3 className="text-[#EAF0FF] font-[400] text-[18.02px]">
                  {songs[currentSongIndex].title}
                </h3>
                <p className="text-[#A5C0FFB2] font-[400] text-[10.01px]">
                  {songs[currentSongIndex].artist}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mr-4">
              <button onClick={handlePrevious}>
                <img
                  src={previous}
                  alt="Previous"
                  className="w-[21px] h-[21px]"
                />
              </button>
              <button onClick={handlePlayPause}>
                {isPlaying ? (
                  <img src={pause} alt="Pause" className="w-[21px] h-[21px]" />
                ) : (
                  <img src={play} alt="Play" className="w-[21px] h-[21px]" />
                )}
              </button>
              <button onClick={handleNext}>
                <img src={next} alt="Next" className="w-[21px] h-[21px]" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}

          <audio ref={audioRef}></audio>
        </>
      ) : (
        <p className="text-gray-400 text-center">Select a song to play.</p>
      )}
    </div>
  );
};

export default Player;
