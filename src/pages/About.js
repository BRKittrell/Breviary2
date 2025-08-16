import React from "react";
import { Link } from "react-router-dom";
import hello from "../images/hello.png"
import Slideshow from "../components/Slider-About";
import nauticalChart from "../images/nauticalChart.png"

const About = () => {

  return (
    <div className="aboutDiv">
      <img className="internship" src={hello}/>
        <p className="aboutParagraph">
        <em><color></color>I am seeking an internship</em> for my capstone beginning in the Spring 2026 semester. 
        Product management, supply chain operations or management, and business analytics are preferred, but I have a growth mindset and can adapt to any opportunity.
        </p>
      <details>
      <summary>Professional Life: Beyond the Resume</summary>
        <img id="nauticalChart" src={nauticalChart}/>
        <article>
      <h1>Sea Patrols and Software Goals: Charting a New Course in Tech</h1>
        <p className="aboutParagraph">
        I joined the U.S. Coast Guard in 1999, advanced to <a target="_blank" href="https://en.wikipedia.org/wiki/Senior_chief_petty_officer#:~:text=Senior%20chief%20petty%20officer%20is,formally%2C%20as%20%22Senior%22.">Senior Chief</a> (E-8), and retired from active duty in 2022 as a <a target="_blank" href="https://www.cool.osd.mil/uscg/moc/index.html?moc=cg_csel&tab=overview">Command Senior Enlisted Leader</a>.       
        While in the Coast Guard, I earned an <a target="_blank" href="https://www.uagrantham.edu/online-degrees/business-administration-management-associate-arts/">A.A. in Business Management</a> from the University of Arkansas (Grantham).
        Much of my 23-year career was in data analysis and business operations. I taught myself how to build tools in Microsoft Excel and Access to manipulate raw data and turn it into useful information.
        When I retired, I completed a full-stack software engineering program with <a target="_blank" href="https://www.galvanize.com/military/">Galvanize</a> to learn to build customized solutions.
        I loved building something unique and discovered that my passion was in product management. My skills and experience paired well with Agile methodologies, and I was good at leading cross-functional teams and software projects from initiation to closure.
        I took the next obvious step, becoming a <a target="_blank" href="https://www.scrum.org/assessments/professional-scrum-master-i-certification">Certified Professional Scrum Master</a>. 
        My next milestone is completing a <a target="_blank" href="https://www.worldcampus.psu.edu/degrees-and-certificates/penn-state-online-business-bachelor-of-science-degree">B.S. in Business</a>, specializing in Management and Marketing, and I will graduate from Penn State in May 2026.
        I am motivated by continuous learning, innovation, and sharing knowledge.
        </p>

      <h1>1999-2001: Coast Guard Station South Padre Island</h1>
          <div className="skillscontainer">
            <div className="skillsdiv">
              <h2>Responsibilities</h2>
                <li>Boarding Team Member</li>
                <li>Communications Watch Stander</li>
                <li>Boat Crew Member</li>
            </div>
            <div className="skillsdiv">
              <h2>Missions</h2>
                <li>Search and Rescue</li>
                <li>Counter-Drug Interdiction</li>
                <li>Migrant Interdiction</li>
            </div>
          </div>
          <h2>Most memorable experience</h2>
          <p className="aboutParagraph">
          I saved my first life when a young boy got swept out to sea by the rip current. 
            His older sister tried to help, but was also swept away.
            A good samaratin tried to help them both, but also got swept away.
            My crew when the station got the call.
            We went into the surf with our 27' boat. Although against policy, it was a reasonable risk.
            I cast the heaving line and hauled all three of the exhausted swimmers on board.
          </p>

        </article>
      </details>
      <details>
        <summary>Personal Life</summary>
        <img src="https://drive.google.com/uc?export=view&id=1Opu8770D1SLIrf8J3BWAwlOV17wk5Jjf"/>

        <p className="aboutParagraph">
        I grew up in Deep East Texas and played baseball from the time I could swing a bat. 
        I met my wife in Ireland while on an Operation Iraqi Freedom deployment.
        My daughter, an only child was born in 2006.
        My family comes first. We love golfing and cruising, in addition to dry camping and overlanding -- usually at the same time. 
        NCAA sports are a staple in our family. My wife is a Michigan State and Ohio State graduate, and my daughter is in a sorority at the University of Alabama where she is majoring in marketing.

        </p>

      </details>
          </div>
  );
};
export default About;
