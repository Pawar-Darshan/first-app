import { useState } from "react";
import { Counter } from "./Counter";

export function MovieList({ movieList }) {
  return (
    <div className="movie-list">
      {movieList.map((mv, index) => (
        <Movie key={index} movie={mv} />
      ))}
    </div>
  );
}
function Movie({ movie }) {
  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
  };

  let [show, setShow] = useState(true);

  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-spec">
        <h2 className="movie-name">{movie.name}</h2>
        <p className="movie-rating" style={styles}>
          🌟{movie.rating}
        </p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle Summary</button>
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}
