import React, { useState } from "react";
import axios from "axios";
import "./job.css";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const [jobDetails, setJobDetails] = useState({
    companyName: "",
    jobPosition: "",
    monthlySalary: "",
    jobType: "",
    workType: "",
    location: "",
    jobDescription: "",
    aboutCompany: "",
    skills: "",
    additionalInformation: "",
  });

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/jobs/create-job-post",
        jobDetails
      );
      console.log("Job added successfully:", response.data);
      navigate("/");

      // Add any additional logic or redirection upon successful job creation
    } catch (error) {
      console.error(
        "Error adding job:",
        error.response?.data || "Unknown error"
      );
      // Handle error, show error message, etc.
    }
  };

  const handleCancel = () => {
    navigate("/");
  };
  return (
    <div className="register">
      <div className="form">
        <h1 className="create">Add job description</h1>

        <form className="jobForm" onSubmit={handleSubmit}>
          <label className="inputLable">
            <p className="jobparalable">Company Name:</p>
            <input
              type="text"
              name="companyName"
              value={jobDetails.companyName}
              onChange={handleChange}
              className="inputt"
            />
          </label>
          <br />

          <label className="inputLable">
            <p className="jobparalable">Job Position:</p>
            <input
              type="text"
              name="jobPosition"
              value={jobDetails.jobPosition}
              onChange={handleChange}
              className="inputt"
            />
          </label>
          <br />

          <label className="inputLable">
            <p className="jobparalable">Monthly Salary:</p>
            <input
              type="text"
              name="monthlySalary"
              value={jobDetails.monthlySalary}
              onChange={handleChange}
              className="inputt"
            />
          </label>
          <br />

          <label className="inputLable">
            <p className="jobparalable">Job Type:</p>
            <select
              name="jobType"
              value={jobDetails.jobType}
              onChange={handleChange}
              className="inputt"
            >
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
          </label>
          <br />

          <label className="inputLable">
            <p className="jobparalable">Work Type:</p>
            <select
              name="workType"
              value={jobDetails.workType}
              onChange={handleChange}
              className="inputt"
            >
              <option value="">Select Work Type</option>
              <option value="On-site">On-site</option>
              <option value="Remote">Remote</option>
            </select>
          </label>
          <br />

          <label className="inputLable">
            <p className="jobparalable">Location:</p>
            <input
              type="text"
              name="location"
              value={jobDetails.location}
              onChange={handleChange}
              className="inputt"
            />
          </label>
          <br />

          <label className="inputLable">
            <p className="jobparalable">Job Description:</p>
            <input
              type="text"
              name="jobDescription"
              value={jobDetails.jobDescription}
              onChange={handleChange}
              className="inputt"
            />
          </label>
          <br />

          <label className="inputLable">
            <p className="jobparalable">About Company:</p>
            <input
              type="text"
              name="aboutCompany"
              value={jobDetails.aboutCompany}
              onChange={handleChange}
              className="inputt"
            />
          </label>
          <br />

          <label className="inputLable">
            <p className="jobparalable">Skills:</p>
            <input
              type="text"
              name="skills"
              value={jobDetails.skills}
              onChange={handleChange}
              className="inputt"
            />
          </label>
          <br />

          <label className="inputLable">
            <p className="jobparalable">Additional Information:</p>
            <input
              type="text"
              name="additionalInformation"
              value={jobDetails.additionalInformation}
              onChange={handleChange}
              className="inputt"
            />
          </label>
          <br />

          <div className="btndivdiv">
            {" "}
            <button type="submit" className="inputbtnn">
              Add Job
            </button>
            <button type="button" onClick={handleCancel} className="inputbtn">
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className="imgDiv">
        <img className="userImg" src="/job.png" alt="job" />
      </div>
    </div>
  );
};

export default AddJob;
