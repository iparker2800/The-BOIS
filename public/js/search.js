const main = document.getElementById("content");
const form2 = document.getElementById("form2");
const search = document.getElementById("search");

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    returnMovies(respData.results);
}

function returnMovies(movies) {
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title} = movie;

        const chosen_movie = document.createElement("div");
        chosen_movie.classList.add("searched-movie");

        chosen_movie.innerHTML = `
        <div onclick="location.href = '/${title}'">
            <img class="searched-movie" src="${img_url + poster_path}" alt="${title}"/>
            <p class="searched-movie-title">${title}</p>
        </div>
        `;

        main.appendChild(chosen_movie);
    });
}

 form2.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(search_movie + searchTerm);

        search.value = "";
    }
});
    