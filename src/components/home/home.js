import React from "react";
import {Parallax} from 'react-parallax';
import BackGround from '../../media/home-background.jpeg';
const HomePage = () =>{
    return(
        <>
        <div className="home">
        {/* <Parallax bgImage={BackGround} style={{height:'77vh', width:'100%'}} strength={800}> */}
           <div className="home-main-container">
            <h1>Refined Minds</h1>
            <h3>Online Tutoring Company</h3>
            <button className="button-lets-discuss">Let's Discuss</button>
            <span>or</span>
            <button className="button-book-now">Book now</button>
           </div>
        {/* </Parallax> */}
        </div>
        </>
    )
}

export default HomePage;