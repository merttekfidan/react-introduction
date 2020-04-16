import React, { Component } from "react";
import posed from "react-pose";
const Animation = posed.div({
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
export default class AddMovie extends Component {
  state = {
    visible: true,
  };
  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    const { visible } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <button onClick={this.changeVisibility}>
          {visible ? "hide form" : "show form"}
        </button>
        <Animation pose={visible ? "visible" : "hidden"}>
          <div className="card">
            <div className="card-header">
              <h4> Add Movie</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Enter movie Name"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="id">ID</label>
                  <input
                    className="form-control"
                    name="id"
                    placeholder="Enter ID"
                  ></input>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary" type="submit">
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Animation>
      </div>
    );
  }
}
