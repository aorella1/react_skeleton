const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
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

app.post('/sign_up_user',(req,res) => {
	MongoClient.connect('mongodb+srv://admin:wegmansApp@wegmansapp-uin85.mongodb.net/users',(err,client) => {
		console.log(req.body);
		db = client.db('accounts');
		db.collection('users').insertOne(req.body, (err,result) => {
			if (err && err.code === 11000){
				res.json(err);
				return;
			}
			console.log('saved to database');
			res.json(
				{ 
					message: `User ${req.body._id} was successfully entered!`
				}
			);
		});
	});

});
