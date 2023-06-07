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
    "http://192.168.1.204:8000/cart/carts/aca5c83f-1b68-4149-b8a6-1c6b7f2ef062/";
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
    "http://192.168.1.204:8000/cart/carts/aca5c83f-1b68-4149-b8a6-1c6b7f2ef062/items/";
  try {
    const response = await axios.post(addAPI, payload, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteItemInCart = async () => {
  const deleteAPI =
    "http://192.168.1.204:8000/cart/carts/aca5c83f-1b68-4149-b8a6-1c6b7f2ef062/items/{item-id}/";
  try {
    const response = await axios.delete(deleteAPI, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updatedItemInCart = async () => {
  const updateAPI =
    "http://192.168.1.204:8000/cart/carts/aca5c83f-1b68-4149-b8a6-1c6b7f2ef062/items/";
  try {
    const response = await axios.put(updateAPI, config);
    return response.data;
  } catch (error) {
    return error;
  }
};
