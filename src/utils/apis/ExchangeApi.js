import axios from "axios";

const EXCHANGE_API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY;
const BASE_API_URL = "https://oapi.koreaexim.go.kr/site/program/financial";

// 여러 CORS 프록시 옵션
const CORS_PROXIES = [
  {
    url: "https://api.allorigins.win/raw",
    transform: (url) => `?url=${encodeURIComponent(url)}`,
  },
  {
    url: "https://corsproxy.io",
    transform: (url) => `/?${encodeURIComponent(url)}`,
  },
  {
    url: "https://api.codetabs.com/v1/proxy",
    transform: (url) => `?quest=${encodeURIComponent(url)}`,
  },
];

let currentProxyIndex = 0;

const ExchangeApi = axios.create({
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});

ExchangeApi.interceptors.request.use(
  function (config) {
    // 실제 API URL 생성
    const params = new URLSearchParams({
      authkey: EXCHANGE_API_KEY,
      data: "AP01",
      ...config.params,
    });

    const targetUrl = `${BASE_API_URL}${config.url}?${params.toString()}`;

    const proxy = CORS_PROXIES[currentProxyIndex];
    config.url = `${proxy.url}${proxy.transform(targetUrl)}`;
    config.params = {};

    // console.log("요청한 프록시 서버:", proxy.url);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

ExchangeApi.interceptors.response.use(
  function (response) {
    // console.log("Response success");
    return response;
  },
  async function (error) {
    const config = error.config;

    // 재시도하지 않았거나 모든 프록시를 시도하지 않은 경우
    if (!config.__retryCount) {
      config.__retryCount = 0;
    }

    if (config.__retryCount < CORS_PROXIES.length - 1) {
      config.__retryCount++;
      currentProxyIndex = (currentProxyIndex + 1) % CORS_PROXIES.length;

      // console.log(
      //   `Retrying with proxy ${currentProxyIndex + 1}/${CORS_PROXIES.length}`
      // );

      // 새로운 프록시로 재시도
      return ExchangeApi.request(config);
    }

    console.error("All proxies failed");
    return Promise.reject(error);
  }
);

export default ExchangeApi;
