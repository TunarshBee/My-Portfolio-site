import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  let date = new Date().getFullYear();
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
          <a href="https://www.instagram.com/rafiubello1/?hl=en">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://web.facebook.com/sanusi.bello.7509/">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://www.github.com/TunarshBee">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
        <span>Copyright &copy; {date} Sanusi </span>
      </div>
    </div>
  );
};

export default Footer;
