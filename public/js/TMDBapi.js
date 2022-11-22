let chosen_movie_name = location.pathname;

const APIKEY = '076f8ddce1b5e3eab478fe0eeeb71153';
const img_url = "https://image.tmdb.org/t/p/w500";
const genres_list = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}`;
const movie_genres = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&`;
const movie_details = `https://api.themoviedb.org/3/movie/${chosen_movie_name}?api_key=${APIKEY}&`;
const search_movie = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query="`;
const where_to_watch = `https://api.themoviedb.org/3/movie/${chosen_movie_name}/watch/providers?api_key=${APIKEY}`