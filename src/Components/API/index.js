import axios from "axios";

// Retrieve token from localStorage
const token = localStorage.getItem("accessToken");

// Set the token in headers
const config = {
	headers: {
		Authorization: `Bearer ${token}`,
	},
};

export const getAllCards = async () => {
	try {
		const url = "http://192.168.1.204:8000/list/";
		const response = await axios.get(url, config);
		return response.data;
	} catch (error) {
		return error;
	}
};

const viewCartAPI = "http://192.168.1.204:8000/cart/carts/aca5c83f-1b68-4149-b8a6-1c6b7f2ef062/";

export const viewCart = async () => {
	try {
		const response = await axios.get(viewCartAPI, config);
		return response.data;
	} catch (error) {
		return error;
	}
};

const addAPI = "http://192.168.1.204:8000/cart/carts/aca5c83f-1b68-4149-b8a6-1c6b7f2ef062/items/";

export const addItemInCart = async (payload) => {
	try {
		const response = await axios.post(addAPI, payload, config);
		return response.data;
	} catch (error) {
		return error;
	}
};

const deleteAPI = "http://192.168.1.204:8000/cart/carts/aca5c83f-1b68-4149-b8a6-1c6b7f2ef062/items/{item-id}/";

export const deleteItemInCart = async () => {
	try {
		const response = await axios.delete(deleteAPI, config);
		return response.data;
	} catch (error) {
		return error;
	}
};

const updateAPI = "http://192.168.1.204:8000/cart/carts/aca5c83f-1b68-4149-b8a6-1c6b7f2ef062/items/";

export const updatedItemInCart = async () => {
	try {
		const response = await axios.put(updateAPI, config);
		return response.data;
	} catch (error) {
		return error;
	}
};
