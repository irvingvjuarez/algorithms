import { byte } from "../globals.js"

export const getBinarySet = () => {
  const baseBinaryNumbers = []
  for(let i = byte; i >= 1; i /= 2){
    baseBinaryNumbers.push(i)
  }
  return baseBinaryNumbers
}