import * as constants from "./constants.js";
import * as render from "./render.js";
import * as theme from "./theme.js";
import * as main from "./main.js";

// Selectors
const body = document.querySelector("body");
const header = document.querySelector(".header");
const countriesContainer = document.querySelector(".countries__container");
let countryContainer = document.querySelector(".country__container");
let countriesCards = document.querySelectorAll(".country__card");
const search = document.querySelector(".input__search");
const logo = document.getElementById("logo");
const searchIcon = document.getElementById("search__icon");
const regionSelect = document.querySelector(".select__region");
const changeMode = document.querySelector(".background__mode-btn");
const modeSvg = document.querySelector(".dark__mode-svg");
let errorMessage = document.querySelector(".error");
let noFound = document.querySelector(".no__found");

// Init
const init = function () {
  const mode = localStorage.getItem("mode");
  if (mode === "Light Mode") {
    theme.elementsMode(
      header,
      body,
      changeMode,
      modeSvg,
      countriesCards,
      search,
      searchIcon,
      regionSelect
    );
  }

  main.renderingCountries(
    constants.link,
    body,
    errorMessage,
    countriesContainer
  );
  search.focus();
};

// Event listeners
// Enter button on laptop
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && search.value) {
    main.searchingForCountry(
      search.value,
      body,
      countriesContainer,
      errorMessage,
      search
    );
  }

  if (e.key === "Enter" && !search.value) {
    render.removeCountries();
    main.renderingCountries(
      constants.link,
      body,
      countriesContainer,
      errorMessage
    );
    render.deleteError();
  }
});

// Search icon
document.addEventListener("click", (e) => {
  if (e.target === searchIcon && search.value) {
    main.searchingForCountry(
      search.value,
      body,
      countriesContainer,
      errorMessage,
      search
    );
  }

  if (e.target === searchIcon && !search.value) {
    render.removeCountries();
    main.renderingCountries(
      constants.link,
      body,
      errorMessage,
      countriesContainer
    );
    render.deleteError();
  }

  // Clear  the input field
  search.value = "";
});

// Logo
logo.addEventListener("click", (e) => {
  location.reload();
});

// Esc button - unfocus the input
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    search.blur();
  }
});

// Change the region
regionSelect.addEventListener("change", () => {
  render.removeCountries();
  render.deleteError();
  main.renderingRegion(body, errorMessage, countriesContainer, regionSelect);
});

// Change the mode
setTimeout(() => {
  changeMode.addEventListener("click", (e) => {
    countriesCards = document.querySelectorAll(".country__card");
    setTimeout(() => {
      theme.elementsMode(
        header,
        body,
        changeMode,
        modeSvg,
        countriesCards,
        search,
        searchIcon,
        regionSelect
      );

      noFound = document.querySelector(".no__found");
      theme.errorMode(body, noFound);

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

window.addEventListener("click", (e) => {
  if (e.target.closest("div").classList.contains("country__card")) {
    // Open details html file
    window.location.href = "details.html";
    // Get the name of the country clicked and set it in local storage
    const country = e.target.closest("div").children[1].textContent;
    localStorage.setItem("country", `${country}`);
  }
});

// Call init function
init();
