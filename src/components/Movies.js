import React, { Component } from "react";
import Movie from "./Movie";
import MovieConsumer from "./MovieContext";
export default class Movies extends Component {
  render() {
    return (
      <MovieConsumer>
        {(state) => {
          const { users } = state;
          return (
            <div>
              {users.map((movie) => (
                <Movie key={movie.id} id={movie.id} name={movie.name} />
              ))}
            </div>
          );
        }}
      </MovieConsumer>
    );
  }
}
