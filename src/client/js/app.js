/* Global Variables */
const gn_username = "sanny_1123";
const city = "new york".trim();

const wb_apiKey = "ddd41151e0cd42b9afbdc9d717234599";
const pb_apiKey = "17559182-f8032d1d13ae61f3a89baa4b4";

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
      console.log(`return from geoNames`);
      const lat = res[0].latitude;
      const lng = res[0].longitude;
      return { lat, lng };
    })
    .then(({ lat, lng }) => {
      return getDataFromWeatherBit(lat, lng);
    })
    .then((weatherData) => {
      return postData("http://localhost:3030/weatherbit", {
        high: weatherData.data[0].high_temp,
        low: weatherData.data[0].low_temp,
        description: weatherData.data[0].weather.description,
      });
    })
    .then(() => {
      console.log(`after post weatherData /weatherbit`);

      return getDataFromPixabay(city);
    })
    .then((data) => {
      console.log(`data from pixabay ${data}`);
      return postData("http://localhost:3030/pixabay", {
        image: data.hits[0].webformatURL,
      }).then(updateUI());
    });
};

const getDataFromGeoNames = async (city) => {
  const url = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${gn_username}`;
  const res = await fetch(url);
  try {
    const data = await res.json();
    console.log(`getGeonames`);
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
    console.log(`getWeatherbit`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getDataFromPixabay = async () => {
  const url = `https://pixabay.com/api/?key=${pb_apiKey}&q=${city}&image_type=photo`;
  const res = await fetch(url);
  try {
    const data = await res.json();
    console.log(`getPixabay`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateUI = async () => {
  const res = await fetch("http://localhost:3030/data");

  try {
    const allData = await res.json();
    console.log(`get all data ${allData}`);
    document.getElementById("image").src = allData[allData.length - 1].img;

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
    body: JSON.stringify(data),
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
