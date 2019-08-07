function naikAngkot(arrPenumpang) {
  if (!arrPenumpang.length) return []

  rute = ['A', 'B', 'C', 'D', 'E', 'F']

  const result = []
  for (let i = 0; i < arrPenumpang.length; i++) {
    const distance = rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])
    const cost = 2000

    const detail = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: cost * distance
    }
    result.push(detail)
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]))
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])) //[]
