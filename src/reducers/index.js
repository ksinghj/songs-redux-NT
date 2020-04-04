import { combineReducers } from "redux";
import "../actions";

export const songsReducer = (state = [{ title: "song" }], action) => {
  switch (action.type) {
    case "SONG_ADDED":
      return [...state, action.song];
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
