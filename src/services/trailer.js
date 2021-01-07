import axios from "axios";

export const Trailer = titleTrailer => {
  let youtubeAPI = 'AIzaSyCqa3oLjX7V3omfkNJO3u-C7h-wmheoWFk'
  return axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youtubeAPI}&q=${titleTrailer}&type=video&maxResults=1`
  });
};
