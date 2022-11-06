const binary = process.argv[2]
const binaryArr = binary.trim().split("")

const isValidNumber = binaryArr.every(binary => binary < 0 || binary > 1)

if (isValidNumber) {
  console.log("Valid number")
} else {
  throw new Error("Invalid parameter. It must a be a binary number")
}