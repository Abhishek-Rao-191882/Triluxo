import React from "react";
import Icon from '../../media/logo.png';

const Services = () => {
  return (
    <div className="services">
    <div className="services-container">
      <div className="box1">
      <h1> Services </h1>
      <div className="line"></div>
      <p>
        Our services are customized to meet the needs of each student. Our
        tutors are Ontario Certified Teachers who apply their skills and
        knowledge to provide expert tutoring support. For optimal delivery and
        to reinforce student learning, One-On-One sessions are booked 2x/week.
      </p>
      </div>
      <div className="box2">
         <div className="left">
           <div className="box3">
             <div className="icon">
               <img src={Icon} alt="background-img"/>
             </div>
             <div className="content">
               <div className="title">
                 <h1>Math</h1>
               </div>
               <div className="discription">
                 <p>By focusing on both procedural and conceptual foundational knowledge, our Intermediate Math program starts at the beginning of the Ontario curriculum and builds towards proficiency.
                 <br/><br/> $85/hr/session x 2 sessions per week</p>
               </div>
             </div>
           </div>
           <div className="box3">
             <div className="icon">
               <img src={Icon} alt="background-img"/>
             </div>
             <div className="content">
               <div className="title">
                 <h1>Language</h1>
               </div>
               <div className="discription">
                 <p>English language competency is an essential skill for the 21st century learner. Our Intermediate Language program consolidates the knowledge, skills, and strategies students have already gained during their primary/junior years and builds towards proficiency.
                 <br/><br/> $85/hr/session x 2 sessions per week</p>
               </div>
             </div>
           </div>
         </div>
         <div className="right">
           <img src={Icon} alt="background-img"/>
         </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
