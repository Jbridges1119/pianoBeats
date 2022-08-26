import React, { MouseEvent, useState } from "react";
import { notes } from "./helpers/helpers";
import Octave from "./components/Octave";




function App() {
  const [volume, setVolume] = useState(0.5)
  //e: MouseEvent<HTMLButtonElement> types the event - <HTMLButtonElement> makes it only work with button elements- nothing else
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
    
    //new Audio is built into JS from react
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`)
    audio.volume = volume
    //audio.play calls the function
    audio.play()
  };

  const lowerVolume = (e: MouseEvent<HTMLButtonElement>): void => {
    if(volume > 0) {setVolume((prev) => Math.round(prev* 10)/ 10 - 0.1)}
  }
 const raiseVolume = (e: MouseEvent<HTMLButtonElement>): void => {
  if(volume < 1) {setVolume((prev) => Math.round(prev* 10)/ 10 + 0.1)}
}

  return (
    <div>
      <Octave notes={notes} volume={volume} onClick={handleClick} raiseVolume={raiseVolume} lowerVolume={lowerVolume}/>
    </div>
  );
}

export default App;
