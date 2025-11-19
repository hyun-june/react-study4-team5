import axios from "axios";

const API_IMAGE_KEY = import.meta.env.VITE_API_IMAGE_KEY;

const imageApi = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Accept: "application/json",
    Authorization: API_IMAGE_KEY,
  },
});

const videoApi = axios.create({
  baseURL: "https://api.pexels.com/videos/",
  headers: {
    Accept: "application/json",
    Authorization: API_IMAGE_KEY,
  },
});

export { imageApi, videoApi };