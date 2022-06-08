import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  let date =  new Date().getFullYear() 
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a
          href="mailto:rafiubello4real@gmail.com"
          style={{ color: "white", textDecoration: "none" }}
        >
          <span>rafiubello4real@gmail.com</span>
        </a>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
        <span>Copyright &copy; {date} Sanusi  </span>
      </div>
    </div>
  );
};

export default Footer;
