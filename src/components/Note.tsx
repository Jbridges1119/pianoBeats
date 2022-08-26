import React from "react";
import { Black, White } from "../styles/Note.style";

type Props = {
  color: string;
  note: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Note: React.FC<Props> = ({ color, note, onClick }) =>
  color === "white" ? (
    <White value={note} onClick={onClick} />
  ) : (
    <Black value={note} onClick={onClick} />
  );

export default Note;
