import React from "react";
import { NoteType } from "../helpers/helpers";
import Note from "./Note";
import { Wrapper } from "../styles/Octave.style";
import Volume from './Volume';
type Props = {
  //NoteType[] was made in helpers - {[key:string]: string}
  notes: NoteType[];
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  raiseVolume: (e: React.MouseEvent<HTMLButtonElement>) => void;
  lowerVolume: (e: React.MouseEvent<HTMLButtonElement>) => void;
  volume: number;
};

//Declare the functional component and the Props type from above
const Octave: React.FC<Props> = ({ notes, onClick, raiseVolume, lowerVolume, volume }) => {
  const note = notes.map((element: NoteType) => (
    //Note desc - if color is white/black return White/Black(style) with note - black works opposite
    
    <Note
      key={element.note}
      color={element.color}
      note={element.note}
      onClick={onClick}
    />
  ));

  return (
    <Wrapper>
      <div>
        {note}
      <Volume raiseVolume={raiseVolume} lowerVolume={lowerVolume} volume={volume}/>
      
      </div>
    </Wrapper>
  );
};

export default Octave;
