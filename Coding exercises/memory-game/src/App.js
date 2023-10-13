import React from "react";
import Board from "./components/Board";

// Import images
import ElephantFace from "./assets/ElephantFace.jpg";
import ElephantHerd from "./assets/elephantHerd.jpg";
import Giraffe from "./assets/giraffe.jpg";
import GiraffeHerd from "./assets/giraffeHerd.jpg";
import Mongoose from "./assets/mongoose.jpg";
import MongooseFace from "./assets/mongooseFace.jpg";
import ZebraFace from "./assets/zebraFace.jpg";
import ZebraHerd from "./assets/zebraHerd.jpg";

const App = () => {
  const cards = [
    { value: ElephantFace, name: "A" },
    { value: ElephantHerd, name: "A" },
    { value: Giraffe, name: "B" },
    { value: GiraffeHerd, name: "B" },
    { value: Mongoose, name: "C" },
    { value: MongooseFace, name: "C" },
    { value: ZebraFace, name: "D" },
    { value: ZebraHerd, name: "D" },
  ];

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Board initialCards={cards} />
    </div>
  );
};

export default App;
