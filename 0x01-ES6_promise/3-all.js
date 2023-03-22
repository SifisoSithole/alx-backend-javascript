import uploadPhoto from "./utils"
import createUser from "./utils"

function handleError() {
	console.error('Signup system offline');
}

uploadPhoto().then(result => {
	process.stdout.write(result.body + " ");
}).then(() => {
	createUser().then(result => {
		console.log(result.firstName + " " + result.lastName);
	}).catch(handleError);
}).catch(handleError);
