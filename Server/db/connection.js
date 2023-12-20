const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://heckerbot007:heckerbot007@cluster0.ht0qobo.mongodb.net/") .then(
    ()=>{console.log("Connected to Database");}
)