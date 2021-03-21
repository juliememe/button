import React, { useState } from "react";
import "./button.css";

export default function ChangeButton() {
  const WORDS = ["LOVE", "SMILE", "SUN", "HUG", "HAPPINNES", "TRAVELING"];
  const [title, setTitle] = useState("Push to Magic!");
  const getRandomNum = () => {
    const min = 0;
    const max = 256;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const [bgColor, setBgColor] = useState(
    `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()}, ${Math.floor(
      Math.random() * 10
    )})`
  );

  const createRandomColor = () => {
    return setBgColor(
      `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()}, ${Math.floor(
        Math.random() * 10
      )})`
    );
  };

  const getRandomWord = () => {
      let index = Math.floor((Math.random() * WORDS.length));
      console.log(index);
    setTitle(WORDS[index]);

  };

  const changeBackGroundColor = () => {
    createRandomColor();
    document.body.style.backgroundColor = bgColor;
    getRandomWord();

  };

  return (
    <button
      className="change_button"
      onClick={changeBackGroundColor}
      style={{ color: bgColor }}

    >
      {title}
    </button>
  );
}
