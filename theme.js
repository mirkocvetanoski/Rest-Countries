// Chainging mode colors
const modeColors = function (
  header,
  body,
  changeMode,
  modeSvg,
  countries,
  search,
  searchIcon,
  regionSelect
) {
  header.classList.toggle("light__mode-header");

  body.classList.toggle("light__mode-body");

  if (modeSvg.classList.contains("dark__mode-svg")) {
    changeMode.textContent = "Light Mode";
  }

  if (modeSvg.classList.contains("light__mode-svg")) {
    changeMode.textContent = "Dark Mode";
  }

  modeSvg.classList.toggle("light__mode-svg");

  countries
    ? countries.forEach((card) => {
        card.classList.toggle("light__mode--countries-card");
      })
    : "";

  search.classList.toggle("light__mode-input");
  searchIcon.classList.toggle("light__mode-input");

  regionSelect.classList.toggle("light__mode-region");
};

const modeColorsDetailed = function (
  header,
  body,
  modeSvg,
  changeMode,
  country
) {
  header.classList.toggle("light__mode-header");

  body.classList.toggle("light__mode-body");

  if (modeSvg.classList.contains("dark__mode-svg")) {
    changeMode.textContent = "Light Mode";
  }

  if (modeSvg.classList.contains("light__mode-svg")) {
    changeMode.textContent = "Dark Mode";
  }

  modeSvg.classList.toggle("light__mode-svg");

  country.classList.toggle("country__card-detailed-light");

  document
    .querySelectorAll(".border")
    .forEach((el) => el.classList.toggle("country__card-detailed-light"));

  document
    .querySelector(".back__button")
    .classList.toggle("country__card-detailed-light");
};

// Determining error messages color
const errorColor = function (body, noFound) {
  if (noFound && body.classList.contains("light__mode-body")) {
    noFound.style.color = "var(--light-mode-text)";
  }

  if (noFound && !body.classList.contains("light__mode-body")) {
    noFound.style.color = "var(--dark-mode-text)";
  }
};

export const elementsMode = modeColors;
export const elementsModeDetailed = modeColorsDetailed;
export const errorMode = errorColor;
