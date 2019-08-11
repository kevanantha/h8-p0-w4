/* Poin Calculator
================
[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5
[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()
[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5 */

const poinCalculator = str => {
  let gold = 0
  let silver = 0
  let bronze = 0
  let total = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'G') {
      gold++
      total += 2
    } else if (str[i] == 'S') {
      silver++
      total += 1
    } else {
      bronze++
      total += 0.5
    }
  }
  return `jumlah Gold: ${gold}, jumlah Silver: ${silver}, jumlah Bronze: ${bronze}. Dan totalnya adalah: ${total}`
}

console.log(poinCalculator('GSB'))
console.log(poinCalculator('GGS'))
console.log(poinCalculator('BSB'))
