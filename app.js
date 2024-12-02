require("dotenv").config();
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const ps = `darsh%402510`;
const str = `mongodb+srv://darsh2510:${ps}@project.wt9x4.mongodb.net/?retryWrites=true&w=majority&appName=Project`;
const connectDB = require("./connection/connect");
const hostel_router = require("./routers/hostel.js");
const scholar_router = require("./routers/scholar.js");
const join_router = require("./routers/join.js");
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/hostel",hostel_router);
app.use("/api/scholarship",scholar_router);
app.use("/api/joinUs",join_router);
async function start(){
    const conn = await connectDB(str);
    await conn();
    await app.listen(port,()=>{
        console.log(`Server Running on ${port}`);
    })
}
start();