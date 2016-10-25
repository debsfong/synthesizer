import { combineReducers } from 'redux';
import notesReducer from './notes_reducer';
import recordingReducer from './is_recording_reducer';
import tracksReducer from './tracks_reducer';
import isPlayingReducer from './is_playing_reducer';

const rootReducer = combineReducers({ isPlaying: isPlayingReducer, notes: notesReducer, tracks: tracksReducer, isRecording: recordingReducer });

export default rootReducer;
