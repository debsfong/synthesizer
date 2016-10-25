import React from 'react';

const NoteKey = ({note, pressed}) => (
  <li className={ pressed ? "pressed" : "unpressed" }>{note}</li>
);

export default NoteKey;
