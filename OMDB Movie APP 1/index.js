function searchMovie() {
    const apiKey = 'omdbapi.com'; 
    const searchInput = document.getElementById('searchInput').value;

    if (searchInput === '') {
        alert('Please enter a movie title');
        return;
    }

    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(searchInput)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovieDetails(data);
            } else {
                alert('Movie not found!');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayMovieDetails(movie) {
    const movieDetailsContainer = document.getElementById('movieDetails');
    movieDetailsContainer.innerHTML = `
        <h2>${movie.Title}</h2>
        <p><strong>Year:</strong> ${movie.Year}</p>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <img src="${movie.Poster}" alt="${movie.Title} Poster" style="max-width: 300px;">
    `;
}
