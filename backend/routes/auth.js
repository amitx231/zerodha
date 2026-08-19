const express = require("express");
const User = require("../models/users");
const bcrypt = require("bcrypt")
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth");


router.post('/register',async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const existingUser = await User.findOne({email});
        if(existingUser)
        {
            return res.status(400).json({
                message:"User already exists!!"
            });
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({
            name,
            email,
            password:hashedPassword,
            role:"user"
        });
        res.status(201).json({
            message:"User registered successfully!",
            user:{
                id : newUser._id,
                name : newUser.name,
                email : newUser.email,
                role : newUser.role
            }
        });
    
    }
    catch(error){
        console.log(error);
        if(error)
        {
            res.status(400).json({
                message:"Server Error!"
            })
        }
    }

});

router.post("/login",async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user = await User.findOne({email});
        if(!user)
        {
            return res.status(401).json({
                message:"Invalid email or password!"
            });
        }
        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect)
        {
            return res.status(401).json({
                message:"Invalid email or password!"
            });
        }
        //generating token
        //jwt.sign(payload, secret, options)
        const token = jwt.sign(
            {
                userId : user._id,
                role:user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1h"
            }
        )
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            maxAge:60*60*1000
        })
        res.status(200).json({
            message:"User logged in successfully!!",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role
            }
        });


    }
    catch(error)
    {
        console.log(error);
        return res.status(501).json({
            message:"Server Error!"
        });
    }

});

router.get("/me",authMiddleware,async(req,res)=>{
    try {
        const user = await User.findById(req.user.userId);
        if(!user)
        {
            res.status(404).json({
                message:"User not found!"
            });
        }
        return res.status(200).json({
            user,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message:"Server error!"
        });
    }
})

module.exports = router;