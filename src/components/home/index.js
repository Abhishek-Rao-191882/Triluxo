import React from "react";
import HomePage from "./home";
import Spacer from "./spacer";
import AboutUs from "./about-us";
import Services from "./services";

const Home = () =>{
    return(
        <div className="home-page">
        <Spacer/>
        <HomePage/>
        <AboutUs/>
        <Services/>
        </div>
    )
}

export default Home;