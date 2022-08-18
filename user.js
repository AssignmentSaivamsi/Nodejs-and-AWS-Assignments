const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
   email : {
    type : String,
    required : [true, 'Please enter email ID'],
    lowercase : true,
    unique : true,
    validate : [isEmail, 'Please ente valid email'],
},
   password : {
    type : String,
    required : [true, 'Please enter password'],
    minlength : [6, 'Password length must be minimum of 6 characteres']
   }
   
});

// post hook 
// userSchema.post('save', function(doc, next){
//    console.log("new user is created and saved in database", doc);
//    next();
// })

// pre hoook
userSchema.pre('save', async function(next){
   const salt = await bcrypt.genSalt();
   this.password = await bcrypt.hash(this.password, salt);
    next();
})
const User = mongoose.model('user', userSchema);

module.exports =  User;