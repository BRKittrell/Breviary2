import React from "react";
import { Link } from "react-router-dom";
import Slideshow from "../components/Slider-About";
import profilePic from "../images/LI_Pic.jpeg"

const About = () => {

  return (
    <div className="aboutDiv">
          <h1>Professional and Education Summary</h1>
      <p className="aboutParagraph">
        I joined the U.S. Coast Guard in 1999 and served as a  <a target="_blank" href="https://www.cool.osd.mil/uscg/moc/index.html?moc=gm&tab=overview">Gunner's Mate</a>.
        I advanced to Senior Chief Petty Officer (E-8) and retired from active duty in 2022 as a <a target="_blank" href="https://www.cool.osd.mil/uscg/moc/index.html?moc=cg_csel&tab=overview">Command Senior Enlisted Leader</a>.       
        While in the Coast Guard, I earned many certifications and an Associate of Arts in Business Management from the University of Arkansas Grantham.
        When I retired, I completed a full-stack software engineering program with Galvanize and was hired as a software engineer immersive resident after graduating - a temporary opportunity that only the top three students get to help teach other cohorts.
        To be more efficient and effecitive at working with cross-functional teams, I became a Certified Professional Scrum Master. Aspiring to do more with my skills, I returned to college at Penn State where I am purusing a Bachelor's of Science in Business, specializing in Managment and Marketing. I will also be earning a SAP SCM Enterprise Resource Planning certificate.
        When I learned to appreciate the power of data and automation, my became being a SaaS product manager.
        </p>     
        <h1>Personal Life</h1>
        <p className="aboutParagraph">
        I love spending time my family - especially golfing and fishing! And of course, NCAA football is a staple in our house, although I'm outnumbered... My wife is a Michigan State graduate, which also happens to be my daughter's number one pick for college. 
        
        </p>
          </div>
  );
};
export default About;
