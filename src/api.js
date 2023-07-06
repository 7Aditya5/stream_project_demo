import api_key from "./secret";
const apiKey = api_key;
console.log(apiKey);

export const fetchWeatherData = async (city) => {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(response);
  return data;
};
