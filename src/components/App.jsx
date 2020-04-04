import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import AddSong from "./AddSong";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "2em" }}>
      <AddSong />
      <SongList />
      <SongDetail />
    </div>
  );
};

export default App;
