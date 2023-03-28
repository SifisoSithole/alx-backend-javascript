export default function getListStudentsIds(students) {
  let studentIds = [];

  if (Array.isArray(students)) {
    studentIds = students.map((student) => student.id);
  }
  return studentIds;
}
