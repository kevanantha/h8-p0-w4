/* [INSTRUKSI]
Setiap student di HACKTIV8 ditugaskan untuk membuat tim project dengan komposisi tim dua orang.
Kita membutuhkan sebuah program untuk membuat tim-tim tersebut.
Function pairUp akan menerima satu parameter berupa array yang berisi string nama student.
Function ini akan mengelompokkan setiap dua nama menjadi satu kelompok, dan apabila tersisa satu student, student terakhir akan bersama instruktur.
Hasil pengelompokkan adalah sebuah array yang berisi string berupa nama dua orang student sebagai satu tim.
Formatnya adalah <Nama Student 1> dan <Nama Student 2>.
[CONTOH]
input: ['Budi', 'Badu', 'Indra', 'Indri']
output: ['Budi dan Badu', 'Indra dan Indri']
input: ['Budi', 'Badu', 'Indra', 'Indri', 'James']
output: ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
input: []
output: []
Simpan variabel Students berupa array dengan tipe data string
Return 2 nama dalam bentuk gabungan array dengan kata hubung 'dan'
Jika tidak habis dibagi 2 maka sisanya students berpasangan dengan Instruktur */

const lat5 = arr => {
  const result = []

  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] && arr[i + 1]) {
      result.push(`${arr[i]} dan ${arr[i + 1]}`)
    } else {
      result.push(`${arr[i]} dan Instruktur`)
    }
  }
  return result
}

console.log(lat5(['Budi', 'Badu', 'Indra', 'Indri'])) // ['Budi dan Badu', 'Indra dan Indri']
console.log(lat5(['Budi', 'Badu', 'Indra', 'Indri', 'James'])) // ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
console.log(lat5([])) // []
