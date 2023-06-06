import axios from "axios";
import { createContext, useState } from "react";
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import Home from "../Components/Home/Home";

// Create a new context for authentication state
export const AuthContext = createContext();

const Routes = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Function to toggle authentication status
	const toggleAuth = () => {
		setIsAuthenticated((prevState) => !prevState);
	};

	// Function to handle refreshing the access token
	const handleRefreshToken = async () => {
		try {
			const response = await axios.post("http://192.168.1.204:8000/refresh-token", {
				refreshToken: localStorage.getItem("refreshToken"),
			});
			const { accessToken } = response.data;

			// Update the access token in local storage
			localStorage.setItem("accessToken", accessToken);
			setIsAuthenticated(true);
		} catch (error) {
			console.error("Failed to refresh token!", error);
			handleLogout(); // Clear tokens if refresh fails
		}
	};

	// Function to handle logging out
	const handleLogout = () => {
		// Clear the tokens from local storage
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/register" component={Register} />
					<PrivateRoute
						path="/home"
						component={Home}
						isAuthenticated={isAuthenticated}
						handleRefreshToken={handleRefreshToken}
						handleLogout={handleLogout}
					/>
				</Switch>
			</Router>
		</AuthContext.Provider>
	);
};

const PrivateRoute = ({ component: Component, isAuthenticated, handleRefreshToken, handleLogout, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: "/",
						state: { from: props.location },
					}}
				/>
			)
		}
	/>
);

export default Routes;
