import './App.css';
import React from "react";
import Header from "./Components/Header";
import FirstSlide from "./Components/FirstSlide";
import GreenBox from "./Components/GreenBox";
import Main1 from "./Components/Main1";
import Vector from "./Components/Vector";
import Main2 from "./Components/Main2";
import Courses from "./Components/Courses";

function App() {
  return (
    <div>
      <Header />
      <FirstSlide />
      <GreenBox />
      <Main1 />
      <Vector />
      <Main2 />
      <Courses />
    </div>
  )
}

export default App;
