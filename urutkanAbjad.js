// function urutkanAbjad(str) {
//   return str
//     .split('')
//     .sort()
//     .join('')
// }

function urutkanAbjad(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyza'
  str = str.split('')

  for (var i = 0; i < str.length; i++) {
    console.log(str[i])
  }
}

// TEST CASES
console.log(urutkanAbjad('hello')) // 'ehllo'
// console.log(urutkanAbjad('truncate')) // 'acenrttu'
// console.log(urutkanAbjad('developer')) // 'deeeloprv'
// console.log(urutkanAbjad('software')) // 'aeforstw'
// console.log(urutkanAbjad('aegis')) // 'aegis'
