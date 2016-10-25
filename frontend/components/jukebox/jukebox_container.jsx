import { connect } from 'react-redux';
import { startPlaying, stopPlaying } from '../../actions/playing_actions';
import { groupUpdate } from '../../actions/notes_actions';
import { Jukebox } from './jukebox';

const mapStateToProps = state => ({
  tracks: state.tracks,
  isRecording: state.isRecording,
  isPlaying: state.isPlaying
});

const mapDispatchToProps = dispatch => ({
  onPlay: track => e => onPlay(track)(e)
  }
});

const onPlay = track => e => {
  dispatch(startPlaying());
  let playbackStartTime = Date.now();
  let currNotes = 0;
  let timeElapsed;
  let interval = setInterval(() => {
    if (currNotes < track.roll.length ) {
      if ((Date.now() - playBackStartTime) > track.roll[currNotes].)
      dispatch(groupUpdate(track.roll[currNotes].notes));
    }
  }, 1);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);
