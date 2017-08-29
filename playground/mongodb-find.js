const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MonogDB');
	}

	console.log('Connected to mongodb servers ');

	// db.collection('Todos').find().toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log("Unable to fetch todos", err);
	// });

	//db.close();

	db.collection('Users').find({name: 'Niraj Modi'}).toArray().then((docs) => {

		console.log(JSON.stringify(docs, undefined, 2));
		
	}, (err) => {
		console.log("Unable to fetch todos", err);
	});

});