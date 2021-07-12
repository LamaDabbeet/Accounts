import express from "express";
import cors from "cors";
import "dotenv/config";

import models, { connectDb } from "./models";

const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'react-app/build')));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/react-app/build/index.html"));
});

app.get("/api/accounts", (req, res) => {
	models.Account.find({}, (error, data) => {
		if (data) {
			return res.send({
				data,
			});
		}
	});
});
app.patch('/api/accounts/:id', async (req, res) => {
	models.Account.findById(req.params.id, function (err, account) {
	  if (err)
	  res.send(err);
	  account.status = req.body.status ? req.body.status : account.status;
	  
	  account.save(function (err) {
		if (err)
		  err.json(err);
		res.json({
		  message: 'Account status updated',
		  data: account
		});
	  });
	});
  });
connectDb().then(async () => {
try{
	app.listen(process.env.PORT, () =>
	console.log(`App ready and listening on port ${process.env.PORT}!`)
);
}
catch(err){
	console.log(err)
  }	
});
