import React, { useContext } from "react";
import SongCard from "./SongCard";
import SongContext from "../contexts/SongContext";

const SongList = () => {
  const { songs } = useContext(SongContext);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SongList;
