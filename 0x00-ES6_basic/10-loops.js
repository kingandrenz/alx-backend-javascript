export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const idx in array) {
    result.push(appendString + idx);
  }

  return result;
}
