import React, { useEffect } from "react";
import axios from "axios";

export const getAllCards = async () => {
  try {
    const url = "http://192.168.1.204:8000/list/";
    const data = await axios.get(url).then((res) => res);
    return data;
  } catch (error) {
    return error;
  }
};