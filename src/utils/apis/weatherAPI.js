const WEATHER_API_KEY = import.meta.env.VITE_API_WEATHER_KEY;

// export const getWeatherApi = async () => {
//   const lat = 33.44;
//   const lon = -94.04;
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=${WEATHER_API_KEY}`
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export const getWeatherByCity = async () => {
  const city = "Korea";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=kr&appid=${WEATHER_API_KEY}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
