const { default: mongoose } = require("mongoose");
const JWT = require('jsonwebtoken')
const bcrypt =require('bcrypt')
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [2, "name must have 2 char"],
    maxLength: [50, "name must be less than 50 char"],
    trim: true,
  },
  email: {
    type: String,
    unique: [true, "already useed email"],
    required: [true, "email is requieed"],
    lowercase: true,
  },
  password: {
    type: String,
    select: false,
  },
  forgotPasswordToken: { type: String },
  forgotPasswordExpiryDate: { type: String },

},{
  timestamps:true
});

userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    return next();
  }

  this.password=await bcrypt.hash(this.password,10);
  return next();

})

userSchema.methods={
  jwtToken(){
    return JWT.sign({
      id:this._id,email:this.email
    },
    process.env.SECRET,{expireIn:'24h'})
  }
}

const userModel = mongoose.model("user", userSchema)
module.exports=userModel;
