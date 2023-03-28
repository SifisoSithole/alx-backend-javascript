import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, newGrades) {
  return getStudentsByLocation(students, city).map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    const updatedStudent = {
      ...student,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
    return updatedStudent;
  });
}
