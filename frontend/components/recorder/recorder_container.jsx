import { connect } from 'react-redux';
import { startRecording, stopRecording } from '../../actions/track_actions';
import Recorder from './recorder';

const mapStateToProps = state => ({
  isRecording: state.isRecording,
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
