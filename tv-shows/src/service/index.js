import axios from "axios";

const URL = process.env.VUE_APP_BACKEND_API_URL;

export const fetchAllShows = () => {
  return axios.get(`${URL}/shows`);
};

export const searchShows = query => {
  return axios.get(`${URL}/search/shows?q=${query}`);
};

export const getShowDetails = showId => {
  return axios.get(`${URL}/shows/${showId}`);
};

export const getShowCasts = showId => {
  return axios.get(`${URL}/shows/${showId}/cast`);
};

export const getShowImages = showId => {
  return axios.get(`${URL}/shows/${showId}/images`);
};
