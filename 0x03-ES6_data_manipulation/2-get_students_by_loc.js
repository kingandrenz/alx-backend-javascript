export default function getStudentsByLocation(a, str) {
  if (!Array.isArray(a)) {
    return [];
  }

  const myFilter = a.filter((loc) => loc.location === str);
  return myFilter;
}
