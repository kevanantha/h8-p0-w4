function fpb(angka1, angka2) {
  var val1 = []
  var val2 = []
  var result = []
  for (var i = 0; i <= angka1; i++) {
    if (angka1 % i === 0) val1.push(i)
  }

  for (var j = 0; j <= angka2; j++) {
    if (angka2 % j === 0) val2.push(j)
  }

  var concatOneTwo = val1.concat(val2)

  for (var k = 0; k < concatOneTwo.length; k++) {
    if (angka1 % concatOneTwo[k] === 0 && angka2 % concatOneTwo[k] === 0) {
      result.push(concatOneTwo[k])
    }
  }
  result.sort(function(a, b) {
    return b - a
  })
  return result[0]
}

// TEST CASES
console.log(fpb(12, 20)) // 4
console.log(fpb(12, 16)) // 4
console.log(fpb(50, 40)) // 10
console.log(fpb(22, 99)) // 11
console.log(fpb(24, 36)) // 12
console.log(fpb(17, 23)) // 1
