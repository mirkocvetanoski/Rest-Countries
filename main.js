import * as render from "./render.js";
import * as theme from "./theme.js";
import * as constants from "./constants.js";

// Fetch the API and add all countries to the container
const renderCountries = async function (
  url,
  body,
  errorMessage,
  countriesContainer
) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const mode = localStorage.getItem("mode");
    mode === "Light Mode"
      ? data.forEach((country) => {
          const html = render.renderingLightHTML(country);
          countriesContainer.insertAdjacentHTML("beforeend", html);
        })
      : data.forEach((country) => {
          const html = render.renderingHTML(country);
          countriesContainer.insertAdjacentHTML("beforeend", html);
        });
  } catch (err) {
    render.renderingError(body);
  }
};

// Fetch the API add country to container
const renderCountryDetailed = async function (
  url,
  header,
  body,
  modeSvg,
  changeMode,
  country,
  errorMessage
) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Get the country from local storage
    const countryLocalStorage = localStorage.getItem("country");
    const mode = localStorage.getItem("mode");

    data.forEach((country) => {
      if (countryLocalStorage === country.name.common) {
        const html = render.renderingHTMLDetailed(country);
        countryContainer.insertAdjacentHTML("beforeend", html);

        // Add borders one by one
        const borders = document.getElementById("borders");
        country.borders
          ? [...Object.values(country.borders)].forEach((el) =>
              borders.insertAdjacentHTML(
                "beforeend",
                `<span class='border'>${el}</span>`
              )
            )
          : borders.insertAdjacentHTML(
              "beforeend",
              `<span class='border'>Island</span>`
            );
      }
    });

    if (mode === "Light Mode") {
      country = document.querySelector(".country__card-detailed");
      theme.elementsModeDetailed(header, body, modeSvg, changeMode, country);
    }
  } catch (err) {
    render.renderingError(body);
  }
};

// Search country
const searchForCountry = async function (
  query,
  body,
  countriesContainer,
  errorMessage,
  search
) {
  try {
    // Clean inner HTML
    render.removeCountries();
    render.deleteError();

    const response = await fetch(constants.link);
    const data = await response.json();

    const foundCountries = [];

    data.forEach((country) => {
      if (country.name.common.toLowerCase().includes(query.toLowerCase())) {
        const html = render.renderingHTML(country);
        countriesContainer.insertAdjacentHTML("beforeend", html);
        foundCountries.push(country);
      }
    });

    if (foundCountries.length === 0) {
      countriesContainer.insertAdjacentHTML(
        "beforeend",
        constants.noFoundMessage
      );
    }

    countriesCards = document.querySelectorAll(".country__card");
    if (body.classList.contains("light__mode-body")) {
      countriesCards.forEach((card) => {
        card.classList.add("light__mode--countries-card");
      });
    }

    noFound = document.querySelector(".no__found");
    theme.errorMode(body, noFound);

    // Clear  the input field
    search.value = "";
  } catch (err) {
    render.renderingError(body);
  }
};

// Change the region
const changeRegion = async function (
  region,
  body,
  errorMessage,
  countriesContainer,
  regionSelect
) {
  try {
    const response = await fetch(constants.link);
    const data = await response.json();

    data.forEach((country) => {
      if (region === country.region) {
        const html = render.renderingHTML(country);
        countriesContainer.insertAdjacentHTML("beforeend", html);
      }
    });
  } catch (err) {
    render.renderingError(body);
  }

  // Change mode of cards
  countriesCards = document.querySelectorAll(".country__card");
  if (regionSelect.classList.contains("light__mode-region")) {
    countriesCards.forEach((card) => {
      card.classList.toggle("light__mode--countries-card");
    });
  }
};

// Render region
const renderRegion = function (
  body,
  errorMessage,
  countriesContainer,
  regionSelect
) {
  if (regionSelect.value === "All") {
    renderingCountries(constants.link, body, errorMessage, countriesContainer);
  }

  if (regionSelect.value === "Africa") {
    changeRegion(
      regionSelect.value,
      body,
      errorMessage,
      countriesContainer,
      regionSelect
    );
  }

  if (regionSelect.value === "Americas") {
    changeRegion(
      regionSelect.value,
      body,
      errorMessage,
      countriesContainer,
      regionSelect
    );
  }

  if (regionSelect.value === "Asia") {
    changeRegion(
      regionSelect.value,
      body,
      errorMessage,
      countriesContainer,
      regionSelect
    );
  }

  if (regionSelect.value === "Europe") {
    changeRegion(
      regionSelect.value,
      body,
      errorMessage,
      countriesContainer,
      regionSelect
    );
  }

  if (regionSelect.value === "Oceania") {
    changeRegion(
      regionSelect.value,
      body,
      errorMessage,
      countriesContainer,
      regionSelect
    );
  }
};

export const renderingCountries = renderCountries;
export const renderingCountryDetailed = renderCountryDetailed;
export const searchingForCountry = searchForCountry;
export const changingRegion = changeRegion;
export const renderingRegion = renderRegion;
