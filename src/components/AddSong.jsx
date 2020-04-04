import React from "react";
import { connect } from "react-redux";
import { addSong } from "../actions";

class AddSong extends React.Component {
  state = { title: { title: null } };

  addSong = (e) => {
    e.preventDefault();
    this.props.addSong(this.state);
  };

  handleInputChange = (e) => {
    this.setState({ title: e.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.addSong} className="ui form">
        <div className="ui input"></div>
        <input
          onChange={this.handleInputChange}
          type="text"
          placeholder="Add a song!"
        />
        <button className="ui button">Add</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addSong: state.addSong,
  };
};

export default connect(mapStateToProps, { addSong })(AddSong);
