function checkAB(num) {
  var cekAB = false

  for (var i = 0; i < num.length; i++) {
    if (num[i] === 'a') {
      if (num[i + 4] === 'b') {
        cekAB = true
        break
      }
    }
    if (num[i] === 'b') {
      if (num[i + 4] === 'a') {
        cekAB = true
        break
      }
    }
  }

  return cekAB
}

// TEST CASES
console.log(checkAB('lana aoarowbd')) // true
console.log(checkAB('lana aobrowed')) // true
console.log(checkAB('lane borrowed')) // true
console.log(checkAB('i am sick')) // false
console.log(checkAB('you are boring')) // true
console.log(checkAB('barbarian')) // true
console.log(checkAB('bacon and meat')) // false
