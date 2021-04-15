import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "🍓": "Strawberry",
  "🍌": "Banana",
  "🥝": "Kiwi Fruit",
  "🍕": "Pizza",
  "🥥": "Coconut",
  "🥦": "Broccoli",
};

const emojisWeKnow = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("");

  const emojiInputHandler = (event) => {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }
    setMeaning(meaning);
  };

  const emojiClickHandler = (emoji) => {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>EMOJI INTERPRETER</h1>
      <input onChange={emojiInputHandler} />
      <div className="meaning">The meaning of this emoji is {meaning}</div>
      <h3 style={{ padding: "10px" }}>emojis we know: </h3>
      {emojisWeKnow.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          key={emoji}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}

export default App;
