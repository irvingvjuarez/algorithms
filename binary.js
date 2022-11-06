// $node binary.js [decimal]
const byte = 256;
const decimal = process.argv[2]

const getBinarySet = () => {
  const baseBinaryNumbers = []
  for(let i = 1; i <= byte; i *= 2){
    baseBinaryNumbers.push(i)
  }

  return baseBinaryNumbers
}


const toBinary = () => {
  const binarySet = getBinarySet()
  console.log(binarySet)
}

toBinary()