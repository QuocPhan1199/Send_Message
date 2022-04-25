const Repository = require('../repositories/User');

async function signUp (params){
    try{
        const user =await Repository.signUp(params);
        return user;
    }
    catch(error)
    {
        console.log(error);
    }
};

async function logIn(userName, password) {
    try {
        const user = await Repository.logIn(userName, password);
        return user;
    } catch (error) {
        console.log(error);
    }
};

async function getAllUsers()
{
    try {
        const users = await Repository.getAllUsers();
        return users;
    } catch (error) {
        console.log(error);
    }
}

async function deleteUser(id)
{
    try {
        const user = await Repository.deleteUser(id);
        return user;
    } catch (error) {
        console.log(error);
    }
}

async function updateUser(id, params)
{
    try {
        const user = await Repository.updateUser(id, params);
        return user;
    } catch (error) {
        console.log(error);
    }
}

async function getByIdUser(id)
{
    try {
        const user =await Repository.getByIdUser(id);
        return user;
    } catch (error) {
        console.log(error);
    }
};

const AddIdGroup = async (id, idGroup)=>
{
    try {
        const user = await Repository.AddIdGroup(id, idGroup);
        return user;
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
    getByIdUser,
    AddIdGroup
}