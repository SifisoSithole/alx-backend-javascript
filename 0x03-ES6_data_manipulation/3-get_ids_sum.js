export default function getStudentIdsSum(students) {
  const initialValue = 0;
  return students.reduce((accumulator, currentStudent) => accumulator + currentStudent.id,
    initialValue);
}
