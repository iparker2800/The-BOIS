console.log(movie_details)

fetch(movie_details)
.then(res => res.json())
.then(info => {
    console.log(info)
    movieInfo(info)
})

function movieInfo(info){
    const movieName = document.querySelector('#chosenMovieHeading')
    movieName.innerHTML = info.title;

    const moviePoster = document.querySelector('.moviePoster');
    moviePoster.innerHTML = `<img src="${img_url}${info.poster_path}" alt="${info.title}">`
}

/*
console.log(where_to_watch)
fetch(where_to_watch)
.then(res => res.json())
.then(data => {
    console.log(data)
    streamingServices(data)
})


function streamingServices(data){
    const serviceProvider = document.querySelector('.watchLocation')
    serviceProvider.innerHTML = Object.values(data.results.CA.rent);

    const serviceProviderLogo = document.querySelector('.moviePoster');
    moviePoster.innerHTML = `<img src="${img_url}${data.poster_path}" alt="${data.title}">`
}
*/