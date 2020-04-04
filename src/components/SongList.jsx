import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    const { songs } = this.props;
    return songs.map((song) => {
      return (
        <div>
          <div>{song.title}</div>
          <button onClick={() => this.props.selectSong(song)}>
            Select song
          </button>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
