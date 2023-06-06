import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import "./userInfo.css"


const SignUp = () => {
  const [formData, setFormData] = useState({"username": " ","email": " ", "phone_number": "","password": ""});

    const notify = () => toast("Sign-In successful!");
  
    
const formOnChange = (event) => {
    console.log("events", event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  console.log("formData", formData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.1.204:8000/signup/",
        formData,
      );
      console.log("Signup successful!", response.data);
      
    } catch (error) {
      console.error("Signup failed!", error);
     
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          name="userName"
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
          name="phonenumber"
          type="phonenumber"
          id="phonenumber"
          onChange={(e) => formOnChange(e)}
          required
        />

        <button type="submit" onClick={notify}>SignUp</button>
        
        <ToastContainer />
      </form>
    </div>
  );
};

export default SignUp;
