import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
	return <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable={false} />;
};

// Function to display a success toast notification
export const showSuccessToast = (message) => {
	toast.success(message);
};

// Function to display an error toast notification
export const showErrorToast = (message) => {
	toast.error(message);
};

// Function to display an info toast notification
export const showInfoToast = (message) => {
	toast.info(message);
};

// Function to display a warning toast notification
export const showWarningToast = (message) => {
	toast.warning(message);
};

export default Toastify;
