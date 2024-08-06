const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    jwt.sign({
      _id},
      process.env.JWT_SECRET,
      { expiresIn : '3d'}
    )
}

// login a user
const loginUser = async (req, res) => {
  res.json({mssg: 'login user'})
}

// signup a user
const signupUser = async (req, res) => {
    console.log(req.body,'req-body')
    const {email, password} = req.body

    
    console.log(email,password)

    try {
      const user = await User.signup(email, password)

  
      res.status(200).json({email, user})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
 
}

module.exports = { signupUser, loginUser }