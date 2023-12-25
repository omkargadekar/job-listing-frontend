import React from "react";
import "./details.css";
import { BsCash } from "react-icons/bs";
import { RiClapperboardFill } from "react-icons/ri";

const Details = () => {
  return (
    <div>
      <nav className="det__nav">
        <h1 className="det__logo">Jobfinder</h1>
        <div className="det__btnDiv">
          <button className="det__login">Login</button>
          <button className="det__register">Register</button>
        </div>
      </nav>
      <div className="det__mainn">
        <div className="det__head">
          <h1 className="det__headh">
            WordPress Development work from home job/internship at Adyaka <br />{" "}
            Infosec Private Limited
          </h1>
        </div>
        <div className="det__divv">
          <div className="det__div">
            <div className="det__week">
              <p className="det__weekp">1w ago</p>
              <p className="det__weekpp">Full Time</p>
            </div>
            <div className="det__headDiv">
              <h1 className="det__headd">WordPress Development </h1>
              <h2 className="det__location">Bangalore | India</h2>
            </div>
            <div className="det__stipendDivDiv">
              {" "}
              <div className="det__stipendDiv">
                <p className="det__stipend">
                  <BsCash />
                  Stipend
                </p>
                <p className="det__stipendDur">Rs 25000/month</p>
              </div>
              <div className="det__durDiv">
                <p className="det__duration">
                  <RiClapperboardFill />
                  Duration
                </p>
                <p className="det__durationMon">6 Months</p>
              </div>
            </div>
            <div className="det__wholeDiv">
              <div className="det__aboutCom">
                <h3 className="det__about">About company</h3>
                <p className="det__aboutPara">
                  We provide technology-based services to help businesses and
                  organizations achieve their goals. We offer a wide range of
                  services, including software development, system integration,
                  network and security services, cloud computing, and data
                  analytics. Our primary focus is on leveraging technology to
                  streamline business processes, improve productivity, and
                  enhance overall efficiency.We provide technology-based
                  services to help businesses and organizations achieve their
                  goals. We offer a wide range of services, including software
                  development, system integration, network and security
                  services, cloud computing, and data analytics. Our primary
                  focus is on leveraging technology to streamline business
                  processes, improve productivity, and enhance overall
                  efficiency.
                </p>
              </div>
              <div className="det__aboutCom">
                <h3 className="det__about">About the job/internship</h3>
                <p className="det__aboutPara">
                  We are looking for a responsible PHP/WordPress/Laravel/Shopify
                  Developer. He/She will be liable for managing services and
                  therefore the interchange of knowledge between the server and
                  the users. The candidate's primary focus is going to be the
                  event of all server-side logic, definition, and maintenance of
                  the central database and ensuring high performance and
                  responsiveness to requests from the front end. Selected
                  intern's day-to-day responsibilities include: 1. Work on the
                  development of theme customization, liquid programming
                  language, and corresponding apps 2. Implement system
                  integrations that are crucial to our success 3. Contribute to
                  the development of HTML5/CSS/JavaScript and standard web
                  technologies integral to building seamless multi-channel
                  experiences 4. Work on speed optimization and making a
                  mobile-friendly website
                </p>
              </div>
              <div className="det__aboutCom">
                <h3 className="det__about">Skill(s) required</h3>
                <div className="det__skillsDiv">
                  <p className="det__css">CSS</p>
                  <p className="det__css">HTML</p>
                </div>
              </div>
              <div className="det__aboutCom">
                <h4 className="det__about">Additional Information</h4>
                <p className="det__aboutPara">
                  Stipend structure: This is a performance-based internship. In
                  addition to the minimum-assured stipend, you will also be paid
                  a performance-linked incentive (₹ 2500 per design).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
