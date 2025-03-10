import React from "react";
import Hero from "./Hero";
import Main from "./Main";
import Menu from "./InitialMenu";
import Reviews from "./Reviews";
import Location from "./Location";
import Navbar from "../Nav/Navbar";

const Home: React.FC = () => {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <div className="second">
              <Main/>
            </div>
            <div className="third">
              <Menu />
            </div>
            <div className="fourth" id="reviews">
              <Reviews></Reviews>
            </div>
            <div className="fifth" id="location">
              <Location/>
            </div>
        </div>
    );
};

export default Home;