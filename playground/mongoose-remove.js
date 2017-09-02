const{ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mogoose.js');
const {Todo} = require('./../server/models/todo.js');
const{Users} = require('./../server/models/user.js');

/*Todo.remove({}).then((result) => {
	console.log(result);
});*/

Todo.findByIdAndRemove('59a93db49cdb122170254ec8')
	.then((todo) => {
		console.log(todo);
	});