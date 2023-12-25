import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import { IoPeople } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GiIndiaGate } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("skills");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Define the skills array
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "HTML",
    "CSS",
  ];

  useEffect(() => {
    // Check if the user is logged in
    const authToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="));
    setIsLoggedIn(!!authToken);

    // Fetch jobs when the component mounts
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/jobs/filterjob",
          {
            params: {
              jobPosition: searchInput,
              skills: selectedSkills.join(","),
            },
          }
        );
        setJobs(response.data.data);
      } catch (error) {
        console.error(
          "Error fetching jobs:",
          error.response?.data || "Unknown error"
        );
      }
    };

    fetchJobs();
  }, [searchInput, selectedSkills, isLoggedIn]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    setSelectedSkill(skill);

    // Only add the skill to selectedSkills if it's not already there
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  const handleClearSkills = () => {
    setSelectedSkills([]);
  };

  const handleLogout = () => {
    // Clear the authentication token from the cookie
    document.cookie =
      "authToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    setIsLoggedIn(false);
    // Additional logic for logout if needed
  };

  return (
    <div className="home__main">
      <nav className="home__nav">
        <h1 className="home__logo">Jobfinder</h1>
        <div className="home__btnDiv">
          {isLoggedIn ? (
            <>
              <button onClick={handleLogout} className="home__logout">
                Logout
              </button>
              {/* Render user image here */}
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="home__login"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="home__register"
              >
                Register
              </button>
            </>
          )}
        </div>
      </nav>
      <section className="home__searchSec">
        <input
          className="home__searchInput"
          type="search"
          placeholder="Type any job title"
          value={searchInput}
          onChange={handleSearchChange}
        />
        <div className="home__skillsDivv">
          <div className="home__skillsDiv">
            <select
              className="home__select"
              name="skills"
              id="skills"
              value={selectedSkill}
              onChange={handleSkillChange}
            >
              <option className="home__option" value="skills">
                skills
              </option>
              {skills.map((skill) => (
                <option key={skill} className="home__option" value={skill}>
                  {skill}
                </option>
              ))}
            </select>
            <div className="home__skillNameDiv">
              {selectedSkills.map((skill) => (
                <h2 key={skill} className="home__skillName">
                  {skill}{" "}
                  <span
                    className="home__cut"
                    onClick={() => handleRemoveSkill(skill)}
                  >
                    X
                  </span>
                </h2>
              ))}
            </div>
          </div>
          <button className="home__clear" onClick={handleClearSkills}>
            Clear
          </button>
        </div>
      </section>
      <main className="home__jobs">
        {jobs.map((job) => (
          <section className="home__jobSec" key={job._id}>
            <div className="home__left">
              <div className="home__imgDiv">
                <img
                  className="home__companyImg"
                  src={
                    job.companyLogoUrl || "https://via.placeholder.com/45x45"
                  }
                  alt=""
                />
              </div>
              <div className="home__jobdiv">
                <h3 className="home__jobName">{job.jobPosition}</h3>
                <div className="home__flex">
                  <h4 className="home__jobPeople">
                    <IoPeople />
                    {job.companySize}
                  </h4>
                  <h4 className="home__jobPaid">
                    <FaIndianRupeeSign />
                    {job.monthlySalary}
                  </h4>
                  <h4 className="home__jobLocation">
                    <GiIndiaGate />
                    {job.location}
                  </h4>
                </div>
                <div className="home__office">
                  <p className="home__officePara">{job.workType}</p>
                </div>
              </div>
            </div>
            <div className="home__viewDiv">
              <div className="home__fronendDiv">
                {job.skills.map((skill) => (
                  <p key={skill} className="home__fronendpara">
                    {skill}
                  </p>
                ))}
              </div>
              <button className="home__viewpara">View details</button>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Home;
