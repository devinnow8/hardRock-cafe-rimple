import axios from "axios";

// Retrieve token from localStorage
const token = localStorage.getItem("accessToken");
console.log("token", token);

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

export const viewCart = async () => {
  const viewCartAPI =
    "http://192.168.1.204:8000/cart/carts/f7d80dd5845124a551d73857a573e677b43fd0ed/";
  try {
    const response = await axios.get(viewCartAPI, config);
    console.log("response>>>", response)
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addItemInCart = async (payload) => {
  const addAPI =
  "http://192.168.1.204:8000/user/ea70320a-88c1-475a-bd56-4b24c0b76ea2/items/"
  try {
    const response = await axios.post(addAPI, payload, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteItemCart = async (id) => {
  const deleteAPI =`http://192.168.1.204:8000/user/f7d80dd5845124a551d73857a573e677b43fd0ed/items/${id}`;
  try {
    const response = await axios.delete(deleteAPI, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updatedItemInCart = async (body) => {
  const updateAPI =
    "http://192.168.1.204:8000/user/ea70320a-88c1-475a-bd56-4b24c0b76ea2/items/";
  try {
    const response = await axios.put(updateAPI, body, config);
    return response.data;
  } catch (error) {
    return error;
  }
};
