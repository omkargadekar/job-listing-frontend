import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
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
      // Send login request to the backend API
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/login",
        formData
      );

      // Handle success, e.g., show a success message or redirect
      console.log("Login Successful:", response.data);
      navigate("/");
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Login Failed:", error.response?.data || "Unknown error");
    }
  };

  return (
    <div className="register">
      <div className="form">
        <h1 className="create">Already have an account?</h1>
        <h2 className="your">Your personal job finder is here</h2>
        <form className="forms" onSubmit={handleSubmit}>
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
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="input"
          />

          <br />
          <button className="btnSub" type="submit">
            Sign in
          </button>
        </form>
      </div>
      <div className="imgDiv">
        <img className="userImg" src="/user.png" alt="user" />
      </div>
    </div>
  );
};

export default Login;
