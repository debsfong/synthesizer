import { START_RECORDING, STOP_RECORDING } from '../actions/track_actions';

const recordingReducer = (oldState = false, action) => {
  console.log("made it to recording reducer");
  Object.freeze(oldState);
  switch (action.type) {
    case START_RECORDING:
      return true;
    case STOP_RECORDING:
      return false;
    default:
      return oldState;
  }
};

export default recordingReducer;
