import { getWeatherApi, getWeatherByCity } from "../utils/apis/weatherAPI";

const Login = () => {
  // const getWeather = async () => {
  //   const data = await getWeatherApi();
  // };

  // getWeather();
  const getWeatherCity = async () => {
    const data = await getWeatherByCity();
    console.log(data);
  };
  getWeatherCity();

  return <div>Login</div>;
};

export default Login;
