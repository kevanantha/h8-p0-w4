function digitPerkalianMinimum(angka) {
  var length = Math.round(Math.sqrt(angka))
  console.log(Math.sqrt(angka))
  length
  var min = Number.MAX_VALUE

  for (var i = 1; i <= length; i++) {
    if (angka % i === 0) {
      var n1 = i.toString()
      n1
      var n2 = (angka / i).toString()
      n2
      var n3 = (n1 + n2).length
      n3
      if (n3 < min) min = n3
    }
  }
  min
  return min
}

// TEST CASES
console.log(digitPerkalianMinimum(24)) // 2
// console.log(digitPerkalianMinimum(90)) // 3
// console.log(digitPerkalianMinimum(20)) // 2
// console.log(digitPerkalianMinimum(179)) // 4
// console.log(digitPerkalianMinimum(1)) // 2
