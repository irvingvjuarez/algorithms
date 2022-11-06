import { getBinarySet } from "./services/getBinarySet.js"

const binary = process.argv[2]
const binaryArr = binary.trim().split("").map(item => Number(item))

const isValidNumber = binaryArr.every(binary => binary === 0 || binary === 1)
const toDecimal = () => {
  let decimalValue = 0
  const binarySet = getBinarySet().reverse()

  binaryArr.reverse().forEach((num, numIndex) => {
    if (num) {
      decimalValue += binarySet[numIndex]
    }
  })
  
  return decimalValue
}

if (isValidNumber) {
  const decimal = toDecimal()
  console.log(decimal)
} else {
  throw new Error("Invalid parameter. It must a be a binary number")
}