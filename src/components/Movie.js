import React, { Component } from "react";
import MovieConsumer from "./MovieContext";
import pose from "react-pose";
const Animation = pose.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

export default class Movie extends Component {
  state = {
    visible: true,
  };
  onDeleteUser = (dispatch, e) => {
    const { id } = this.props;
    dispatch({ type: "DELETE_USER", payload: id });
  };
  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    const { id, name } = this.props;
    const { visible } = this.state;
    return (
      <MovieConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn btn-danger"
                    onClick={this.changeVisibility}
                  >
                    {this.state.visible ? "Visible" : "Hidden"}
                  </button>
                  <i
                    style={{ cursor: "pointer" }}
                    onClick={this.onDeleteUser.bind(this, dispatch)}
                    className="fas fa-trash-alt"
                  ></i>

                  <h4>ID : {id}</h4>
                </div>
                <Animation pose={visible ? "visible" : "hidden"}>
                  <div className="card-body">
                    <li>{name}</li>
                    <li>{name}</li>
                    <li>{name}</li>
                    <li>{name}</li>
                    <li>{name}</li>
                    <li>{name}</li>
                  </div>
                </Animation>
              </div>
            </div>
          );
        }}
      </MovieConsumer>
    );
  }
}
