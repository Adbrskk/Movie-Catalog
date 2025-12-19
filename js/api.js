const API_KEY = "aab786b8";
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(query, page = 1) {
  const res = await fetch(`${BASE_URL}?s=${query}&page=${page}&apikey=${API_KEY}`);
  return res.json();
}

export async function getMovieDetails(id) {
  const res = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  return res.json();
}
