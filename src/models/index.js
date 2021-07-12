import mongoose from "mongoose";

import Account from "./account";

const connectDb = async()  => {
	try {
	   const connectDb= await mongoose.connect(process.env.DATABASE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},);
		return connectDb;
	  } catch (error) {
		handleError(error);
	  }
};

const models = { Account };

export { connectDb };

export default models;
