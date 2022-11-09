const mongoose = require('mongoose');

const bvsRecordSchema = new mongoose.Schema(
    {
        rentPerMonth: {type: Number, "default": 0},
        buyHousePrice: {type: Number, "default": 0},
        buyHouseDownPay: {type: Number, "default": 0},
        rentCost1: {type: Number, "default": 0},
        rentCost5: {type: Number, "default": 0},
        rentCost10: {type: Number, "default": 0},
        rentProfit1: {type: Number, "default": 0},
        rentProfit5: {type: Number, "default": 0},
        rentProfit10: {type: Number, "default": 0},
        buyCost1: {type: Number, "default": 0},
        buyCost5: {type: Number, "default": 0},
        buyCost10: {type: Number, "default": 0},
        buyProfit1: {type: Number, "default": 0},
        buyProfit5: {type: Number, "default": 0},
        buyProfit10: {type: Number, "default": 0},
        mortgageMonthly: {type: Number, "default": 0},
        email: {type: String, "default": ""}
    },
    {timestamps: true}
)

const bvsRecord = mongoose.model("bvsRecord", bvsRecordSchema);
module.exports = bvsRecord;
