
const apiKey = '6ee9a062207442c1b1a145519230507';

export const fetchWeatherData = async (city) => {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(response);
  return data;
};
