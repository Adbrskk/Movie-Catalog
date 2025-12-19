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
