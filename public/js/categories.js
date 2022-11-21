const main = document.querySelector('.main');

fetch(genres_list)
.then(res => res.json())
.then(data => {
    data.genres.forEach(item => {
        fetchMoviesListByGenres(item.id, item.name);
    })
});

const fetchMoviesListByGenres = (id, genres) => {
    fetch(movie_genres + new URLSearchParams({
        with_genres: id,
    }))
    .then(res => res.json())
    .then(data => {
        makeCategoryElement(`${genres}_movies`, data.results);
    })
    .catch(err =>  console.log(err));
}

const makeCategoryElement = (category, data) => {
    main.innerHTML += `
    <div class="movie-list">

        <h1 class="movie-category">${category.split("_").join(" ")}</h1>

        <div class="movie-container" id="${category}">

        </div>

    </div>
    `;
    makeCards(category, data);
}

const makeCards = (id, data) => {
    const movieContainer = document.getElementById(id);
    data.forEach((item, i) => {
        if(item.backdrop_path == null){
            item.backdrop_path = item.poster_path;
            if(item.backdrop_path == null){
                return;
            }
        }

        movieContainer.innerHTML += `
        <div class="movie" onclick="location.href = '/${item.id}'">
            <img src="${img_url}${item.backdrop_path}" alt="${item.title}">
            <p class="movie-title">${item.title}</p>
        </div>
        `;

    })
}