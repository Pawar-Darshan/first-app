// import logo from "./logo.svg";
import "./App.css";
import { ColorGame } from "./ColorGame";
import { MovieList } from "./MovieList";
import { Age } from "./Temp.js";

function App() {
  // let personDetails = [
  //   {
  //     name: "Darshan",
  //     proPic:
  //       "http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/01/Best-Single-Boys-Whatsapp-Dp-Wallpaper.jpg",
  //     intro: "Full Stack Developer",
  //   },
  //   {
  //     name: "Surabhi",
  //     proPic:
  //       "https://2.bp.blogspot.com/-hM5hDWlwVCQ/W4_V25OFXnI/AAAAAAAAPKA/uTt3Ag6RedQ-3NFXws_h1uKfMZFSPdxWQCLcBGAs/s1600/cute-girls-dp-download.jpg",
  //     intro: "Doctor",
  //   },
  //   {
  //     name: "Prafulla",
  //     proPic:
  //       "https://wallpaperspeed.id/gallery/wallpaper/20220428/anime-boys-face-dp-whatsapp-wallpapers-wallpaper,best-anime-profile-pic-for-instagram-for-boy-preview.webp",
  //     intro: "Mechanical Engineer",
  //   },
  // ];
  return (
    <div>
      {/* {personDetails.map(({ name, proPic, intro }) => (
        <Greeting name={name} proPic={proPic} intro={intro} />
      ))} */}
      <MovieList />
      <ColorGame />
      <Age />
    </div>
  );
}

export default App;
