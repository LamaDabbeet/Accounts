import AccountModel from "./models/account";

import models, { connectDb } from "./models";
import { accounts } from "./init_data";


connectDb().then(()=>{
		accounts.map(async ({ balance, status }) => {
			try{
				const accountInstance = new AccountModel({
					balance,
					status,
				});
				await accountInstance.save();
			}
			catch(error){
				console.log(error);
			}
		});
}
).catch((err)=>console.log(err))




