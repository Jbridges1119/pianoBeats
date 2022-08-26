import React from 'react'
import { Black, White } from './styles/Note.style';




type Props = {
  color:string;
  note: string;

}


const Note: React.FC<Props> = ({color, note}) => (
  color === 'white' ? <White value={note} /> : <Black value={note} />
)

export default Note