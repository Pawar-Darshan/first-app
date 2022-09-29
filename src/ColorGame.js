import { useState } from "react";
import Button from "@mui/material/Button";

export function ColorGame() {
  const [color, setColor] = useState("orange");
  const styles = {
    background: color,
  };

  const [colorList, setColorList] = useState(["Orange", "Crimson", "Red"]);
  return (
    <div>
      <input
        type="text"
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
      />
      <button
        onClick={() => {
          setColorList([...colorList, color]);
        }}
      >
        Add Color
      </button>
      <Button variant="contained">Contained</Button>
      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
function ColorBox({ color }) {
  const styles = {
    height: "25px",
    width: "250px",
    background: color,
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
