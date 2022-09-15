import { useState } from "react";
import { Counter } from "./Counter";

export function MovieList() {
  const movieList = [
    {
      name: "Vikrant Rona",
      poster:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4d9GdRX3OSCkWLGiJd-lWUGv5gnH6Wi8tGzPDN7iM0ql_LCKqFvkDt4jYHnAAn9bBTM9eyuOHwC9OH7_ZRwz2Zd2BjK7WcJYRym4nt5koZX2G-_FH6cauuXxVBexnMMePyejhcW7cSljkQSvMzpZRZlYFnKYqLAzjbMm_iNYvFmVWjdkd5YEnHHAB/s900/Vikrant-Rona-Poster-4.jpg",
      rating: 8.5,
      summary:
        "Almost half a century ago, a remote village in the middle of a tropical rainforest starts witnessing a series of unexplainable events which they attribute to the supernatural.",
    },
    {
      name: "Kartikeya 2",
      poster: "https://static.toiimg.com/photo/msid-93584721/93584721.jpg",
      rating: 8,
      summary:
        "The second franchise of mystic thriller narrates protagonist Karthikeya's pursuit of the truth. It leads him to find out the power of Indian ancient belief system and Tatva of Lord Sri Krishna.",
    },
    {
      name: "Sher Shivraj",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYmVmZGViYTQtNzEwMS00ODU1LWJjZjItMzc3YWY4ZDk1NTY3XkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg",
      rating: 9,
      summary:
        "Chhatrapati Shivaji Maharaj prepares an infallible counterattack strategy to deal with Afzal Khan, a ruthless general of the Adil Shahi dynasty of the Bijapur Sultanate",
    },
    {
      name: "RRR",
      poster:
        "https://stat1.bollywoodhungama.in/wp-content/uploads/2019/03/RRR-2022.jpeg",
      rating: 7,
      summary:
        "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
    },
    {
      name: "Shamshera",
      poster:
        "https://www.pinkvilla.com/imageresize/14e9cfc6-9760-48a6-b14e-d21e6c9b2e08.jpeg?format=jpg&width=900",
      rating: 6.5,
      summary:
        "In the city of Kaza, a slave fights tirelessly to free his deceitfully imprisoned warrior tribe from a ruthless general.",
    },
    {
      name: "Rocketry",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNzBkMTYwYjktMzFlZS00MmNhLTgxNjYtNGEwYjUxYTBlNjM5XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.5,
      summary:
        "East Indian aerospace engineer Nambi Narayanan makes enemies due to his genius and obsession, and he faces charges of espionage.",
    },
    {
      name: "The Kashmir Files",
      poster:
        "https://images.kooapp.com/transcode_input/2726126/5C65C2E7-EFDB-4A23-ABBA-E65CB9D7C360-image.jpeg",
      rating: 9,
      summary:
        "Krishna endeavours to uncover the reason behind his parents' brutal killings in Kashmir. He is shocked to uncover a web of lies and conspiracies in connection with the massive genocide.",
    },
    {
      name: "Pawankhinda",
      poster:
        "https://www.indianfilmhistory.com:3002/media/files_i/1644475992548mq5miwlwxc.jpg",
      rating: 9.5,
      summary:
        "On a dreadful night in 1660, Chhatrapati Shivaji Maharaj finds himself cornered in the Panhala fort by the Bijapur Sultanate. However, the Maratha commanders risk their lives to save their leader.",
    },
  ];
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
