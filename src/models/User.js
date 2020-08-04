const{Schema,model} = require("mongoose");
const bcryptjs  = require("bcryptjs");

const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    }
},{
    timestamps : true
});

UserSchema.methods.encrypPassword = async password => {
    const solt  = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password,solt);
};

UserSchema.methods.matchPassword = function (password){
    return await bcryptjs.compare(password,this.password)
};

module.exports = model("User",UserSchema);
