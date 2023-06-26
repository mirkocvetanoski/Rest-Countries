import * as constants from "./constants.js";

// Render HTML
// Dark Mode
const renderHTML = function (country) {
  return (html = `
      <div class="country__card">
          <img src="${country.flags.png}" alt="Country Flag" />
          <h3>${country.name.common}</h3>
          <p id="population">Population: <span>${country.population.toLocaleString(
            "en-US"
          )}</span></p>
          <p>Region: <span>${country.region}</span></p>
          <p>Capital: <span>${country.capital}</span></p>
      </div>`);
};

// Light mode
const renderLightHTML = function (country) {
  return (html = `
      <div class="country__card light__mode--countries-card">
          <img src="${country.flags.png}" alt="Country Flag" />
          <h3>${country.name.common}</h3>
          <p id="population">Population: <span>${country.population.toLocaleString(
            "en-US"
          )}</span></p>
          <p>Region: <span>${country.region}</span></p>
          <p>Capital: <span>${country.capital}</span></p>
      </div>`);
};

// Render HTML Detailed
const renderHTMLDetailed = function (country) {
  return (html = `
        <button class="back__button">&larr; Back</button>
        <div class="country__card-detailed">
          <div>
            <img src="${country.flags.png}" alt="Country Flag" />
          </div>
          <div>
            <h3>${country.name.common}</h3>
            <p>Native Name: <span>${
              Object.values(country.name.nativeName)[0].common
            }</span></p>
            <p id="population">Population: <span>${country.population.toLocaleString(
              "en-US"
            )}</span></p>
            <p>Region: <span>${country.region}</span></p>
            <p>Sub Region: <span>${country.subregion}</span></p>
            <p>Capital: <span>${country.capital}</span></p>     
            <p id='borders'>Border Countries: </p>
          </div>
          <div>
            <p>Top Level Domain: <span>${country.tld[0]}</span></p>
            <p>Currencies: <span>${
              Object.values(country.currencies)[0].name
            }</span></p>
            <p>Langugages: <span>${[
              ...Object.values(country.languages),
            ]}</span></p>     
          </div>
        </div>`);
};

// Render Error
const renderError = function (body) {
  body.innerHTML = constants.errMessage;
  errorMessage = document.querySelector(".error");
  if (localStorage.getItem("mode") === "Light Mode") {
    body.classList.add("light__mode-body");
    errorMessage.classList.add("light__mode-error");
  }
};

// Clear error messages
const removeError = function () {
  if (document.querySelector(".no__found")) {
    document.querySelector(".no__found").remove();
  }
};

// Remove countries cards
const removeCards = function () {
  countriesCards = document
    .querySelectorAll(".country__card")
    .forEach((card) => card.remove());
};

export const renderingHTML = renderHTML;
export const renderingLightHTML = renderLightHTML;
export const renderingHTMLDetailed = renderHTMLDetailed;
export const renderingError = renderError;
export const deleteError = removeError;
export const removeCountries = removeCards;
