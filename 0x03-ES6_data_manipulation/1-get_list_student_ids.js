export default function getListStudentIds(b) {
  if (!Array.isArray(b)) {
    return [];
  }

  const newArray = b.map((num) => num.id);

  return newArray;
}
