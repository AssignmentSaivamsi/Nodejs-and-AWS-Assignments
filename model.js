const mongoose = require('mongoose');

mongoose.model("inventory", {
  name :{
    type : String,
    required : true
  },
  quantity :{
    type : Number,
    required : true
  }
})
