import React from 'react'
import {NoteType} from './helpers'
import Note from './Note'

type Props = {
  //This was made in helpers - {[key:string]: string}
  notes: NoteType[]
}

//Declare the functional component and the Props type from above
const Octave: React.FC<Props> = ({notes}) => {
  const note = notes.map((elemnt: NoteType) => (
    <Note />
  ))


  return (
    <div>
      {note}
    </div>
  )
}

export default Octave