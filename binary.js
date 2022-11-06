// $node binary.js [decimal]
const byte = 256;
let decimal = process.argv[2]

const getBinarySet = () => {
  const baseBinaryNumbers = []
  for(let i = 1; i <= byte; i *= 2){
    baseBinaryNumbers.push(i)
  }

  console.log(baseBinaryNumbers)

  return baseBinaryNumbers.reverse()
}

const toBinary = () => {
  const binarySet = getBinarySet()
  const binaryArr = []

  for(let binary of binarySet) {
    const apply = (binary <= decimal)
    const bit = apply ? 1 : 0;

    if (apply) decimal -= binary
    binaryArr.push(bit)
  }

  return binaryArr.join("")
}


const binary = toBinary()
console.log(binary)