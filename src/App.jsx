import React from "react";
import { SongProvider } from "./contexts/SongContext";
import SongList from "./components/SongList";
import Player from "./components/Player";
import arrowRight from "./assets/icons/arrow-right.png";

const App = () => {
  return (
    <SongProvider>
      <div className="bg-[#091227] min-h-screen max-w-[375px] flex flex-col justify-center">
        <img src={arrowRight} alt="arrowRight" className="h-[24px] w-[24px] ml-4 cursor-not-allowed" />
        <h1 className="text-[#EAF0FF] text-[24px] font-[400] p-4 pb-0 font-akshar">Liked Songs</h1>
        <SongList />
        <Player />
      </div>
    </SongProvider>
  );
};

export default App;
