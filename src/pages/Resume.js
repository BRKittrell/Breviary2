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
        <p id="professional_summary">I have over 15 years of experience in project management, product leadership, market analysis, and data analytics. I have a strong background in agile methodologies and managed assets valued at over $17M. I am is pursuing a B.S. in Businuss with specialization in Management and Marketing and hold a Professional ScrumMaster Certificate. My career goal is to become an EPR Product Manager.</p>

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
          <li>Mentored software engineering students and guided them through the software development lifecycle.</li>
          <li>Defined product roadmaps, managed production releases, and led agile ceremonies.</li>
          <li>Conducted market analysis and collaborated with UX designers to enhance product adoption.</li>

        <h2>Program Manager, Senior Enlisted Leader, U.S. Coast Guard, Cleveland, OH (2019 – 2022)</h2>
          <li>Advised on human resource matters and provided mentorship at an executive level.</li>
          <li>Managed sensitive asset inventories and resource allocations.</li>
          <li>Led cross-functional teams to achieve strategic goals.</li>

        <h2>Program Manager, U.S. Coast Guard, Portsmouth, VA (2015 – 2019)</h2>
          <li>Scheduled military logistics and collaborated with stakeholders.</li>
          <li>Monitored global inventory and budgeted resources.</li>
          <li>Drafted business requirements and formulated product strategies.</li>

        <h2>Chief Operating Officer, U.S. Coast Guard, Port Clinton, OH (2013 – 2015)</h2>
          <li>Supervised a regional unit supporting 60 units.</li>
          <li>Managed departmental budgets and property.</li>
          <li>Prepared operational planning and training schedules.</li>

        <h1>Education</h1>
          <li>Bachelor of Science in Business (Management and Marketing), Penn State University (Expected 2026)</li>
          <li>Business Administration and Management, University of Arkansas Grantham (2022)</li>

        <h1>Additional Training & Certificates</h1>
          <li>Professional ScrumMaster, Scrum.org (2023)</li>
          <li>U.S. Coast Guard Chief Petty Officers’ Academy (2010)</li>
          <li>Team Leader/Facilitator, U.S. Coast Guard (2008)</li>
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
