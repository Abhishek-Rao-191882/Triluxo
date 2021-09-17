import React from "react";
import BackGround1 from '../../media/home-background.jpeg';
import {Parallax, Background} from 'react-parallax';

const AboutUs = () => {
  return (
    <div className="about-us" id="about">
      <div className="about-us-container">
      
       <div className="content">
        <h2>About Us</h2>
        <div className="line"></div>
        <p>
          Refined Minds is an online tutoring company specializing in
          Intermediate grades (7 & 8) numeracy and literacy. We focus on
          improving student learning through the use of diagnostic assessments,
          targeted programming, and differentiated instruction that is fully
          aligned with the Ontario Ministry of Education Curriculum.
        </p>
        </div>
        {/* <Parallax strength={300}> */}
        <div className="icon">
          <img src={BackGround1}  alt="background"/>
        </div>
        {/* </Parallax> */}
      </div>
      {/* <Parallax  bgImage={BackGround1} strength={800}> */}
      <div className="main-container">
        <div className="box1">
        <div className="content">
            <div className="icon">
            </div>
            <div className="title">
                <h1>Our Philosophy</h1>
            </div>
            <div className="discription">
                <p>"Teaching our students about the world they will inherit, and inspiring them to change it!"—RP</p>
            </div>
        </div>
        </div>
        <div className="box1">
        <div className="content">
            <div className="icon">
            </div>
            <div className="title">
                <h1>Our Philosophy</h1>
            </div>
            <div className="discription">
                <p>"Teaching our students about the world they will inherit, and inspiring them to change it!"—RP</p>
            </div>
        </div>
        </div>
        <div className="box1">
        <div className="content">
            <div className="icon">
            </div>
            <div className="title">
                <h1>Our Philosophy</h1>
            </div>
            <div className="discription">
                <p>"Teaching our students about the world they will inherit, and inspiring them to change it!"—RP</p>
            </div>
        </div>
        </div>
        <div className="box1">
        <div className="content">
            <div className="icon">
            </div>
            <div className="title">
                <h1>Our Philosophy</h1>
            </div>
            <div className="discription">
                <p>"Teaching our students about the world they will inherit, and inspiring them to change it!"—RP</p>
            </div>
        </div>
        </div>
      </div>
      {/* </Parallax> */}
      <div className="icon1">
          <img src={BackGround1}  alt="background"/>
      </div>
    </div>
  );
};

export default AboutUs;
