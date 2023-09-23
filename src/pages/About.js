import React from "react";
import { Link } from "react-router-dom";
import Slideshow from "../components/Slider-About";
import profilePic from "../images/LI_Pic.jpeg"

const About = () => {

  return (
    <div className="aboutDiv">
          <h1>Professional Life</h1>
      <p className="aboutParagraph">
        I joined the U.S. Coast Guard in 1999 and served in Alaska, Texas, California, Virginia, Michigan, and Ohio.
        I advanced to Senior Chief Petty Officer (E-8) in 2015 and retired from active duty in 2022 after 23 years.
        While in the Coast Guard, I earned many certifications and an Associate of Arts in Business Management.
        When I retired, I completed a full-stack software engineering bootcamp and returned to college (Penn State) in pursuit of a Bachelors of Science in Marketing.
        I aspire to be a Product Manager in the future. <Link to="personal">See more.</Link>
        </p>     
        <h1>Personal Life</h1>
        <p className="aboutParagraph">
        I met my wife in Ireland in 2003 while on a deployment. We were married at the Marblehead, OH lighthouse in 2004.
        In 2006, my daughter was born at the Balboa Naval Hospital in San Diego, CA. 
        We love to golf (My daughter plays on Junior PGA tour!), watch college football, and fishing. <Link to="personal" >See more.</Link>
        </p>
          </div>
  );
};
export default About;
