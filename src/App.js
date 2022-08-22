// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let personDetails = [
    {
      name: "Darshan",
      proPic:
        "http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/01/Best-Single-Boys-Whatsapp-Dp-Wallpaper.jpg",
      intro: "Full Stack Developer",
    },
    {
      name: "Surabhi",
      proPic:
        "https://2.bp.blogspot.com/-hM5hDWlwVCQ/W4_V25OFXnI/AAAAAAAAPKA/uTt3Ag6RedQ-3NFXws_h1uKfMZFSPdxWQCLcBGAs/s1600/cute-girls-dp-download.jpg",
      intro: "Doctor",
    },
    {
      name: "Prafulla",
      proPic:
        "https://wallpaperspeed.id/gallery/wallpaper/20220428/anime-boys-face-dp-whatsapp-wallpapers-wallpaper,best-anime-profile-pic-for-instagram-for-boy-preview.webp",
      intro: "Mechanical Engineer",
    },
  ];
  return (
    <div>
      {personDetails.map(({ name, proPic, intro }) => (
        <Greeting name={name} proPic={proPic} intro={intro} />
      ))}
    </div>
  );
}

function Greeting({ name, proPic, intro }) {
  return (
    <div className="center">
      <h1>Hello, {name} here😍🥳👋</h1>
      <img src={proPic} alt={name} />
      <h3>I am a {intro} </h3>
      <Counter />
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      <progress max="100" value={(like / (like + dislike)) * 100}></progress>
      <button onClick={() => setLike(like + 1)}> 👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}

export default App;
