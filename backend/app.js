if(process.env.NODE_ENV!="production")
{
    require("dotenv").config();
}

const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "8.8.4.4"
]);

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Holding = require("./models/holdings");
const Position = require("./models/positions");
const app = express();

app.use(cors());
app.use(bodyParser.json());
1
// const dbUrl="mongodb://127.0.0.1:27017/zerodha";
const dbUrl=process.env.ATLAS_URI;
main()
.then((res)=>{
    console.log("MongoDB connected successfully!");
})
.catch((err)=>{
    console.log("MongoDB connection error:",err);
})


async function main()
{
    await mongoose.connect(dbUrl);
}

app.get('/',(req,res)=>{
    res.send("App is working !");
});

app.get("/holdings",async(req,res)=>{
    let allHoldings=await Holding.find({});
    res.json(allHoldings);
})

app.get("/positions",async(req,res)=>{
    let allPosition=await Position.find({});
    res.json(allPosition);
})










const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}.`);
});