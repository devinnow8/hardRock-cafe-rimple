import React, { useEffect } from "react";
import axios from "axios";

const url = "http://192.168.1.204:8000/list/";
export const getAllCards = async () => {
  try {
   
    const data = await axios.get(url).then((res) => res);
    return data;
  } catch (error) {
    return error;
  }
};


const viewCartAPI= "http://192.168.1.204:8000/cart/carts/aca5c83f-1b68-4149-b8a6-1c6b7f2ef062/"
export const viewCart = async () => {
  try {
   const data = await axios.get(viewCartAPI).then((res) => res);
    return data;
  } catch (error) {
    return error;
  }
};

const addAPI= "http://192.168.1.204:8000/cart/carts/aca5c83f-1b68-4149-b8a6-1c6b7f2ef062/items/";

export const addItemInCart = async () => {
    try {
     const data = await axios.get(addAPI).then((res) => res);
      return data;
    } catch (error) {
      return error;
    }
  };

const deleteAPI= "http://192.168.1.204:8000/cart/carts/aca5c83f-1b68-4149-b8a6-1c6b7f2ef062/items/{item-id}/"
export const deleteItemInCart = async () => {
  try {
   const data = await axios.get(deleteAPI).then((res) => res);
    return data;
  } catch (error) {
    return error;
  }
};


const updateAPI= "http://192.168.1.204:8000/cart/carts/aca5c83f-1b68-4149-b8a6-1c6b7f2ef062/items/"
export const UpdatedItemInCart = async () => {
  try {
   const data = await axios.get(updateAPI).then((res) => res);
    return data;
  } catch (error) {
    return error;
  }
};