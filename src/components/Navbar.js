import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaLinkedin, FaYoutube, FaGithubSquare } from 'react-icons/fa'
import profilePic from "../images/LI_Pic.jpeg"

const Navbar = () => {
  return (
    <>
      <div className="titleAndNavbar">
        <h1 className="heading">Brandon Kittrell</h1>
        <img className="cardPhoto" src={profilePic}/>
      <div className="navbardiv">
        <a href="mailto:brandon.kittrell@outlook.com"><MdOutlineMailOutline className="icon">...</MdOutlineMailOutline></a>
        <Link to="/" className="navLink">
          Bio
        </Link>
        <a 
    href="https://docs.google.com/document/d/1BnmXqic7F5rIDcIE2OaSK1Zt4wb38s8C/export?format=pdf" 
    className="navLink" 
    download="Resume.pdf"
  >
    Resume
  </a>
        {/* <Link to="resume" className="navLink">
          Resume
        </Link> */}
        {/* <Link to="skills" className="navLink">
          Skills Summary
        </Link> */}
        <Link to="DegreeAndCertificate" className="navLink">
          Education/Certificates
        </Link>
        {/* <Link to="blogs" className="navLink">
          Blogs
        </Link> */}
        {/* <Link to="visitors" className="navLink">
          Fun
        </Link> */}
      <a href="https://www.linkedin.com/in/brandon-kittrell/" target="_blank"><FaLinkedin className="icon">...</FaLinkedin></a>

           </div>
      </div>
    </>
  );
};

export default Navbar;
