import io from "socket.io-client";
// export const BASE_URL = "http://localhost:5000";
export const BASE_URL = process.env.REACT_APP_BASE_URL

export const socket = io.connect(BASE_URL);

export const getTextDirection = (text) => {
    return /^[\u0600-\u06FF\s]+$/.test(text) ? "rtl" : "ltr";
  };