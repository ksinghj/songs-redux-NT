import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (selectedSong) {
    return <div>selectedSong: {selectedSong.title}</div>;
  }
  return <div>No song selected</div>;
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps, {})(SongDetail);
