const mongoose = require('mongoose');
const StockSchema = new mongoose.Schema({
     id : {required: true, type: String },
     name : {required: true, type: String },
     measurementUnit : {required: true, type: String },
     totalPrice : {required: true, type: String },
    pricePerUnit : {required: true, type: String},

    role :{
        type : String ,
        required : true,
        enum :{
            values : ["HR", "MANAGER", "ADMIN", ""],
            message : "{ value} is not a valid role",
        }
    },
    createDate :{
        required : true,
        type : Date,
        default : new Date(),
    },
    updateTime : {required: false, type: Date},
});

module.exports = mongoose.model('stock', StockSchema);

