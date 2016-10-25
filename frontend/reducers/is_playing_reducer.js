import { START_PLAYING, STOP_PLAYING } from '../actions/playing_actions';

const isPlayingReducer = (oldState = false, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case START_PLAYING:
      return true;
    case STOP_PLAYING:
      return false;
    default:
      return oldState;
  }
};

export default isPlayingReducer;
