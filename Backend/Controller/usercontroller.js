const User = require('../Model/user.model')
const bcrypt = require('bcrypt')
signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User is already exists" })
        }
        const hashpassword=await bcrypt.hash(password,10)
        const createdUser = new User({
            fullname,
            email,
            password:hashpassword
        })
        await createdUser.save()
        res.status(201).json({ message: "User is created successfully" ,
            data:{
                fullname,email
            }
        }
        )
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" });
    }
}
const login=async(req,res)=>{
    try {
        const{email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
            return res.status(401).json({message:"User Not exists Signup First"})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(401).json({message:"Wrong Password"})
        }
        else{
            res.status(200).json({message:"Login successful",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }


    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" });
    }
}
module.exports={signup,login}