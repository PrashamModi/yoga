const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,  
        required : true
    }, 
    email : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true,
        min : [18, 'Below age limit'],
        max : [65, 'Above age limit']
    },
    batchTime : {
        type : String,
        // required : [true, 'Batch time is required']
    },
})

module.exports = mongoose.model("user", userSchema);