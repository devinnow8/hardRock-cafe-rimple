import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SignIn=()=>{
    const [userData, setUserData] = useState({Email: "",Password: ""});
    const notify = () => toast("Login successful");

    const dataOnChange = (event) => {
        console.log("events", event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        setUserData({ ...userData, [name]: value });
      };
      console.log(userData, "userdatata")
    
     const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post("http://192.168.1.204:8000/signin/", userData);
          console.log("SignIn successful!", response.data);
          
        } catch (error) {
          console.error("SignIn failed!", error);
         
        }
      };
      return (
        <div>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              name="userName"
              type="text"
              id="username"
              onChange={(e) => dataOnChange(e)}
              required
            />
            

        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          id="password"
          onChange={(e) => dataOnChange(e)}
          required
        />
         <button type="submit" onClick={notify}>login</button>
            </form>
            </div>)
    
}
export default SignIn;