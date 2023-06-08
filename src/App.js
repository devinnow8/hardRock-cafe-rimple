import React, { useEffect } from "react";
import "./App.css";
import Routes from "./Routes";
import Toastify from "./Components/Toastify/Toastify";
import { useHistory } from "react-router-dom";

function App() {
	// const history = useHistory();

	// useEffect(()=>{
	// 	let user =  JSON.parse(localStorage.getItem("userInfo"))
	// if(user){
	// 	history.push("/home");
	// }else{
	// 	history.push("/");
	// }
	// },[])
	return (
		<>
			<Toastify />
			<Routes />
		</>
	);
}

export default App;
