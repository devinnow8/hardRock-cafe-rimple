import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import MainBody from "./Components/MainBody/MainBody.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
