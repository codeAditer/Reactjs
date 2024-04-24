import { useEffect, useState } from "react";
import "./style.css";
export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtiliy = (length) => Math.floor(Math.random() * length );
 
  function handleCreateRandomHexColor(){
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
     let hexColor = "#";

     for(let i=0 ;i<6 ;i++){
        hexColor +=hex[randomColorUtiliy(hex.length)];
      }
      setColor(hexColor);
} 

function  handleCreateRandomRgbColor(){
    const r  = randomColorUtiliy(256);
    const g  = randomColorUtiliy(256);
    const b = randomColorUtiliy(256);

    setColor(`rgb(${r},${g},${b})`);
    
}

useEffect(() =>{
    if(typeOfColor === "rgb")handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
},[typeOfColor]);

  
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        boxSizing: "border-box",
      }}
    >
      <span className="btn-section">
        <button onClick={() => setTypeOfColor("hex")} className="btn">Create HEX color</button>
        <button onClick={() => setTypeOfColor("rgb")} className="btn">Create RGB Color</button>
        <button 
        onClick={
            typeOfColor ==="hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor
        } className="btn">GENERATE RANDOM COLOR</button>
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h2>{color}</h2>
      </div>
      
    </div>
  );
}
