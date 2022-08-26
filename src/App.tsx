import React, { MouseEvent } from "react";
import { notes } from "./helpers/helpers";
import Octave from "./components/Octave";

function App() {
  //e: MouseEvent<HTMLButtonElement> types the event - <HTMLButtonElement> makes it only work with button elements- nothing else
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div>
      <Octave notes={notes} onClick={handleClick} />
    </div>
  );
}

export default App;
