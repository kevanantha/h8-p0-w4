function countProfit(shoppers) {
  if (!shoppers.length) return []

  let listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ]

  const result = []

  const sepatu = {
    product: listBarang[0][0],
    shoppers: [],
    leftOver: listBarang[0][2],
    totalProfit: 0
  }

  const baju = {
    product: listBarang[1][0],
    shoppers: [],
    leftOver: listBarang[1][2],
    totalProfit: 0
  }

  const sweater = {
    product: listBarang[2][0],
    shoppers: [],
    leftOver: listBarang[2][2],
    totalProfit: 0
  }

  for (let i = 0; i < shoppers.length; i++) {
    const { name, product, amount } = shoppers[i]

    if (listBarang[0][0] === product && amount <= sepatu.leftOver) {
      amount
      sepatu.shoppers.push(name)
      sepatu.leftOver -= amount
      sepatu.totalProfit += listBarang[0][1] * amount
    }

    if (listBarang[1][0] === product && amount <= baju.leftOver) {
      baju.shoppers.push(name)
      baju.leftOver -= amount
      baju.totalProfit += listBarang[1][1] * amount
    }

    if (listBarang[2][0] === product && amount <= sweater.leftOver) {
      sweater.shoppers.push(name)
      sweater.leftOver -= amount
      sweater.totalProfit += listBarang[2][1] * amount
    }
  }
  result.push(sepatu, baju, sweater)
  return result
}

// TEST CASES
console.log(
  countProfit([
    { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
    { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
    { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
  ])
)
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(
  countProfit([
    { name: 'Windi', product: 'Sepatu Stacattu', amount: 8 },
    { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 },
    { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 },
    { name: 'Devi', product: 'Baju Zoro', amount: 1 },
    { name: 'Lisa', product: 'Baju Zoro', amount: 1 }
  ])
)
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]))
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])) //[]
