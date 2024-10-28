import React from "react";



const Resume = () => {
  return (
    <div className="resumeContainer">
      <a
        href="https://docs.google.com/document/d/1BnmXqic7F5rIDcIE2OaSK1Zt4wb38s8C/export?format=pdf"
        download="Resume.pdf" // Adjust the filename as needed
      >
        <button className="downloadbutton" type="button">Download Resume</button>
      </a>
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vRjtdKz2lRwLlVfoFGMNAGk0Su-V5TscqLHN4W3uMzeL5rofcYpCUEBUugFy00z5Q/pub?embedded=true"
        width="800"
        height="1800"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default Resume;


// const Resume = () => {
//   return (
//     <div className="resumeContainer">
//       <a
//         href="https://drive.google.com/file/d/1tB1DgjYfsrG68-rK3yaLRgoZXff3BsC0/preview"
//         download="GFG"
//       >
//         {/* <button type="button">Download</button> */}
//       </a>
//       <iframe
//         src="https://docs.google.com/document/d/e/2PACX-1vRjtdKz2lRwLlVfoFGMNAGk0Su-V5TscqLHN4W3uMzeL5rofcYpCUEBUugFy00z5Q/pub?embedded=true"
//         width="800"
//         height="1800"
//         allow="autoplay"
//       ></iframe>
//     </div>
//   );
// };

// export default Resume;
