/* function urutkanAbjad(str) {
  return str
    .split('')
    .sort()
    .join('')
} */

// ===

function urutkanAbjad(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  str = str.split('')
  var indexLetters = []
  var isSorted = false
  var result = []

  for (var i = 0; i < str.length; i++) {
    indexLetters.push(alphabet.indexOf(str[i]))
  }

  while (!isSorted) {
    isSorted = true
    for (var j = 1; j < indexLetters.length; j++) {
      if (indexLetters[j - 1] > indexLetters[j]) {
        isSorted = false
        var temp = indexLetters[j - 1]
        indexLetters[j - 1] = indexLetters[j]
        indexLetters[j] = temp
      }
    }
  }

  for (var k = 0; k < indexLetters.length; k++) {
    result.push(alphabet[indexLetters[k]])
  }

  return result.join('')
}

// TEST CASES
console.log(urutkanAbjad('hacktivate')) // 'ehllo'
console.log(urutkanAbjad('armedi')) // 'ehllo'
console.log(urutkanAbjad('isro')) // 'ehllo'
console.log(urutkanAbjad('yusuf')) // 'ehllo'
console.log(urutkanAbjad('kevin')) // 'ehllo'
console.log(urutkanAbjad('dimas')) // 'ehllo'
console.log(urutkanAbjad('gusti')) // 'ehllo'
console.log(urutkanAbjad('hello')) // 'ehllo'
console.log(urutkanAbjad('truncate')) // 'acenrttu'
console.log(urutkanAbjad('developer')) // 'deeeloprv'
console.log(urutkanAbjad('software')) // 'aeforstw'
console.log(urutkanAbjad('aegis')) // 'aegis'
