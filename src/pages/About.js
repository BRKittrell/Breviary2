import React from "react";
import { Link } from "react-router-dom";
import hello from "../images/hello.png"
import Slideshow from "../components/Slider-About";
import nauticalChart from "../images/nauticalChart.png"
import fishingAK from "../images/fishingAK.jpeg"
import familyGameDay from "../images/familyGameDay.jpeg"
import finalFourRd1 from "../images/finalFourRd1.jpg"
import Roo from "../images/Roo.jpeg"
import jeep2 from "../images/jeep2.jpeg"
import AOII from "../images/AOII.jpeg"
import rooAndKenai from "../images/rooAndKenai.jpeg"
import RickieFowler from "../images/RickieFowler.jpeg"
import OIF from "../images/OIF.jpeg"
import d9 from "../images/d9.JPG"
import edisto from "../images/edisto.jpg"
import acushnet from "../images/acushnet.jpg"

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

      {/* Station SPI */}
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
          <h2>Memories and Reflections</h2>
          <p className="aboutParagraph">
          I saved my first life. A young boy got caught in a rip current and was dragged under. His sister went in after him, but the current swallowed her too. A bystander tried to rescue them, only to be pulled out to sea himself. We got the call and launched our 27-foot boat. We could not get to them without going into the surf, although against policy. The waves crashed hard, but the risk was worth taking. I threw the heaving line with everything I had. It took all my strength to haul the boy, his sister, and the exhausted Samaritan onto the deck. When making calculated decisions, courage and judgment can be more important than following a rulebook.
          </p>
      {/* MSO & PSU */}
      <h1>2002-2004: Marine Safety Office Hampton Roads & Port Security Unit 309</h1>
      <img className="personalPics" src={OIF}/>
          <div className="skillscontainer">
            <div className="skillsdiv">
              <h2>Responsibilities</h2>
                <li>Boarding Team Member</li>
                <li>Armorer</li>
                <li>Machine Gunner</li>
            </div>
            <div className="skillsdiv">
              <h2>Missions</h2>
                <li>Seaport Antiterrorism</li>
                <li>Force Protection</li>
                <li>Expeditionary Operations</li>
            </div>
          </div>
          <h2>Memories and Reflections</h2>
          <p className="aboutParagraph">
          I was conducting boardings on High-Interest Vessels in the Chesapeake Bay after 9/11 when I got the call. Port Security Unit 309 was deploying in support of Operation Iraqi Freedom but needed additional Gunner's Mates, and I was on their list. I stood overwatch and provided armory support. Days seemed endless, but demanded focus and discipline. I discovered that true commitment is tested and forged in the long, quiet hours.
          </p>
      {/* EDISTO  */}
      <h1>2004-2007: USCGC Edisto (WPB-1313) & Armory San Diego</h1>
      <img className="personalPics" src={edisto}/>
          <div className="skillscontainer">
            <div className="skillsdiv">
              <h2>Responsibilities</h2>
                <li>Mk 38 Machine Gun System Tech</li>
                <li>Firearms Instructor</li>
                <li>Boarding Team Member</li>
            </div>
            <div className="skillsdiv">
              <h2>Missions</h2>
                <li>Counter-Drug Interdiction</li>
                <li>Migrant Interdiction</li>
                <li>Search and Rescue</li>
            </div>
          </div>
          <h2>Memories and Reflections</h2>
          <p className="aboutParagraph">
          On a pitch-black night off the coast of Mexico, our radar picked up a fast-moving contact several miles out. No navigation lights. No course changes. Everything about it screamed drug smuggler. We pushed both engines to full throttle and rushed to our stations. Weapons were ready for warning shots if they ignored commands, disabling fire if they tried to run. Adrenaline was high, and we were locked in. The captain turned on the spotlight, and we braced for the sight of a go-fast vessel charging through the dark. Instead, the beam lit up hundreds of wings beating at once. The “smuggler” turned out to be the biggest flock of seagulls any of us had ever seen! In high-pressure situations, prepare for the worst, be ready for surprises, and adapt.
          </p>
      {/* Acushnet  */}
      <h1>2008-2009: USCGC Acushnet (WMEC-167)</h1>
      <img className="personalPics" src={acushnet}/>
          <div className="skillscontainer">
            <div className="skillsdiv">
              <h2>Responsibilities</h2>
                <li>Combat Training Team Lead</li>
                <li>Force Protection Team Lead</li>
                <li>Boarding Officer</li>
            </div>
            <div className="skillsdiv">
              <h2>Missions</h2>
                <li>Alaska Fisheries Law Enforcement</li>
                <li>Search and Rescue</li>
                <li>Homeland Security</li>
            </div>
          </div>
          <h2>Memories and Reflections</h2>
          <p className="aboutParagraph">
          The Bering Sea is as brutal as it is breathtaking. I remember standing watch on the bridge of our 213-foot ship, staring at the crest of a wave. It’s simultaneously terrifying and awe-inspiring when the bow disappears into foaming surf. On calm nights, the aurora borealis would dance across the stern. I also had unexpected moments of surprise, like the day I boarded a <em>Deadliest Catch</em> crabbing boat and suddenly found myself on camera. I loved serving on ACUSHNET more than any other unit, though I didn’t get a full tour. In December 2008, I was notified of my advancement to Chief Petty Officer (E-7) to fill a critical need in another position. Although I was grateful, it wasn't easy to leave early. Growth sometimes comes with stepping up when leadership asks you to and embracing challenges that come with something new.
          </p>
      {/* Detroit  */}
      <h1>2009-2013: Armory Detroit</h1>
          <div className="skillscontainer">
            <div className="skillsdiv">
              <h2>Responsibilities</h2>
                <li>Safety Inspector</li>
                <li>Firearms Instructor</li>
                <li>Shop Supervisor</li>
            </div>
            <div className="skillsdiv">
              <h2>Missions</h2>
                <li>Regional Support</li>
                <li>Coastal Security</li>
                <li>Maritime Law Enforcement</li>
            </div>
          </div>
          <h2>Memories and Reflections</h2>
          <p className="aboutParagraph">
          I learned to lead in Detroit and discovered what kind of Chief I wanted to be. Although I had led countless teams, none of the members were my direct reports. No longer on independent duty, I had subordinate Gunner's Mates to develop. They challenged me as a leader and pushed me to grow. I also discovered the power of emotional intelligence. Understanding my own and others' emotions was necessary for effective interpersonal relationships and leading more thoughtfully. One of my biggest lessons was learning to balance empathy with operational demands.
          </p>
      {/* Port Clinton  */}
      <h1>2013-2015: Force Readiness Command Armory Detachment Port Clinton</h1>
          <div className="skillscontainer">
            <div className="skillsdiv">
              <h2>Responsibilities</h2>
                <li>Supply Chain Manager</li>
                <li>Budget Officer</li>
                <li>Explosives Safety Officer</li>
            </div>
            <div className="skillsdiv">
              <h2>Missions</h2>
                <li>Training Program Management</li>
                <li>Explosives Safety</li>
                <li>Intermediate Weapons Maintenance</li>
            </div>
          </div>
          <h2>Memories and Reflections</h2>
          <p className="aboutParagraph">
          I supervised an Armory detachment in Port Clinton, OH, a position with significant authority. My armory ensured that weapons and explosives policies were followed across every Coast Guard unit in the eight Great Lakes states. It also served as the ammunition supply point and intermediate maintenance facility for weapons, so logistics management was a key skill. With my supervisor based in Virginia, I had high autonomy, which was exciting but initially overwhelming. Although I was a knowledgeable and experienced Gunner's Mate capable of demonstrating initiative, every outcome rested on my judgment. At first, I sought mentorship from peers and senior Gunner's Mates, which helped me navigate challenges and build confidence. This experience taught me humility: no matter your level of seniority, seeking guidance is not only acceptable but essential. I was advanced to Senior Chief (E-8) in 2015 and departed early for a higher role, carrying this lesson into future leadership positions.
          </p>
      {/* FORCECOM  */}
      <h1>2015-2019: Force Readiness Command Weapons Systems Branch</h1>
          <div className="skillscontainer">
            <div className="skillsdiv">
              <h2>Responsibilities</h2>
                <li>Ammunition Program Manager</li>
                <li>Ordnance Board of Experts Member</li>
                <li>Explosives Safety Officer</li>
            </div>
            <div className="skillsdiv">
              <h2>Missions</h2>
                <li>Mission Support</li>
                <li>Standardization</li>
                <li>Compliance</li>
            </div>
          </div>
          <h2>Memories and Reflections</h2>
          <p className="aboutParagraph">
          I am very grateful for this position, which laid the foundation for my aspirations after the Coast Guard. While the title of Ammunition Manager may sound straightforward, my responsibilities were significant. I was the authority for Coast Guard ammunition worldwide, overseeing over 25 million rounds and pyrotechnics, and serving as the final decision-maker for allocations, expenditures, onloads, offloads, and dispositions. Although I now had Chiefs working under me, ultimate responsibility rested on my shoulders. Our work processes were hindered by outdated software, which allowed us to query data but could not analyze it. To improve this, I taught myself to link Excel to Access and use macros, reducing the timeline for an annual recurring project by over 80%. I discovered a passion for building tools and software solutions that make complex work more efficient, and I found it incredibly rewarding to create systems that helped my team succeed. Equally important, I loved collaborating with others. As one of only twelve Senior Chief Gunner's Mates in the Coast Guard, colleagues from junior Gunner's Mates to Senior Officers sought my advice. These experiences inspired me to pursue a career in software engineering, combining my love for building tools with a passion for collaboration.
          </p>
      {/* D9  */}
      <h1>2019-2022: Ninth District</h1>
      <img className="personalPics" src={d9}/>
          <div className="skillscontainer">
            <div className="skillsdiv">
              <h2>Responsibilities</h2>
                <li>Ammunition Program Manager</li>
                <li>Ordnance Board of Experts Member</li>
                <li>Explosives Safety Officer</li>
            </div>
            <div className="skillsdiv">
              <h2>Missions</h2>
                <li>Mission Support</li>
                <li>Standardization</li>
                <li>Compliance</li>
            </div>
          </div>
          <h2>Memories and Reflections</h2>
          <p className="aboutParagraph">
          My job in Cleveland, OH, was unique. I served as the Great Lakes units’ weapons and explosives policy and program manager while directing Chiefs and mission support at armories. In addition, the Chief of Staff selected me for the “Silver Badge”, a position that represents the command and serves as the conduit for communication between the most junior member and the Admiral. In many ways, it was like being a life coach; able to influence policies, negotiate with senior leaders, and ensure every voice was heard. I gave daily briefs to the command cadre and delivered monthly training sessions on trending issues, which I called Leadership Lunches. It was one of the most rewarding positions of my career. I was still a Gunner’s Mate, yet I was also genuinely available to those concerned about policy or who simply needed someone to listen. This role sharpened every leadership skill I had developed that continues to inspire my post-Coast Guard aspirations in product management, where collaboration and building solutions are at the heart of my work.
          </p>

          <button
      onClick={(e) => {
        const details = e.currentTarget.closest("details");
        if (details) details.removeAttribute("open");
      }}
      className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl shadow hover:bg-blue-700 transition"
    >
      Close
    </button>

        </article>
      </details>
      <details>
        <summary>Personal Life</summary>

        <p className="aboutParagraph">
        I grew up in Deep East Texas and played baseball and fished since I could walk. When my daughter was old enough to play T-ball, my love for the game reignited, and I coached her team until she was 14.
        I met my wife, who is also retired Coast Guard, in Ireland while on a deployment.
        My daughter, an only child was born in 2006 at the Balboa Naval Hospital in San Diego.
        My family comes first. We love golfing and cruising, in addition to dry camping and overlanding -- usually at the same time. 
        NCAA sports are a staple in our family. My wife is a Michigan State and Ohio State graduate, and my daughter is in the Alpha Omicron Pi sorority at the University of Alabama where she is majoring in marketing.
        We have two dogs: Roo, an Australian Shepherd, and Kenai, an Alaskan Klee Kai.
        </p>

        <div id="personalLifePicsDiv">
        <img className="personalPics" alt="PSU vs. MSU" src={familyGameDay}/>
        <img className="personalPics" src={finalFourRd1}/>
        <img className="personalPics" src={jeep2}/>
        <img className="personalPics" src={AOII}/>
        <img className="personalPics" src={rooAndKenai}/>
        <img className="personalPics" src={fishingAK}/>
        <img className="personalPics" src={RickieFowler}/>
        </div>

        <button
      onClick={(e) => {
        const details = e.currentTarget.closest("details");
        if (details) details.removeAttribute("open");
      }}
      className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl shadow hover:bg-blue-700 transition"
    >
      Close
    </button>

      </details>
          </div>
  );
};
export default About;
