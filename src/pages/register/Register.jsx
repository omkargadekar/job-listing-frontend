import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/register",
        formData
      );

      console.log("Registration Successful:", response.data);
      navigate("/");
    } catch (error) {
      console.error(
        "Registration Failed:",
        error.response?.data || "Unknown error"
      );
    }
  };

  return (
    <div className="register">
      <div className="form">
        <h1 className="create">Create an account</h1>
        <h2 className="your">Your personal job finder is here</h2>
        <form className="forms" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="input"
          />

          <br />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input"
          />

          <br />

          <input
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile"
            className="input"
          />

          <br />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="input"
          />

          <br />
          <div className="checkdiv">
            <input type="checkbox" name="checkbox" className="inputCheck" />
            <p className="checkpara">
              By creating an account, I agree to our terms of use and privacy
              policy
            </p>
          </div>
          <br />
          <button className="btnSub" type="submit">
            Create Account
          </button>
        </form>
      </div>
      <div className="imgDiv">
        <img className="userImg" src="/user.png" alt="user" />
      </div>
    </div>
  );
};

export default Register;
