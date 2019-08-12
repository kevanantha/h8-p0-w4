function cariModus(arr) {
  arr.sort(function(a, b) {
    return a - b
  })

  var tempArray = []
  var result = []

  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      tempArray.push(arr[i])
    } else {
      result.push(tempArray)
      tempArray = []
    }
    if (i === arr.length - 1) result.push(tempArray)
  }

  result.sort(function(a, b) {
    return b.length > a.length
  })

  var sameNumberInArray = arr.length - result[0].length === 1 ? true : false
  return !result.length || !result[0][0] || sameNumberInArray ? -1 : result[0][0]
}

// TEST CASES
console.log(cariModus([10, 4, 4, 5, 2, 2, 4])) // 4
console.log(cariModus([5, 10, 10, 6, 5])) // 5
console.log(cariModus([10, 3, 1, 2, 5])) // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])) // 3
console.log(cariModus([7, 7, 7, 7, 7])) // -1
