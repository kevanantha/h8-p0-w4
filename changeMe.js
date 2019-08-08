function changeMe(arr) {
  if (!arr.length) console.log('')
  for (var i = 0; i < arr.length; i++) {
    console.log(`${i + 1}. ${arr[i][0]} ${arr[i][1]}:`)
    var year = new Date().getFullYear()
    var result = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: !arr[i][3] || arr[i][3] > year ? 'Invalid Birth Year' : year - arr[i][3]
    }
    console.log(result)
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]) // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]) // ""
