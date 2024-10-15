const numberOfFilms = +prompt('How many films did you watched?: ', '')

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

// const a = promt('What is the last one?', '')
// const b = promt('What rating would you give?', '')
// const c = promt('What is the last one?', '')
// const d = promt('What rating would you give?', '')

// personalMoviesDB.movies[a] = b
// personalMoviesDB.movies[c] = d

for (let i = 0; i < 2; i++) {
  const a = promt('What is the last one?', '')
  const b = promt('What rating would you give?', '')

  if (
    a != null &&
    b != null &&
    a != '' &&
    b != '' &&
    a.length < 50 &&
    b.length < 50
  ) {
    personalMoviesDB.movies[a] = b
  } else {
    i--
  }
}

if (personalMoviesDB.count <= 10) {
  console.log('I`ve seen a few films! ')
} else if (30 >= personalMoviesDB.count >= 10) {
  console.log('You have seen sufficient quantity of films!')
} else {
  console.log(' You have you seen a lot of films')
}
console.log(personalMoviesDB)
