const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "8.8.4.4"
]);
const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, "../.env")
});

const mongoose = require("mongoose");

const {watchlists,holdings,positions}=require("./data");
const Holding=require("../models/holdings");
const Position=require("../models/positions");

const dbUrl=process.env.ATLAS_URI;
main()
.then((res)=>{
    console.log("MongoDB connected successfully!");
    return initDB();
})
.catch((err)=>{
    console.log("MongoDB connection error:",err);
})


async function main()
{
    await mongoose.connect(dbUrl);
}

const initDB = async ()=>{
    await Holding.deleteMany({});
    await Position.deleteMany({});
    await Holding.insertMany(holdings);
    await Position.insertMany(positions);
    console.log("data is initialized.");
}

