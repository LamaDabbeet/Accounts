import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
	{
		balance: {
			type: Number,
			required: true,
		},
		status: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true,
		capped: { size: 1024 },
		bufferCommands: false,
		autoCreate: false 
	 }
);

const Account = mongoose.model("Account", accountSchema);

export default Account;
