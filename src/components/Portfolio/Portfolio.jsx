import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Edward from "../../img/edward.png";
import Imexta from "../../img/imextaFrontend.png";
import Punch from "../../img/punchTest.png";
import MovieApp from "../../img/movieCompare.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://edwardassessment.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Edward} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://imexta-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Imexta} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://sanbellomoviecompare.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={MovieApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://sanbellopunchtest.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Punch} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
