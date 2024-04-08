import React, { useState } from "react";
import RegiaterIMG from '../../../assets/img-school-1-min.jpg'
import { Link, useLocation } from "react-router-dom";

import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Fade from 'react-reveal/Fade'; // Import the Fade component
const Category = ({ icon, title, courses }) => {
    return (
      <Fade up duration={1000} delay={200}>
      <div
        className="col-sm-6 col-md-6 col-lg-3 mb-4"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <Link
          className="category d-flex align-items-start h-100"
          to="/Labs"
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
      },
      { icon: "uil-briefcase", title: "Chemical Sciences", courses: "3,234" },
      { icon: "uil-calculator", title: "	Computer Science", courses: "931" },
      { icon: "uil-pen", title: "	Mechanical Engineering", courses: "7,291" },
      { icon: "uil-music", title: "	Physical Sciences", courses: "9,114" },
      { icon: "uil-chart-pie", title: "Marketing", courses: "2,391" },
      { icon: "uil-camera", title: "Photography", courses: "7,991" },
      { icon: "uil-circle-layer", title: "Animation", courses: "6,491" },
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
                 Select Virtual Lab
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
  
const LabHome = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Fade up duration={1000} delay={200}> {/* Add Fade component with up animation */}
        <div className="untree_co-hero inner-page overlay bg-light" 
        style={{backgroundImage: `url(${RegiaterIMG})`}}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12">
                <div className="row justify-content-center ">
                  <div className="col-lg-6 text-center ">
                    <h1
                      className="mb-4 heading text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                     Virtual Labs
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      <div className="untree_co-section">
        <div className="container">
         
        </div>
      </div>
      </Fade>
      {/* <Category/> */}
      <CategorySection/>
    </>
  );
};

export default LabHome;
