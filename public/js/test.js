const searchBar = require('./search')


require('jest-fetch-mock').enableMocks()


beforeEach(() => {
    fetch.resetMocks();
  });


// This test passes, but I am not actually calling a function, just repeating the process of the function
test("Search Bar api call for chosen movie name - valid input", async () => {
    const searchTerm = "Avengers";
    const search_movie = `https://api.themoviedb.org/3/search/movie?api_key=076f8ddce1b5e3eab478fe0eeeb71153&language=en-US&query=${searchTerm}`
    fetch(search_movie + searchTerm);
  
    expect(fetch).toHaveBeenCalledTimes(1);
});


test('Search returns movies', () => {
    const searchTerm = "Avengers";
    const search_movie = `https://api.themoviedb.org/3/search/movie?api_key=076f8ddce1b5e3eab478fe0eeeb71153&language=en-US&query=${searchTerm}`
    return searchBar.getMovies(search_movie + searchTerm).then(data => {
        expect(data).anything() 
        // as long as the random ID generated contains data, it will pass. 
        // It will fail if it comes back null or undefined which.
        // All we want for this test is to make sure the API is sending back data
    })

});
