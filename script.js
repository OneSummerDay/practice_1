const numberOfFilms = +prompt('How many films did you watched?: ', '')

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

const a = promt('What is the last one?', '')
const b = promt('What rating would you give?', '')
const c = promt('What is the last one?', '')
const d = promt('What rating would you give?', '')

personalMoviesDB.movies[a] = b
personalMoviesDB.movies[c] = d

console.log(personalMoviesDB)
