/* [INSTRUKSI]
Akan dijalankan sebuah operasi matematika dengan urutan kali (+) dan kurang (-).
Function circularOperation akan menerima satu parameter berupa array angka, dan memproses satu per satu angka tersebut.
Proses yang dilakukan adalah mengoperasikan setiap bilangan didalamnya, menggunakan simbol +, dan - berturut-turut.
Simbol akan berotasi kembali ke + jika operasi - sudah dilakukan, sampai semua angka selesai di proses.
Gambaran Proses:
0 + angka pertama - angka kedua + angka ketiga - angka keempat + angka kelima - angka keenam + ... (dan seterusnya)
Function akan mereturn hasil kalkulasi dari operasi tersebut.
Jika tidak ada angka yang diberikan, function akan me-return 0.
Aturan: proses operasi satu per satu, dan TIDAK ADA aturan matematika yang harus memproses * sebelum + / !
[CONTOH]
input: [1, 2, 3, 4, 5]
proses: 0 + 1 - 2 + 3 - 4 + 5
output: 3
input: [5, 4, 3, 2, 1, 2]
proses: 0 + 5 - 4 + 3 - 2 + 1 - 2
output: 1
input: [1, 1, 1, 1]
proses: 0 + 1 - 1 + 1 - 1
output: 0
input: []
proses: 0
output: 0 */
/*
Simpan variabel number bentuk array tipe data angka
Return hasil operasi + dan - secara bergantian dari variabel tersebut
*/

const lat3 = arr => {
  if (!arr.length) return 0

  let result = 0

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result += arr[i]
    } else {
      result -= arr[i]
    }
  }
  return result
}

console.log(lat3([1, 2, 3, 4, 5])) // 3
console.log(lat3([5, 4, 3, 2, 1, 2])) // 1
console.log(lat3([1, 1, 1, 1])) // 0
console.log(lat3([])) // 0
