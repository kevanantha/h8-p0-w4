function ubahHuruf(kata) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyza'
  var result = ''
  for (var i = 0; i < kata.length; i++) {
    var indexAlphabet = alphabet.indexOf(kata[i])
    result += alphabet[indexAlphabet + 1]
  }
  return result
}

// TEST CASES
console.log(ubahHuruf('wow')) // xpx
console.log(ubahHuruf('developer')) // efwfmpqfs
console.log(ubahHuruf('javascript')) // kbwbtdsjqu
console.log(ubahHuruf('keren')) // lfsfo
console.log(ubahHuruf('semangat')) // tfnbohbu
