import React, { Component } from "react";
export const MovieContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };

    default:
      return state;
  }
};
export class MovieProvider extends Component {
  state = {
    users: [
      { id: "1", name: "LOTR" },
      { id: "2", name: "RTOL" },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <MovieContext.Provider value={this.state}>
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}
const MovieConsumer = MovieContext.Consumer;
export default MovieConsumer;
