import React from "react";
import { Link } from "react-router-dom";
import Slideshow from "../components/Slider-About";
import profilePic from "../images/LI_Pic.jpeg"

const About = () => {

  return (
    <div className="aboutDiv">
          <h1>Sea Patrols and Software Goals: Charting a New Course in Tech</h1>
      <p className="aboutParagraph">
        I joined the U.S. Coast Guard in 1999 and served as a  <a target="_blank" href="https://www.cool.osd.mil/uscg/moc/index.html?moc=gm&tab=overview">Gunner's Mate</a>.
        I advanced to <a target="_blank" href="https://en.wikipedia.org/wiki/Senior_chief_petty_officer#:~:text=Senior%20chief%20petty%20officer%20is,formally%2C%20as%20%22Senior%22.">Senior Chief Petty Officer</a> (E-8) and retired from active duty in 2022 as a <a target="_blank" href="https://www.cool.osd.mil/uscg/moc/index.html?moc=cg_csel&tab=overview">Command Senior Enlisted Leader</a>.       
        While in the Coast Guard, I earned many certifications and an <a target="_blank" href="https://www.uagrantham.edu/online-degrees/business-administration-management-associate-arts/">Associate of Arts in Business Management</a> from the University of Arkansas Grantham.
        When I retired, I completed a full-stack software engineering program with <a target="_blank" href="https://www.galvanize.com/military/">Galvanize</a> and was hired as a software engineer immersive resident after graduating - a temporary opportunity that only the top three students get to help teach other cohorts.
        To be more efficient and effecitive at working with cross-functional teams, I became a <a target="_blank" href="https://www.scrum.org/assessments/professional-scrum-master-i-certification">Certified Professional Scrum Master</a>. Aspiring to do more with my skills, I returned to college at Penn State where I am purusing a <a target="_blank" href="https://www.worldcampus.psu.edu/degrees-and-certificates/penn-state-online-business-bachelor-of-science-degree">Bachelor's of Science in Business</a>, specializing in Managment and Marketing. I will also be earning a <a target="_blank" href="https://www.worldcampus.psu.edu/degrees-and-certificates/penn-state-online-enterprise-resource-planning-with-sap-undergraduate-certificate">Enterprise Resource Planning with SAP (SCM)</a> certificate.
        When I learned to appreciate the power of data and automation, my goal turned to becoming an ERP product manager.
        </p>     
        <h1>Personal Life</h1>
        <p className="aboutParagraph">
        I love spending time my family - especially golfing and fishing! And of course, NCAA football is a staple in our house, although I'm outnumbered... My wife is a Michigan State graduate, which also happens to be my daughter's number one pick for college. 
        
        </p>
          </div>
  );
};
export default About;
