import React, { useState } from "react";
import RegiaterIMG from "../assets/register.jpg";
const Register = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="col-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
              />
            </div>
            <div className="col-12 mb-3">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="col-12 mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="col-12 mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Re-type Password"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="col-12 mb-3">
              <select className="form-control">
                <option value="">-- Select Age Group --</option>
                <option value="under_18">Under 18</option>
                <option value="18_24">18-24</option>
                <option value="25_34">25-34</option>
                <option value="35_44">35-44</option>
                <option value="45_54">45-54</option>
                <option value="55_64">55-64</option>
                <option value="65_over">65 and over</option>
              </select>
            </div>
            <div className="col-12 mb-3">
              <select className="form-control">
                <option value="">-- Select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-12 mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="col-12 mb-3">
              <select className="form-control">
                <option value="">-- Select State --</option>
                {/* Add state options here */}
              </select>
            </div>
            <div className="col-12 mb-3">
              <select className="form-control">
                <option value="">-- Select Country --</option>
                {/* Add country options here */}
              </select>
            </div>
            <div className="col-12 mb-3">
              <select className="form-control">
                <option value="">-- Select Profession --</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="engineer">Engineer</option>
                <option value="doctor">Doctor</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="College"
              />
            </div>
            <div className="col-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="col-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="University"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div
        className="untree_co-hero inner-page overlay bg-light"
        style={{
          backgroundImage: `url(${RegiaterIMG})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <h1
                    className="mb-4 heading text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Register
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div
              className="col-lg-5 mx-auto order-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form action="#" className="form-box">
                <div className="row">
                  {renderStep()}
                  <div className="col-12 mt-3">
                    {step > 1 && (
                      <button
                        onClick={prevStep}
                        className="btn btn-secondary float-left"
                      >
                        Previous
                      </button>
                    )}
                    {step < 3 && (
                      <button
                        onClick={nextStep}
                        className="btn btn-primary float-right next-btn"
                      >
                        Next
                      </button>
                    )}
                    {step === 3 && (
                      <input
                        type="submit"
                        value="Register"
                        className="btn btn-primary float-right next-btn"
                      />
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
