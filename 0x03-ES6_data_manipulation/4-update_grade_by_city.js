export default function updateStudentGradeByCity(listOfStudent, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
  if (Array.isArray(listOfStudent)) {
    return listOfStudent
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .find((grades) => grades.studentId === student.id) || defaultGrade).grade,
      }));
  }

  return [];
}
