const key = "7ea2c3b2";
        const movieName = document.getElementById("movieName");
        const searchbtn = document.getElementById('searchbtn');
        const movieDetailsContainer = document.getElementById('movieDetails');

        searchbtn.addEventListener("click", function () {
            const name = movieName.value;

            fetch(`https://omdbapi.com/?apikey=${key}&t=${name}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    showData(data);
                })
                .catch(error => {
                    console.log(error);
                });
        });

        function showData(data) {
            // Clear previous results
            movieDetailsContainer.innerHTML = '';

            if (data.Response === "True") {
                let title = document.createElement("h1");
                title.innerText = data.Title;

                let year = document.createElement("h2");
                year.innerText = data.Year;

                let img = document.createElement("img");
                img.src = data.Poster;

                movieDetailsContainer.append(title, year, img);
            } else {
                // Display an error message or handle the case when the movie is not found
                movieDetailsContainer.innerHTML = '<p>Movie not found!</p>';
            }
        }