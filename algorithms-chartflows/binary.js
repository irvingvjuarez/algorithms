import { getBinarySet } from "./services/getBinarySet.js";

// $node binary.js [decimal]
let decimal = process.argv[2]

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

if (decimal) {
  const binary = toBinary()
  console.log(binary)
} else {
  throw new Error("No parameter provided. $node binary.js [decimal]")
}