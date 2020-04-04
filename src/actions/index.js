export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

export const addSong = (song) => {
  console.log("Song Added");
  return {
    type: "SONG_ADDED",
    payload: song,
  };
};
