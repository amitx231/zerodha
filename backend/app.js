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
const cors = require("cors");
const cookieParser = require("cookie-parser");

const Holding = require("./models/holdings");
const Position = require("./models/positions");
const app = express();
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/auth");


app.use(cors({
    origin:[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    credentials:true
}));
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRoutes);
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

app.get("/holdings", authMiddleware, async (req, res) => {

    try {

        const allHoldings = await Holding.find({
            userId: req.user.userId
        });

        res.json(allHoldings);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

app.get("/positions",async(req,res)=>{
    let allPosition=await Position.find({});
    res.json(allPosition);
})












const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}.`);
});