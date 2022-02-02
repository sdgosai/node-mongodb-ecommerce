const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    is_deleted:{
        default:false
    },
    name:
    {
        type:String,
        trim:true,
    },
    email:
    {
        type:String,
        trim:true,
    },
    phone:
    {
        type:String,
        trim:true,
        unique:true,
    },
    role:{
        type:Number
    },
    password:
    {
        type:String,
        trim:true,
        minlength:5,
    },
    tokens:[
        {
            token:{
                type:String,
                require:true
            }
        }
    ]
}, { timestamps:true });


// middleware for password hasing
userSchema.pre('save', async function (next){
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

userSchema.methods.genrateAuthToken = async function (){
    try{
        let token = jwt.sign({_id:this._id,role:this.role}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch (err){
        console.log(err);
    }
}

const User = mongoose.model("User", userSchema);
module.exports = User;