import React, { useEffect } from "react";
import CardData from "./CardData";
function Cards() {
  [memeImage, setMemeImahe] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImahe(url);
  };
  return (
    <div>
      <button onClick={myRandomEmg}>Get a new image</button>
      <img src={memeImage}></img>
    </div>
  );
}

export default Cards;
