import { useState } from "react";

// function Greeting({ name, proPic, intro }) {
//   return (
//     <div className="center">
//       <h1>Hello, {name} hereππ₯³π</h1>
//       <img src={proPic} alt={name} />
//       <h3>I am a {intro} </h3>
//       <Counter />
//     </div>
//   );
// }
export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  let styles = {
    color: like >= 20 ? "green" : "red",
  };
  return (
    <div>
      {like >= 10 ? (
        <h3 style={styles} className="winning-condition">
          You Won ππ₯³π₯³
        </h3>
      ) : null}
      <progress
        max="100"
        value={(like / (like + dislike)) * 100 || 0}
        className="progress-bar"
      ></progress>
      <div className="buttons">
        <button onClick={() => setLike(like + 1)} className="like-button">
          {" "}
          π {like}
        </button>
        <button
          onClick={() => setDislike(dislike + 1)}
          className="dislike-button"
        >
          π {dislike}
        </button>
      </div>
    </div>
  );
}
