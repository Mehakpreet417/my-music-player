import React, { useContext } from "react";
import SongContext from "../contexts/SongContext";

const SongCard = ({ song }) => {
  const { setCurrentSongIndex } =useContext(SongContext);

  return (
    <div
      className="bg-transparent  rounded-lg shadow hover:bg-gray-700 cursor-pointer text-center"
      onClick={() => setCurrentSongIndex(song.id -1)}
    >
      <img src={song.albumArt} alt={song.title} className="rounded-lg mb-2 h-[145px]" />
      <h3 className="text-[#EAF0FF] font-[400] text-[14px] ">{song.title}</h3>
      <p className="font-[400] text-[10px] text-[#A5C0FFB2]">{song.artist}</p>
    </div>
  );
};

export default SongCard;
