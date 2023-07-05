export default function getStudentIdsSum(a) {
  if (!Array.isArray(a)) {
    return [];
  }

  const getIdSum = a.reduce((acc, num) => acc + num.id, 0);
  return getIdSum;
}
