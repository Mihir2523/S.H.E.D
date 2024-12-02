const mongoose = require("mongoose")
const connectDB = (url)=>{
	return new Promise((resolve,reject)=>{
		try{
			resolve(()=>{
				mongoose.connect(url);
				console.log("Database Connected");	
			})
		}
		catch(e){
				reject(()=>{`Error While Connecting ${e}`});
		}
	});
}
module.exports = connectDB;