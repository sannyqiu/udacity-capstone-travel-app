import {
  performAction,
  getDataFromGeoNames,
  getDataFromWeatherBit,
  getDataFromPixabay,
  updateUI,
  postData,
} from "./js/app.js";

document.getElementById("generate").addEventListener("click", performAction);

import "./styles/style.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/input.scss";
import "./styles/output.scss";

export {
  performAction,
  getDataFromGeoNames,
  getDataFromWeatherBit,
  getDataFromPixabay,
  updateUI,
  postData,
};
