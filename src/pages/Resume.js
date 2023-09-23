import React from "react";

const Resume = () => {
  return (
    <div className="resumeContainer">
      <a
        href="https://drive.google.com/file/d/1tB1DgjYfsrG68-rK3yaLRgoZXff3BsC0/preview"
        download="GFG"
      >
        {/* <button type="button">Download</button> */}
      </a>
      <iframe
        src="https://drive.google.com/file/d/1cYcpnoCWpFUw1yQO0F_N3taR0Rue6YbS/preview"
        width="800"
        height="2000"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default Resume;
