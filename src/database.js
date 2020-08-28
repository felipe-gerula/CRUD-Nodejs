const mongoose = require("mongoose");

const {DB_URL} = process.env;

mongoose.connect(process.env.DB_URL,{
    useUnifiedTopology: true ,
    useNewUrlParser: true,
    useCreateIndex : true
}).then(db =>console.log("database is connected"))
    .catch(err => console.log(err));