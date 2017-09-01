const{ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mogoose.js');
const {Todo} = require('./../server/models/todo.js');
const{Users} = require('./../server/models/user.js');

// var id = "59a81bee0b89fb0425ecfd42";

// if(!ObjectId.isValid(id)){
// 	return console.log('ID is invalid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	if (!todos) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todos: ',todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo: ',todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by id: ',todo);
// }).catch((e) => console.log(e));

var user_id = "59a6c61aab419668229c692c";

Users.findById(user_id).then((user) => {
	if(!user) {
		return console.log('User not found');
	}
	console.log('User Found :',JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));