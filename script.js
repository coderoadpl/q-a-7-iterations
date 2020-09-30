// FOR

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < numbers.length; i++) {
  console.log('[FOR] Value for index ' + i + ' is: ' + numbers[i])
}

const forNumbersMultiplied = []

for (let i = 0; i < numbers.length; i++) {
  forNumbersMultiplied[i] = numbers[i] * 2
}

console.log(forNumbersMultiplied)

// WHILE

let j = 0

while (j < numbers.length) {
  console.log('[WHILE] Value for index ' + j + ' is: ' + numbers[j])
  j++
}

const whileNumbersMultiplied = []

let k = 0

while (k < numbers.length) {
  whileNumbersMultiplied[k] = numbers[k] * 2
  k++
}

console.log(whileNumbersMultiplied)

// FOR OF

let l = 0

for (let number of numbers) {
  console.log('[FOR OF] Value for index ' + l + ' is: ' + number)
  l++
}

const forOfNumbersMultiplied = []

// value inside an array
for (let number of numbers) {
  forOfNumbersMultiplied.push(number * 2)
}

console.log(forOfNumbersMultiplied)

// FOR IN

// property inside an object
for (let key in numbers) {
  console.log('[FOR IN] Value for index ' + key + ' is: ' + numbers[key])
}

const forInNumbersMultiplied = []

for (let key in numbers) {
  forInNumbersMultiplied[key] = numbers[key] * 2
}

console.log(forInNumbersMultiplied)

// ARRAY FUNCTION - .forEach .map

numbers.forEach((element, index, arr) => console.log('[forEach] Value for index ' + index + ' is: ' + element))

// below is equivalent to above
// numbers.forEach((number, i) => console.log('[forEach] Value for index ' + i + ' is: ' + number))

console.log(
  numbers.map((number) => number * 2)
)