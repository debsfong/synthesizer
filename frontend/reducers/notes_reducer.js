import KEY_PRESSED from '../actions/notes_actions.js';
import KEY_RELEASED from '../actions/notes_actions.js';
import NOTE_NAMES from '../util/tones';

const notesReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case KEY_PRESSED:
      if (oldState.includes(action.key) || !NOTE_NAMES.includes(action.key)) {
        return oldState;
      } else {
        return [...oldState, action.key];
      }
    case KEY_RELEASED:
      if (oldState.includes(action.key)) {
        let idx = oldState.indexOf(action.key);
        return [...oldState.slice(0, idx), ...oldState.slice(idx+1)];
      } else {
        return oldState;
      }
    default:
      return oldState;
  }
};

export default notesReducer;
