export default function getStudentsByLocation(students, city) {
	let studentsByLocation = [];
	if (Array.isArray(students) && typeof city === 'string'){
		studentsByLocation = students.filter(student => {
			if (student.location === city) 
				return student;
		});
	}
	return studentsByLocation;
}
