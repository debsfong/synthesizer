export const START_RECORDING = "START_RECORDING";
export const STOP_RECORDING = "STOP_RECORDING";
export const ADD_NOTES = "ADD_NOTES";

export const startRecording = () => ({
  type: START_RECORDING
});

export const stopRecording = () => ({
  type: STOP_RECORDING
});

export const addNotes = (notes) => ({
  type: ADD_NOTES,
  notes,
  timeNow: Date.now()
});
