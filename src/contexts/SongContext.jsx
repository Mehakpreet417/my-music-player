import React, { createContext, useState } from "react";
import BelieverPoster from "../assets/album-art/BelieverPoster.png"
import darksidePoster from "../assets/album-art/darksidePoster.jpg"
import EnemyPoster from "../assets/album-art/EnemyPoster.jpg"
import lovelyPoster from "../assets/album-art/lovelyPoster.jpg"
import thunderPoster from "../assets/album-art/thunderPoster.webp"
import unstoppablePoster from "../assets/album-art/unstoppablePoster.webp"
import Believer from "../assets/audio/Believer.mp3"
import Darkside from "../assets/audio/Darkside.mp3"
import Enemy from "../assets/audio/Enemy.mp3"
import Lovely from "../assets/audio/Lovely.mp3"
import Thunder from "../assets/audio/Thunder.mp3"
import Unstoppable from "../assets/audio/Unstoppable.mp3"


const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "Believer",
      artist: "IMAGINE DRAGONS",
      albumArt: BelieverPoster,
      audio: Believer,
    },
    {
      id: 2,
      title: "DarkSide",
      artist: "ALAN WALKER",
      albumArt: darksidePoster,
      audio: Darkside,
    },
    {
      id: 3,
      title: "Enemy",
      artist: "IMAGINE DRAGONS",
      albumArt: EnemyPoster,
      audio: Enemy,
    },
    {
      id: 4,
      title: "Lovely",
      artist: "BILLIE EILISH",
      albumArt: lovelyPoster,
      audio: Lovely,
    },
    {
      id: 5,
      title: "Thunder",
      artist: "IMAGINE DRAGONS",
      albumArt: thunderPoster,
      audio: Thunder,
    },
    {
      id: 6,
      title: "Unstoppable",
      artist: "SIA",
      albumArt: unstoppablePoster,
      audio: Unstoppable,
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <SongContext.Provider value={{ songs, currentSong, setCurrentSong, currentSongIndex, setCurrentSongIndex }}>
      {children}
    </SongContext.Provider>
  );
};

export default SongContext;