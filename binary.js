// $node binary.js [decimal]
const byte = 256;
let decimal = process.argv[2]

const getBinarySet = () => {
  const baseBinaryNumbers = []
  for(let i = byte; i >= 1; i /= 2){
    baseBinaryNumbers.push(i)
  }
  return baseBinaryNumbers
}

const toBinary = () => {
  const binarySet = getBinarySet()
  const binaryValues = []

  for(let binary of binarySet) {
    const apply = (binary <= decimal)
    const bit = apply ? 1 : 0;

    if (apply) decimal -= binary
    binaryValues.push(bit)
  }

  return binaryValues.join("")
}


const binary = toBinary()
console.log(binary)