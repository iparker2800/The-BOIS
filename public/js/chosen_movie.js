/*
* Bobby Gabriel
* THE BOIS/Cinesearch
* Software Development/Fall 2022
*
* This script displays the title, poster, and overview of a movie the user has selected
* Used in chosen_movie.pug
*/

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

    const moviePoster = document.querySelector('.chosenMovie');
    moviePoster.innerHTML = `
    <img src="${img_url}${info.poster_path}" alt="${info.title}">
    <div class="chosenMovieInfo">
    </div>
    `

    const movieOverview = document.querySelector('.chosenMovieInfo');
    movieOverview.innerHTML = `<p>${info.overview}</p>`
}
