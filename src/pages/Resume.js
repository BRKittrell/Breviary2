import React from "react";



const Resume = () => {
  return (
    <div className="resumeContainer">
      <a
        href="https://docs.google.com/document/d/1BnmXqic7F5rIDcIE2OaSK1Zt4wb38s8C/export?format=pdf"
        download="Resume.pdf" // Adjust the filename as needed
      >
        <button className="downloadbutton" type="button">Download Detailed Resume</button>
      </a>
      <div id="resume_div">
        <h1>Professional Summary</h1>
        <p id="professional_summary">U.S. Coast Guard veteran with over 15 years of leadership experience managing operations, logistics, and
cross-functional teams in high-pressure, mission-critical environments. Led programs supporting global operations and
oversaw $17M in assets worldwide, utilizing data analytics and strategic planning to enhance readiness and
performance. Experienced as a Software Engineer Immersive Resident, mentoring 50 full-stack engineering students in
Agile development and modern web technologies.</p>

        <h1>Areas of Expertise</h1>
        <div className="skillscontainer">
        <div className="skillsdiv">
                <h2>Hard Skills</h2>
                <span class="material-symbols-outlined">check</span>Project Management<br></br>
                <span class="material-symbols-outlined">check</span>Sourcing and Procuring<br></br>
                <span class="material-symbols-outlined">check</span>Software Engineering<br></br>
                <span class="material-symbols-outlined">check</span>Forecasting<br></br>
                <span class="material-symbols-outlined">check</span>Demand Planning<br></br>
                <span class="material-symbols-outlined">check</span>Inventory Management<br></br>
                <span class="material-symbols-outlined">check</span>Logistics<br></br>
                <span class="material-symbols-outlined">check</span>Agile Methodoligies<br></br>
            </div>
            <div className="skillsdiv">
                <h2>Soft Skills</h2>
                <span class="material-symbols-outlined">check</span>Team Leadership<br></br>
                <span class="material-symbols-outlined">check</span>Verbal Communication<br></br>
                <span class="material-symbols-outlined">check</span>Collaboration<br></br>
                <span class="material-symbols-outlined">check</span>Problem Solving<br></br>
                <span class="material-symbols-outlined">check</span>Detail Oriented<br></br>
                <span class="material-symbols-outlined">check</span>Strategic Planning<br></br>
                <span class="material-symbols-outlined">check</span>Mentorship<br></br>
                <span class="material-symbols-outlined">check</span>Customer Focus<br></br>
            </div>
            <div className="skillsdiv">
                <h2>Tech Skills</h2>
                <span class="material-symbols-outlined">check</span>JavaScript<br></br>
                <span class="material-symbols-outlined">check</span>React JS<br></br>
                <span class="material-symbols-outlined">check</span>Express JS<br></br>
                <span class="material-symbols-outlined">check</span>Node JS<br></br>
                <span class="material-symbols-outlined">check</span>SQL<br></br>
                <span class="material-symbols-outlined">check</span>CSS<br></br>
                <span class="material-symbols-outlined">check</span>HTML 5<br></br>
                <span class="material-symbols-outlined">check</span>Git<br></br>
            </div>
            </div>

        <h1>Professional Experience</h1>
        <h2>Software Engineer Immersive Resident, Galvanize, Inc., Boulder, CO (2022 – 2023)</h2>
        <ul>
        <li className="resumeLI"> Mentored and coached 50+ software engineering students in a full-stack development program, reinforcing industry best practices and Agile workflows in a hands-on training environment. </li>
        <li className="resumeLI">Facilitated sprints, daily scrums, and retrospectives to simulate real-world agile project management and delivery.</li>
        <li className="resumeLI">Guided students through backlog prioritization, object-oriented programming, and product life cycles.</li>
        <li className="resumeLI">Reviewed and provided feedback on student projects for technical accuracy and alignment with requirements.</li>
        <li className="resumeLI">Supported peer code reviews and group discussions to promote collaboration, problem-solving, and professional communication skills.</li>
        <li className="resumeLI">Assisted in developing user stories and wireframes to build understanding of product design, planning, and delivery processes</li>
        </ul>
  
        <h2> Ordnance Program Manager, Senior Enlisted Leader, U.S. Coast Guard, Cleveland, OH (2019 – 2022)</h2>
        <ul>
          <li className="resumeLI">Directed strategic safety, compliance, and readiness programs across 60 subordinate units in eight states, managing policies, budgets, cross-functional teams, and sensitive asset inventories.</li>
          <li className="resumeLI">Authored and implemented regional policies for program management, personnel oversight, and resource allocation, improving operational consistency and accountability. </li>
          <li className="resumeLI">Supervised 50+ staff, including Coast Guard Great Lakes personnel and regional project managers; monitored KPIs to align initiatives with strategic objectives and mitigate risks.</li>
          <li className="resumeLI">Managed annual firearms qualification for 30+ instructors and biannual explosives driver training for 15+ personnel, ensuring federal compliance, optimizing resources, and maintaining certification for over 1,000 members.</li>
          <li className="resumeLI">Served as Command Senior Enlisted Leader to the Great Lakes Chief of Staff, mentoring personnel, enforcing Good Order and Discipline, and briefing senior leadership on operational and personnel matters.</li>
        </ul>

        <h2>Ammunition Program Manager, U.S. Coast Guard, Portsmouth, VA (2015 – 2019)</h2>
          <ul>
          <li className="resumeLI">Directed global logistics and inventory operations for $17M in ammunition and explosives, supporting 80 major commands worldwide.</li>
          <li className="resumeLI">Utilized Management Information Systems (MIS) to forecast demand, allocate resources, manage budgets, and maintain asset accountability and compliance.</li>
          <li className="resumeLI">Coordinated onloads, offloads, and worldwide distribution with cross-functional teams and external stakeholders to ensure operational efficiency and mission readiness.</li>
          <li className="resumeLI">Led a board of experts to redesign the ordnance safety inspection program, reducing redundancy by 80% and increasing inspection performance scores. </li>
          <li className="resumeLI">Managed MIS access control and data integrity to ensure accurate reporting, audit readiness, and regulatory compliance.</li>
          <li className="resumeLI">Provided expert guidance on explosive mishap investigations, ensuring adherence to safety protocols and operational standards. </li>
          <li className="resumeLI">Mentored Chief Petty Officers and junior leaders to enhance performance, leadership capability, and team cohesion.</li>
          </ul>

        <h2>Chief Operating Officer, U.S. Coast Guard, Port Clinton, OH (2013 – 2015)</h2>
         <ul>
          <li className="resumeLI">Directed an intermediate field support unit managing the ammunition supply chain, weapons maintenance, training programs, and safety inspections across the Great Lakes region, impacting over 1,000 service members.</li>
          <li className="resumeLI">Oversaw budgets, property, operational planning, and project execution to optimize readiness and efficiency.</li>
          <li className="resumeLI">Managed departmental budget, equipment, and real property valued over $250K, approving purchases, allocating resources, and maintaining accountability for all receipts and property issues. </li>
          <li className="resumeLI">Oversaw accountability and physical security for over 50,000 ammunition and explosives items, including 1,000+ serialized ordnance assets, ensuring compliance with explosives safety regulations and operational readiness.</li>
          <li className="resumeLI">Conducted and supervised explosives and firearms safety inspection programs at 60+ commands, identifying risks and enforcing regulatory compliance. </li>
          <li className="resumeLI">Conducted semiannual performance reviews for unit personnel, providing professional development guidance to foster leadership growth, enhance team performance, and ensure operational readiness. </li>
          <li className="resumeLI">Directed unit operations, training, and planning, developing multi-tiered schedules and leading cross-functional projects to enhance mission performance and efficiency.</li>
         </ul>

        <h1>Education</h1>
          <ul>
          <li className="resumeLI">B.S. in Business, Management and Marketing, Penn State University, State College, PA | Expected 2026</li>
          <li className="resumeLI">A.A. in Business Administration and Management, Grantham University, Little Rock, AR | 2022</li>
          </ul>

        <h1>Professional Development</h1>
        <ul>
<li className="resumeLI">Full-Stack Software Engineer, Galvanize, Inc. | 2022</li>
<li className="resumeLI">Professional Scrum Master, Scrum.org | 2023</li>
        </ul>

        <h1>Military Awards</h1>
        <ul>
         <li className="resumeLI">Coast Guard Commendation Medal (2 awards): Recognized for distinguished and exceptionally meritorious achievement and service exceeding normal expectations, resulting in outstanding contributions to mission success.</li>
         <li className="resumeLI">Coast Guard Achievement Medal (4 awards): Honored for distinguished professional and leadership performance through sustained excellence or specific accomplishments that significantly advanced U.S. Coast Guard operations.</li>
         <li className="resumeLI">Coast Guard Good Conduct Medal (6 awards): Awarded to enlisted members who complete continuous, creditable active-duty service with satisfactory conduct and performance, meeting required evaluation standards and without disqualifying disciplinary actions or breaks in service.</li>
         <li className="resumeLI">Commandant’s Letter of Commendation: Awarded to U.S. military personnel serving with the Coast Guard for unusual or outstanding achievement.</li>
         <li className="resumeLI">Coast Guard Meritorious Team Commendation (4 awards): awarded to groups or teams not designated as official Coast Guard units whose members collectively make a significant contribution to an outstanding accomplishment, with performance comparable to an individual Letter of Commendation or higher, and does not prevent individual recognition for the same effort.</li>
         <li className="resumeLI">Coast Guard Meritorious Unit Commendation (3 awards): Awarded to Coast Guard units that distinguish themselves through valorous or meritorious non-combat service, and requires the entire unit to perform as a team rather than isolated actions.</li>
         <li className="resumeLI">Department of Transportation 9/11 Medal: Recognizes employees for extraordinary meritorious service or leadership in rescue, evacuation, security, or recovery efforts related to the September 11, 2001 attacks, with eligibility limited to those whose contributions exceeded the standard for the 9/11 Ribbon.</li>
         <li className="resumeLI">Presidential Unit Citation: Awarded in the name of the President of the United States to U.S. and allied military units for outstanding performance in action.</li>
         <li className="resumeLI">Global War on Terrorism Expeditionary Medal: Recognizes military personnel who deployed abroad in support of designated Global War on Terrorism operations within approved areas of eligibility, meeting deployment time, combat, injury, or direct operational support criteria.</li>
         <li className="resumeLI">Coast Guard Special Operations Service Ribbon: Awarded to U.S. Armed Forces personnel who participate significantly in major non-combat Coast Guard operations, including multi-agency or international law enforcement missions.</li>
         <li className="resumeLI">Other Awards: National Defense Service Medal, Armed Forces Service Medal, Navy Sea Service Deployment Ribbon, Coast Guard Sea Service Ribbon, Expert Rifleman Medal, Expert Pistol Shot Medal, DHS Outstanding Unit Award.</li>
        </ul>
              </div>
      {/* <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vRjtdKz2lRwLlVfoFGMNAGk0Su-V5TscqLHN4W3uMzeL5rofcYpCUEBUugFy00z5Q/pub?embedded=true"
        width="800"
        height="1800"
        allow="autoplay"
      ></iframe> */}
    </div>
  );
};

export default Resume;
