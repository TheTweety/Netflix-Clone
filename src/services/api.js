import axios from "axios";

export const Movies = type => {
  let movieAPI = '6d6185ce'
  return axios.create({
    baseURL: `http://www.omdbapi.com/?apikey=${movieAPI}&${type}`
  });
};
