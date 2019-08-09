const bands = [
  { genre: 'Rap', band: 'Migos', albums: 2 },
  { genre: 'Pop', band: 'Coldplay', albums: 4 },
  { genre: 'Rock', band: 'Breaking Benjamins', albums: 1 }
]

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  return b.albums - a.albums
  // const genreA = a.albums
  // const genreB = b.albums

  // let comparison = 0
  // if (genreA > genreB) {
  //   comparison = 1
  // } else if (genreA < genreB) {
  //   comparison = -1
  // }
  // return comparison
}

console.log(bands.sort(compare))

/* returns [
{ genre: 'Pop', band: 'Coldplay', albums: 4 },
{ genre: 'Rap', band: 'Migos', albums: 2 },
{ genre: 'Rock', band: 'Breaking Benjamins', albums: 1 }
] */
