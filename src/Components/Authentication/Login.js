import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Routes";
import { showErrorToast, showSuccessToast } from "../Toastify/Toastify";

const Login = () => {
	const [userData, setUserData] = useState({ Email: "", Password: "" });
	const context = useContext(AuthContext);
	const history = useHistory();

	const dataOnChange = (event) => {
		const { name, value } = event.target;
		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			// const response = await axios.post("http://192.168.1.204:8000/signin/", userData);
			context.toggleAuth();
			// localStorage.setItem("accessToken", response.data.accessToken)
			// localStorage.setItem("refreshToken", response.data.refreshToken)
			history.push("/home");
			showSuccessToast("Login Successful!");
			console.log("Login successful!");
		} catch (error) {
			showErrorToast("Login failed");
		}
	};

	const toggleRegister = () => {
		history.push("/register");
	};

	return (
		<div>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username:</label>
				<input name="userName" type="text" id="username" onChange={(e) => dataOnChange(e)} required />

				<label htmlFor="password">Password:</label>
				<input name="password" type="password" id="password" onChange={(e) => dataOnChange(e)} required />
				<button type="submit">login</button>
			</form>
			<p>New User? Create an account</p>
			<button type="submit" onClick={toggleRegister}>
				Register
			</button>
		</div>
	);
};
export default Login;
