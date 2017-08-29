const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MonogDB');
	}

	console.log('Connected to mongodb servers ');

	//deleteMany

	/*db.collection('Todos').deleteMany({text: 'asdasd'}).then((results) => {
		console.log(JSON.stringify(results, undefined, 2));
	});
*/

	//deleteOne

	/*db.collection('Todos').deleteOne({text: 'Hello'}).then((result) => {
		console.log(result);
	});*/


	//findOneAndDelete

	/*db.collection('Todos').findOneAndDelete({text: 'Hello'}).then((result) => {
		console.log(result);
	});*/

	//

	db.collection('Users').findOneAndDelete({_id: new ObjectID('59a53536c419b312784a2b4b')}).then((result) => {
		console.log(result);
	});

	//db.close();
});