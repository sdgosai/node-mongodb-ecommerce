const User = require("../model/usermodel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
// const tokensender = require('../utils/tokensender')

// Sign up data API ( Local methode)
const addsignupData = async (req, res) => {
    try{
        const { email, password, cpassword } = req.body;
        if(!email || !password || !cpassword){
            return res.status(400).json({
                data: "Email and password is required",
                success: false
            })
        }
        const alreadyExistEmail = await User.findOne({email: email})
        if(alreadyExistEmail){
            return res.status(422).json({
                data: "Email already exist",
                success: false
            })
        } else if (password !== cpassword){
            return res.status(422).json({
                data: "Password not match",
                success: false
            })            
        }
        const addRecord = new User(req.body);
        await addRecord.save();
        console.log(`${addRecord} Record inserted`);
        console.log(addRecord);
        res.status(201).send("Record inserted");
    } catch(err) {
        res.status(400).send(err.message);
    }
}

// Login data API ( Local methode)
const addLoginData = async (req, res) => {
    try{
        let token;
        const { email, password } = req.body;
        if (!email || !password ) {
        return res.status(400).json({error: "Email and password is required" });
    }
    const userLogin = await User.findOne({ email: email });
    if(userLogin){
        const isMatch = await bcrypt.compare(password, userLogin.password);
        if(!isMatch){
            res.status(400).json({message: "user login error"});
        } else {  
            token = await userLogin.genrateAuthToken();
            res.status(200).send(userLogin);
            // console.log(userLogin);
            // tokensender(userLogin,200,res)
        } 
        } else {
            res.status(400).json({message: "user login error"});
        }
    } catch (err) {
        console.log(err);
    }
}

// const getLogout = async (req, res) => {
    // var token  = req.user.token;
    // const { token }  = req.body
    // console.log(Users);
    // console.log(token)
    // jwt.verify(token, SECRET_KEY);
    // jwt.destroy(token)
    // req.token.delete();
    // token.expire();
    // req.user.token({
    //     expiresIn:Date.now()
    // })
    // req.logout();
    // res.status(200).json({
        // message:"logout..."
    // })
    // res.status(400).json("error occourd")
// }

// Logout data API ( Local methode)
const getLogout = async (req, res) => {
    // let token  = req.cookie;
    // let decode = jwt.verify(token, process.env.SECRET_KEY)
    // console.log(decode);
    // return res.status(200).json({
    //     success: true,
    //     message: "Logout successfull"
    // })
}

const getUser = async (req,res) => {
    try{
        const role = req.params.role;
        const getsRecord =  await User.find({role})
        res.status(200).send(getsRecord);
    }catch(err) {
        res.status(400).send(err.message);
    }
}

module.exports = {addsignupData, addLoginData, getLogout, getUser};