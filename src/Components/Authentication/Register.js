import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../Toastify/Toastify";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const history = useHistory();

  const formOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("events", event.target.value);
    if (event.target.name === "phone_number") {
      setFormData({ ...formData, [name]: "+91" + value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  console.log("formData", formData);

  const handleSubmit = async (event) => {
    console.log("asknnsajkjk");
    event.preventDefault();
    try {
      await axios.post("http://192.168.1.204:8000/signup/", formData);
      showSuccessToast("Registeration Successful!");
    } catch (error) {
      showErrorToast("Error in signup");
    }
  };

  const toggleLogin = () => {
    history.push("/");
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          type="text"
          id="username"
          onChange={(e) => formOnChange(e)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          id="password"
          onChange={(e) => formOnChange(e)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          id="email"
          onChange={(e) => formOnChange(e)}
          required
        />
        <label htmlFor="password">Phone No.:</label>
        <input
          name="phone_number"
          type="phone_number"
          id="phone_number"
          onChange={(e) => formOnChange(e)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account?</p>
      <button type="submit" onClick={toggleLogin}>
        Login
      </button>
    </div>
  );
};

export default Register;
