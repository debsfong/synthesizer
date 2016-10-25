import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const preloadedState = {
  notes: [],
  isRecording: false,
  tracks: {}
};

const configureStore = () => (
  createStore(rootReducer, preloadedState)
);

export default configureStore;
