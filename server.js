const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend',(req,res) => {
	res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname+"/wegmans_app/public/index.html"));
});

let db;
app.get('/get_user',(req,res) => {
	MongoClient.connect('mongodb+srv://admin:wegmansApp@wegmansapp-uin85.mongodb.net/users',(err,client) => {
		if (err) return console.log(err);
		console.log("CONNECTED!");
		db = client.db('accounts');
		let cursor = db.collection('users').find();
		cursor.toArray(function(err,results) {
			if (err)
				return console.log(err);
			res.json(results);
		});
	})	
});
