/*
================
Kalkulator Nilai
================

[INSTRUCTIONS]
Kamu diminta menghitung Nilai Ujian Nasional dari sebuah laporan nilai murid.
Buatlah function kalkulatorNilai yang menerima satu parameter berupa string.
function tersebut akan menghitung total nilai dan memutuskan apakah murid tersebut lulus/tidak.
Adapun ketentuannya:
  - A bernilai 4
  - B bernilai 3
  - C bernilai 2
  - D bernilai 1
  - E bernilai 0
  - Murid dinyatakan TIDAK LULUS jika ada mata pelajaran memperoleh nilai E, selain itu LULUS.

[RULES]
  - WAJIB menggunakan ALGORITMA atau PSEUDOCODE.
*/

// Algorithm or pseudocode here
/* 
STORE `total` with 0
STORE `nilai` with any value (from params)
STORE `e` with 0

FOR `i` EQUALS 0, i LESS THAN length of `nilai`, i PLUS PLUS THEN
  IF `i` of `nilai` EQUALS TO 'A' THEN
    `total` EQUALS `total` PLUS 4
  ELSE IF `i` of `nilai` EQUALS TO 'B' THEN
    `total` EQUALS `total` PLUS 3
  ELSE IF `i` of `nilai` EQUALS TO 'C' THEN
    `total` EQUALS `total` PLUS 2
  ELSE IF `i` of `nilai` EQUALS TO 'D' THEN
    `total` EQUALS `total` PLUS 1
  ELSE IF `i` of `nilai` EQUALS TO 'E THEN
    `total` EQUALS `total` PLUS 0
    `e` PLUS PLUS
  ENDIF
ENDFOR

IF `e` NOT EQUALS TO 0 THEN
  RETURN 'Total Nilai: ' + total + '. Maaf kamu TIDAK LULUS!'
ELSE
  RETURN 'Total Nilai: ' + total + '. Selamat kamu LULUS!'
ENDIF

return `total` */

function kalkulatorNilai(nilai) {
  let total = 0
  let e = 0

  for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] === 'A') {
      total += 4
    } else if (nilai[i] === 'B') {
      total += 3
    } else if (nilai[i] === 'C') {
      total += 2
    } else if (nilai[i] === 'D') {
      total += 1
    } else if (nilai[i] === 'E') {
      total += 0
      e++
    }
  }

  if (e !== 0) {
    return `Total Nilai: ${total}. Maaf kamu TIDAK LULUS!`
  } else {
    return `Total Nilai: ${total}. Selamat kamu LULUS!`
  }
}

console.log(kalkulatorNilai('AABCADDA')) // Total Nilai: 23. Selamat kamu LULUS!
console.log(kalkulatorNilai('AAAAEA')) // Total Nilai: 20. Maaf kamu TIDAK LULUS.
console.log(kalkulatorNilai('ABCDD')) // Total Nilai: 11. Selamat kamu LULUS!
