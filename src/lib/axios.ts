import Axios from 'axios';
const baseURL = process.env.NEXT_PUBLIC_API_URL;
export const axios = Axios.create({
  withCredentials: true,

  baseURL,
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    // console.log("axios error on client side", message);
    error.message = message;
    return Promise.reject(error);
  },
);
