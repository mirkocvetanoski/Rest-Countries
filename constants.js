// API
const API = `https://restcountries.com/v3.1/all`;

// Render Error
const error = `<h1 class="error">Failed to fetch. Please try again! 🙂</h1>`;
const noCountryFound = `<h1 class="no__found">No country found with that name. Please try again! 🙂</h1>`;

export const link = API;
export const errMessage = error;
export const noFoundMessage = noCountryFound;
