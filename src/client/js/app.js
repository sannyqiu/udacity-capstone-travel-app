/* Global Variables */
const gn_username = "sanny_1123";
const city = "london";

const wb_apiKey = "ddd41151e0cd42b9afbdc9d717234599";

// Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

const performAction = async () => {
  getDataFromGeoNames(city)
    .then((data) => {
      return postData("http://localhost:3030/geonames", {
        latitude: data.geonames[0].lat,
        longitude: data.geonames[0].lng,
      });
    })
    .then((res) => {
      console.log(`response from geoname ${res}`);
      const lat = res[0].latitude;
      const lng = res[0].longitude;
      return { lat, lng };
    })
    .then((lat, lng) => {
      return getDataFromWeatherBit(lat, lng);
    })
    .then((weatherData) => {
      postData("http://localhost:3030/weatherbit", {
        high: weatherData.data[0].high_temp,
        low: weatherData.data[0].low_temp,
        description: weatherData.data[0].weather.description,
      });
    });
};

const getDataFromGeoNames = async (city) => {
  const url = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${gn_username}`;
  const res = await fetch(url);
  try {
    const data = await res.json();
    console.log(`getGeoName ${data}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getDataFromWeatherBit = async (lat, lng) => {
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${wb_apiKey}`;
  const res = await fetch(url);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

performAction();
export { getDataFromGeoNames, getDataFromWeatherBit, performAction };
