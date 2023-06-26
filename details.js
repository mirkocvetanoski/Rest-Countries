import * as constants from "./constants.js";
import * as theme from "./theme.js";
import * as main from "./main.js";

// Selectors
const body = document.querySelector("body");
const header = document.querySelector(".header");
const logo = document.getElementById("logo");
const changeMode = document.querySelector(".background__mode-btn");
const modeSvg = document.querySelector(".dark__mode-svg");
let country = document.querySelector(".country__card-detailed");
let errorMessage = document.querySelector(".error");

// Event listeners
// Logo
logo.addEventListener("click", (e) => {
  location.reload();
});

// Change the mode
setTimeout(() => {
  changeMode.addEventListener("click", (e) => {
    setTimeout(() => {
      country = document.querySelector(".country__card-detailed");
      theme.elementsModeDetailed(header, body, modeSvg, changeMode, country);

      const mode = e.target.textContent;
      if (e.target.textContent === "Dark Mode") {
        localStorage.removeItem("mode");
      }
      if (e.target.textContent === "Light Mode") {
        localStorage.setItem("mode", `${mode}`);
      }
    }, 300);
  });
}, 700);

// Select the container to insert html
countryContainer = document.querySelector(".country__container");

// Render the country with details
main.renderingCountryDetailed(
  constants.link,
  header,
  body,
  modeSvg,
  changeMode,
  country,
  errorMessage
);

// Event listeners
// Back button
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("back__button")) {
    // Go back to index html file
    window.location.href = "index.html";
  }
});
