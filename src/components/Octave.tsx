import React from "react";
import { NoteType } from "../helpers/helpers";
import Note from "./Note";
import { Wrapper } from "../styles/Octave.style";

type Props = {
  //NoteType[] was made in helpers - {[key:string]: string}
  notes: NoteType[];
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

//Declare the functional component and the Props type from above
const Octave: React.FC<Props> = ({ notes, onClick }) => {
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
      <div>{note}</div>
    </Wrapper>
  );
};

export default Octave;
