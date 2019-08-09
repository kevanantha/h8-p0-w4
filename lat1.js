const findOdd = arr => {
  const result = []
  const tempNumArray = []
  let tempLettersArray = []

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      tempNumArray.push(arr[i])
    } else {
      tempLettersArray.push(arr[i])
    }
  }

  for (let i = 0; i <= tempNumArray.length - 1; i++) {
    if (tempNumArray[i] % 2 === 1) {
      result.push(tempNumArray[i])
    }
  }
  tempLettersArray = [].concat.apply([], tempLettersArray)

  for (let j = 0; j < tempLettersArray.length; j++) {
    if (j % 2 === 0) {
      let oddLetters = []
      for (let k = 0; k < tempLettersArray[j].length; k++) {
        if (k % 2 === 0) {
          oddLetters.push(tempLettersArray[j][k])
        }
      }
      result.push(oddLetters)
    }
  }
  return result
}

console.log(findOdd([1, 2, 3, 4, 5, 6, ['active', 'bold', 'classic', 'daring']])) // [1, 3, 5, ['a', 't', 'v'], ['c', 'a', 's', 'c'] ]
