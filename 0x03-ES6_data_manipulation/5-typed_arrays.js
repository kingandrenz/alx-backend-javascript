export default function TypedArrays(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8TypedArray = new Int8Array(buffer);
  int8TypedArray[position] = value;
  return buffer;
}
