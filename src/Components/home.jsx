import React from "react";
import Image from "../assets/home.mp4";
import Staff from "../assets/staff.jpg";
import BG from "../assets/hero_bg.jpg";
import { Link } from "react-router-dom";
import News from "./News";
import Contact from "./Contact";

import Fade from "react-reveal/Fade"; // Import the Fade component
import Testimonials from "./Testimonials";
// Initialize AOS

const HeroSection = () => {
  return (
    <div
      class="untree_co-hero overlay"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-12">
            <div class="row justify-content-center ">
              <div class="col-lg-6 text-center ">
                {/* <a
                  href="#"
                  data-fancybox
                  data-aos="fade-up"
                  data-aos-delay="0"
                  class="caption mb-4 d-inline-block"
                >
                  Watch the video
                </a> */}

                <h1
                  class="mb-4 heading text-white"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Fade up duration={1000} delay={200}>
                    {" "}
                    Education is the Mother of Leadership
                  </Fade>
                </h1>
                <p class="mb-0" data-aos="fade-up" data-aos-delay="300">
                  {/* <a href="#" class="btn btn-secondary">
                    Explore courses
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Category = ({ icon, title, courses, sub }) => {
  return (
    <Fade up duration={1000} delay={200}>
      <div
        className="col-sm-6 col-md-6 col-lg-3 mb-4"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <Link
          className="category d-flex align-items-start h-100"
          to={`/experiment/${sub}`}
        >
          <div>
            <i className={`uil ${icon}`}></i>
          </div>
          <div>
            <h3>{title}</h3>
            <span>{courses} courses</span>
          </div>
        </Link>
      </div>
    </Fade>
  );
};

const CategorySection = () => {
  const categories = [
    {
      icon: "uil-atom",
      title: "	Biotechnology and Biomedical Engineering",
      courses: "1,391",
      sub: "75",
    },
    {
      icon: "uil-briefcase",
      title: "Chemical Sciences",
      courses: "3,234",
      sub: "76",
    },
    {
      icon: "uil-calculator",
      title: "	Computer Science",
      courses: "931",
      sub: "77",
    },
    {
      icon: "uil-pen",
      title: "	Mechanical Engineering",
      courses: "7,291",
      sub: "78",
    },
    {
      icon: "uil-music",
      title: "	Physical Sciences",
      courses: "9,114",
      sub: "79",
    },
    { icon: "uil-chart-pie", title: "Marketing", courses: "2,391", sub: "80" },
    { icon: "uil-camera", title: "Photography", courses: "7,991", sub: "81" },
    {
      icon: "uil-circle-layer",
      title: "Animation",
      courses: "6,491",
      sub: "82",
    },
  ];

  return (
    <>
      <div className="untree_co-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <Fade up duration={1000} delay={200}>
              <div
                className="col-lg-7 text-center"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <h2 className="line-bottom text-center mb-4">
                  {" "}
                  Virtual Labs at Amrita Vishwa Vidyapeetham
                </h2>
              </div>
            </Fade>
          </div>
          <div className="row align-items-stretch">
            {categories.map((category, index) => (
              <Category key={index} {...category} />
            ))}
          </div>
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="col-lg-8 text-center">
              {/* <p>
                We have more category here. <a href="#">Browse all</a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <News></News>

      <Testimonials></Testimonials>
      <Contact />
    </>
  );
};

export default Home;
