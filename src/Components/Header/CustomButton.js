import React from "react";
import './Header.css'

const CustomButton = ({ title }) => {
    return (
        <div className="custom-btn"><button type="btn btn-primary">{title} </button></div>
    )
}
export default CustomButton;