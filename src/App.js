import './App.css';
import React from "react";
import Header from "./Components/Header";
import FirstSlide from "./Components/FirstSlide";
import GreenBox from "./Components/GreenBox";
import Main1 from "./Components/Main1";
import Vector from "./Components/Vector";
import Main2 from "./Components/Main2";
import Courses from "./Components/Courses";
import Green2 from "./Components/Green2";
import Packages from "./Components/Packages";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="bg-gray-50">
            <Header/>
            <FirstSlide/>
            <GreenBox/>
            <Main1/>
            <Vector/>
            <Main2/>
            <Courses/>
            <Green2/>
            <Packages />
            <Footer />
        </div>
    )
}

export default App;
