import React from "react";
import { NoteType } from "./helpers";
import Note from "./Note";
import { Wrapper } from "./styles/Octave.style";

type Props = {
  //This was made in helpers - {[key:string]: string}
  notes: NoteType[];
};

//Declare the functional component and the Props type from above
const Octave: React.FC<Props> = ({ notes }) => {
  const note = notes.map((element: NoteType) => (
    //Note desc - if color is white/black return White/Black(style) with note - black works opposite
    <Note key={element.note} color={element.color} note={element.note} />
  ));

  return (
    <Wrapper>
      <div>{note}</div>
    </Wrapper>
  );
};

export default Octave;
