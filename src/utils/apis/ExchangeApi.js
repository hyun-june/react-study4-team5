import axios from "axios";

const EXCHANGE_API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY;

const ExchangeApi = axios.create();

// 요청 인터셉터
ExchangeApi.interceptors.request.use(
  function (config) {
    const targetUrl = `https://oapi.koreaexim.go.kr/site/program/financial${config.url}`;
    const params = new URLSearchParams({
      authkey: EXCHANGE_API_KEY,
      ...config.params,
    });

    const fullUrl = `${targetUrl}?${params.toString()}`;
    config.url = `https://api.allorigins.win/raw?url=${encodeURIComponent(
      fullUrl
    )}`;
    config.params = {};

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

ExchangeApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error("Response Error:", error);
    return Promise.reject(error);
  }
);

export default ExchangeApi;
