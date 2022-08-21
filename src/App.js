// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Greeting
        name="Darshan"
        proPic="http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/01/Best-Single-Boys-Whatsapp-Dp-Wallpaper.jpg"
        intro="Full Stack Developer"
      />
      <Greeting
        name="Surabhi"
        proPic="https://2.bp.blogspot.com/-hM5hDWlwVCQ/W4_V25OFXnI/AAAAAAAAPKA/uTt3Ag6RedQ-3NFXws_h1uKfMZFSPdxWQCLcBGAs/s1600/cute-girls-dp-download.jpg"
        intro="Doctor"
      />
      <Greeting
        name="Prafulla"
        proPic="https://wallpaperspeed.id/gallery/wallpaper/20220428/anime-boys-face-dp-whatsapp-wallpapers-wallpaper,best-anime-profile-pic-for-instagram-for-boy-preview.webp"
        intro="Mechanical Engineer"
      />
    </div>
  );
}

function Greeting({ name, proPic, intro }) {
  return (
    <div>
      <h1>Hello, {name} here😍🥳👋</h1>
      <img src={proPic} alt={name} />
      <h3>I am a {intro} </h3>
    </div>
  );
}
export default App;
