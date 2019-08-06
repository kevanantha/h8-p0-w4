function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  if (money < 50000) return 'Mohon maaf, uang tidak cukup'

  var purchasable = true
  var changeMoney = money
  var listPurchased = []

  while (changeMoney >= 50000 && purchasable) {
    if (changeMoney >= 1500000) {
      listPurchased.push('Sepatu Stacattu')
      changeMoney -= 1500000
    }
    if (changeMoney >= 500000) {
      listPurchased.push('Baju Zoro')
      changeMoney -= 500000
    }
    if (changeMoney >= 250000) {
      listPurchased.push('Baju H&N')
      changeMoney -= 250000
    }
    if (changeMoney >= 175000) {
      listPurchased.push('Sweater Uniklooh')
      changeMoney -= 175000
    }
    if (changeMoney >= 50000) {
      listPurchased.push('Casing Handphone')
      changeMoney -= 50000
    }
    purchasable = false
  }

  var result = { memberId, money, listPurchased, changeMoney }
  return result
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000))
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000))
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)) //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)) //Mohon maaf, uang tidak cukup
console.log(shoppingTime()) ////Mohon maaf, toko X hanya berlaku untuk member saja
