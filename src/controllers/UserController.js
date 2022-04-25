const Services = require("../services/User");
async function signUp(req, res) {
  try {
    const body = req.body;
    const user = await Services.signUp(body);
    if(!user){
      return res.status(403);
    }
    return res.status(200).json(user);
  } catch (error) {
    res.status(403).json(error);
  }
}
async function logIn(req, res) {
  try {
    const userName = req.body.username;
    const password = req.body.password;
    const user = await Services.logIn(userName, password);
    user === "Wrong username" ? res.status(403).json({ error: "Wrong username!" }) 
    : user === "Wrong password" ? res.status(403).json({ error: "Wrong password!" })
    : res.status(200).json({ data: user, message: "Login success!" });
  } catch (error) {
    res.status(403).json(error);
  }
}

async function getAllUsers(req, res){
    try {
        const users = await Services.getAllUsers();
        if(!user)
        {
          return res.status(403);
        }
        res.status(200).json({data: users})
    } catch (error) {
        res.status(403).json(error);
    }
}

async function deleteUser(req, res){
  try {
    const user = await Services.deleteUser(req.params.id);
    if(!user){
      return res.status(403).json('Delete fails!');
    }
    return res.status(200).json('Delete success!');
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(req, res)
{
  try {
    const body = req.body;
    const user = await Services.updateUser(req.params.id, body);
    if(!user)
    {
      return res.status(403).json({message:"Update fails!"});
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
}

async function getByIdUser(req, res)
{
  console.log(req.params.id);
  try {
    const user = await Services.getByIdUser(req.params.id);
    if(!user){
      return res.status(403).json({message:"Does not find user!"});
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  signUp,
  logIn,
  getAllUsers,
  deleteUser,
  updateUser,
  getByIdUser
};
