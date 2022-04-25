const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
 function generateAuthToken(user)
{
  return jwt.sign({
    id: user.id,
    role: user.role
  },
    process.env.JWT_TOKEN,
    {expiresIn:"1d"}
  );
}

// function generateRefreshToken(user)
// {
//   return jwt.sign({
//     id: user.id,
//     role: user.role
//   },
//     process.env.JWT_REFRESH_TOKEN,
//     {expiresIn:"365d"}
//   );
// }

async function signUp(params) {
  try {
    const user = new User(params);
    await user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
}
async function logIn(username, password) {
  try {
   const user = await User.findOne({username});
   if(!user)
   {
     return "Wrong username";
   }
   const validPassword = await bcrypt.compare(password, user.password);
   if(!validPassword)
   {
     return "Wrong password";
   }
   if(user && validPassword){
    const accessToken = generateAuthToken(user);
    // const refreshToken = generateRefreshToken(user);
    const users = await User.findByIdAndUpdate({_id:user.id},{token:accessToken}, {new:true})
    const {password,...others} = users._doc;
    return {...others};
   }
  
  } catch (error) {
    console.log(error);
  }
}

async function getAllUsers()
{
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(id)
{
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(id, params)
{
  try {
    const user = await User.findByIdAndUpdate(id, params, {new:true});
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function getByIdUser(id)
{
  try {
    const user = await User.findOne({_id: id});
    return user;
  } catch (error) {
    console.log(error);
  }
};

// const AddIdGroup = async (id, idGroup)=>{
//   try {
//     const user = await User.findByIdAndUpdate({_id:id}, {groups: idGroup}, {new: true});
//     return user;
//   } catch (error) {
//     console.log(error);
//   }
  
// }

module.exports = {
  signUp,
  logIn,
  getAllUsers,
  deleteUser,
  updateUser,
  getByIdUser,
  // AddIdGroup
};
