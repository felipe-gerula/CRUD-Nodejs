const mongoose = require("mongoose");

const {CRUD_NODEJS_HOST , CRUD_NODEJS_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${CRUD_NODEJS_HOST}/${CRUD_NODEJS_DATABASE}`;

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true ,
    useNewUrlParser: true,
    useCreateIndex : true
}).then(db =>console.log("database is connected"))
    .catch(err => console.log(err));