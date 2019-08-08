function angkaPrima(angka) {
  if (angka === 1) return false
  for (var i = 2; i < angka; i++) {
    console.log(angka % i)
    console.log(angka % i === 0)
    if (angka % i === 0) {
      return false
    }
  }
  return true
}

// TEST CASES
console.log(angkaPrima(3)) // true
console.log(angkaPrima(7)) // true
console.log(angkaPrima(9)) // false
console.log(angkaPrima(6)) // false
console.log(angkaPrima(23)) // true
console.log(angkaPrima(33)) // false
