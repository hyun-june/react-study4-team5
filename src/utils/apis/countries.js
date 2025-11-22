import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_COUNTRY_URL,
  headers: {
    Accept: "application/json",
  },
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    // console.log("API 요청:", config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API 응답 오류:", error);
    return Promise.reject(error);
  }
);

export const getCountryInfo = async (name) => {
  if (!name) return null;
  try {
    const response = await api.get(
      `/name/${name}?fields=name,capital,population,currencies,flags`
    );
    return response.data[0];
  } catch (error) {
    console.error("API 요청오류", error);
    return null;
  }
};
