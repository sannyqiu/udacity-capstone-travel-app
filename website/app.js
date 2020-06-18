/* Global Variables */

const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=a1e6c35d46106a09dfb90e59ac8943aa&units=imperial";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

const performAction = () => {
  const zip = document.getElementById("zip").value;
  const userResponse = document.getElementById("feelings").value;
  getWeatherData(baseURL, zip, apiKey).then((data) => {
    postData("/add", {
      date: newDate,
      temp: data.main.temp,
      userResponse,
    }).then(() => {
      updateUI();
    });
  });
};
const getWeatherData = async (baseURL, zip, apiKey) => {
  const res = await fetch(baseURL + zip + apiKey);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
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
const updateUI = async () => {
  const request = await fetch("/data");
  try {
    const allData = await request.json();
    document.getElementById("date").innerHTML = allData.date;
    document.getElementById("temp").innerHTML = allData.temp;
    document.getElementById("content").innerHTML = allData.userResponse;
    console.log("updateUI completed");
  } catch (error) {
    console.log("error", error);
  }
};

document.getElementById("generate").addEventListener("click", performAction);
