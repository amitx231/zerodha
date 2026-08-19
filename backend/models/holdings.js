const mongoose = require("mongoose");

const holdingsSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Holding = mongoose.model("Holding",holdingsSchema);
module.exports=Holding;