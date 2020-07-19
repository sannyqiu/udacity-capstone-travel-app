/* Global Variables */
const username = "sanny_1123";
const city = document.getElementById("city").value;

// Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

const getDataFromGeoNames = async () => {
  const url = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${username}`;
  const res = await fetch(url);
  try {
    const data = await res.json();
    console.log(data);
    return { lat: data.geonames[0].lat, lng: data.geonames[0].lng };
  } catch (error) {
    console.log(error);
  }
};

// const performAction = () => {
//   const zip = document.getElementById("zip").value;
//   const userResponse = document.getElementById("feelings").value;
//   if (zip !== "" || userResponse !== "") {
//     getWeatherData(baseURL, zip, apiKey).then((data) => {
//       postData("/add", {
//         date: newDate,
//         temp: data.main.temp,
//         userResponse,
//       }).then(() => {
//         updateUI();
//       });
//     });
//   }
// };
// const getWeatherData = async (baseURL, zip, apiKey) => {
//   const res = await fetch(baseURL + zip + apiKey);
//   try {
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// const postData = async (url = "", data = {}) => {
//   const response = await fetch(url, {
//     method: "POST",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ data }),
//   });
//   try {
//     const newData = await response.json();
//     return newData;
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// const updateUI = async () => {
//   const request = await fetch("/data");
//   try {
//     const allData = await request.json();
//     document.getElementById("date").innerHTML = allData.date;
//     document.getElementById("temp").innerHTML = allData.temp;
//     document.getElementById("content").innerHTML = allData.userResponse;
//     console.log("updateUI completed");
//   } catch (error) {
//     document.getElementById("content").innerHTML = "error!";
//     console.log("error", error);
//   }
// };

// const clickEvent = () => {
//   document.getElementById("generate").addEventListener("click", performAction);
// };

// clickEvent();

export { getDataFromGeoNames };
