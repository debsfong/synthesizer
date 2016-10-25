import { ADD_NOTES, START_RECORDING, STOP_RECORDING } from '../actions/track_actions';
import merge from 'lodash/merge';

var currTrackId = 0;

const tracksReducer = (oldState = {}, action) => {
  console.log("made it to tracks reducer");
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case START_RECORDING:
      currTrackId++;
      newState = {};
      newState[currTrackId] = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: Date.now()
      };
      return merge(newState, oldState);
    case STOP_RECORDING:
      newState = merge({}, oldState);
      newState[currTrackId].roll.push({
        notes: [],
        timeslice: action.timeNow - oldState[currTrackId].timeStart
        });
      return newState;
    case ADD_NOTES:
      newState = merge({}, oldState);
      newState[currTrackId].roll.push({
        notes: action.notes,
        timeslice: action.timeNow - oldState[currTrackId].timeStart
        });
      return newState;
    default:
      return oldState;
  }
};


export default tracksReducer;
