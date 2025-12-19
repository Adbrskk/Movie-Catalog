export function renderMovies(movies) {
  const container = document.getElementById("movies");
  container.innerHTML = "";

  movies.forEach(movie => {
    container.innerHTML += `
      <div class="card">
        <img src="${movie.Poster}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        <button data-id="${movie.imdbID}" class="details">Details</button>
        <button data-id="${movie.imdbID}" class="fav">❤</button>
      </div>
    `;
  });
}
export function renderMovieDetails(movie) {
  const container = document.getElementById("movie-details");
  container.innerHTML = `
    <h2>${movie.Title} (${movie.Year})</h2>
    <img src="${movie.Poster}">
    <p>${movie.Plot}</p>
    <p><strong>Director:</strong> ${movie.Director}</p>
    <p><strong>Actors:</strong> ${movie.Actors}</p>
    <button data-id="${movie.imdbID}" class="fav">❤</button>
  `;
}