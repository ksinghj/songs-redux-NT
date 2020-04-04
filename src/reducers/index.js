import { combineReducers } from "redux";
import "../actions";

export const songsReducer = (
  state = [{ title: "song" }, { title: "testing in reducer" }],
  action
) => {
  switch (action.type) {
    case "SONG_ADDED":
      return [...state, action.payload];
    default:
      return state;
  }
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
