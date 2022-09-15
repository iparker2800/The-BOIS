fetch(popular_movies + new URLSearchParams({
    api_key: APIKEY
  }))
  .then(res => res.json())
  .then(data => {
    data.results.forEach(item => {
        fetchPopMovies(item.poster_path)
    })
  })

  const fetchPopMovies = (poster_path) => {
    fetch(baseImageURL + new URLSearchParams({
      
    }))
    .then(res => res.json())
  }

  const makeMoviePosters = (poster_path) => {
    data.forEach((item) => {
        if(item.backdrop_path == null){
            item.backdrop_path = item.poster_path;
            if(item.backdrop_path == null){
                return;
            }
        }

        movieContainer.innerHTML += `
        <div class="movie" onclick="location.href = '/${item.id}'">
            <img src="${baseImageURL}${item.backdrop_path}" alt="">
            <p class="movie-title">${item.title}</p>
        </div>
        `;
    })
  }