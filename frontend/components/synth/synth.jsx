import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(noteName => (new Note(TONES[noteName])));
  }

  onKeyDown(e) {
    let key = e.key;
    this.props.keyPressed(key);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  onKeyUp(e) {
    let key = e.key;
    this.props.keyReleased(key);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes() {
    for (let i = 0; i < this.notes.length; i++) {
      if (this.props.notes.includes(NOTE_NAMES[i])) {
        this.notes[i].start();
      } else {
        this.notes[i].stop();
      }
    }
  }

  render() {
    this.playNotes();
    return (
      <div>
        <ul>
          {this.notes.map((note, idx) => <NoteKey key={idx} note={NOTE_NAMES[idx]} pressed={this.props.notes.includes(NOTE_NAMES[idx])}/>)}
        </ul>
      </div>
    );
  }
}

export default Synth;
