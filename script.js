const imageBaseUrl = 'https://image.tmdb.org/t/p'
 
// Example image tag
{/* <img class="movie-poster" src="${imageBaseUrl}/w342${movie.posterPath}" alt="${movie.title}" title="${movie.title}"/> */}

const movieGridElem = document.querySelector(".movie-grid")
const normal = document.querySelectorAll(".movie-card")
const searchButton = document.querySelector(".btn")
const clearButton = document.getElementById("clear")
const loadButton = document.getElementById("load")
const nowPlayingButton = document.getElementById("nowplaying")
const topRatedButton = document.getElementById("toprated")
const popularMovieButton = document.getElementById("popularmovies")
const nowPlayingH = document.getElementById("nowplayingh")
const topRatedH = document.getElementById("topratedh")
const popularMovieH = document.getElementById("popularmoviesh")
const input = document.getElementById("search")
const searchForm = document.getElementById("form")
const MY_API_KEY = "d93fc60a631f709bbd87f117bfdce2ce"
var allMovies = new Array() 
var topRatedMovies = new Array() 
var upcomingMovies = new Array() 
var nowPlayingMovies = new Array() 
var pageNumU = 1
var pageNumNP = 1
var pageNumTR = 1
var movie_cat = "now_playing"
var isSearch = false

function displayMovies(movie){
    movieGridElem.innerHTML += `
    <div class="movie-card">
        <img class="movie-poster" src="${imageBaseUrl}/w342${movie.poster_path}" alt="Picture of ${movie.title}" title="${movie.title}"/>
        <h3 class="movie-title"><span class = "grayback">${movie.title}</span></h3>
        <h4 class="movie-votes">Rating: ${movie.vote_average}</h4>
    </div>
    `
}

// movies.forEach(addMovies)
const fetchMovies = async () => {
    try{
        if (movie_cat == "now_playing"){
            var pageNum = pageNumNP
        } else if (movie_cat == "top_rated"){
            var pageNum = pageNumTR
        }
        else{
            var pageNum = pageNumU
        }
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_cat}?api_key=${MY_API_KEY}&language=en-US&page=${pageNum}`)
        const results = await response.json();
        movies = results.results
        console.log(movies)
        // movies.forEach(displayMovies)
        movies.forEach(movie => allMovies.push(movie))
        if (movie_cat == "now_playing"){
            movies.forEach(movie => nowPlayingMovies.push(movie))
            nowPlayingMovies.forEach(displayMovies)
            console.log('nowPlayingMovies: ', nowPlayingMovies);
        } else if (movie_cat == "top_rated"){
            movies.forEach(movie => topRatedMovies.push(movie))
            topRatedMovies.forEach(displayMovies)
            console.log('topRatedMovies: ', topRatedMovies);
        }
        else{
            movies.forEach(movie => upcomingMovies.push(movie))
            upcomingMovies.forEach(displayMovies)
            console.log('upcomingMovies: ', upcomingMovies);
        }
        console.log('allMovies: ', allMovies);
    }
    catch(err) {
        console.error(err)
    }
}

searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    getRightMovies()
    isSearch = true
})

clearButton.addEventListener('click', (event) => {
    isSearch = false
    x_clicked()
})

nowPlayingButton.addEventListener('click', (event) => {
    nowPlayingH.classList.add("visible")
    topRatedH.classList.remove("visible")
    popularMovieH.classList.remove("visible")
    movie_cat = "now_playing"
    movieGridElem.innerHTML = ``
    fetchMovies()
})

topRatedButton.addEventListener('click', (event) => {
    nowPlayingH.classList.remove("visible")
    topRatedH.classList.add("visible")
    popularMovieH.classList.remove("visible")
    movie_cat = "top_rated"
    movieGridElem.innerHTML = ``
    fetchMovies()
})

popularMovieButton.addEventListener('click', (event) => {
    nowPlayingH.classList.remove("visible")
    topRatedH.classList.remove("visible")
    popularMovieH.classList.add("visible")
    movie_cat = "upcoming"
    movieGridElem.innerHTML = ``
    fetchMovies()
})

if (!isSearch){
    window.onscroll = function() {
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
            loadMore()
            fetchMovies()
        }
    }
}

// searchForm.addEventListener('click', clickOutcome)

//make array and push to it only movies whosee titles include innertext
var arr = new Array()

function getRightMovies(){
    // alert(input.value)
    movieGridElem.innerHTML = ``
    arr = new Array()
    const str = input.value.toUpperCase().trim()
    
    for (let i = 0; i < allMovies.length; i++){
        var movie = allMovies[i]
        const title = allMovies[i].title.toUpperCase()
        // var title = movie.title
        if(title.includes(str)){
            arr.push(movie)
            console.log(input.value)
        }
    }
    console.log(arr)
    arr.forEach(displayMovies)
}

function x_clicked(){
    form.reset()
    normalize()
}

function loadMore(){
    if (movie_cat == "now_playing"){
        pageNumNP+=1
    } else if (movie_cat == "top_rated"){
        pageNumTR+=1
    }
    else{
        pageNumU+=1
    }
}

function normalize(){
    movieGridElem.innerHTML = ``
    if (movie_cat == "now_playing"){
        nowPlayingMovies.forEach(displayMovies)
    } else if (movie_cat == "top_rated"){
        topRatedMovies.forEach(displayMovies)
    }
    else{
        upcomingMovies.forEach(displayMovies)
    }
    // allMovies.forEach(displayMovies)
    console.log("all", allMovies)
}

// function contains(movie, string){
//     const title = movie.title
//     return title.includes(string)
// }

function displayResults(data) {
    data.forEach(datum => console.log(datum))
    data.forEach(insert)
    input.innerText("Search GIFs...")
    // map(gifData)
}

function insert(movie){
    url = gif.images.original.url
    console.log(url)
    output.innerHTML += `
    <div class = "gif">
        <img src="${url}" alt="gif">
    </div>
    `
}

fetchMovies()