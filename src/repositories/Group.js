const Group = require("../models/Group");
const User = require("../models/User");

async function getAllGroup()
{
    try {
        const groups = await Group.find({});
        return groups;      
    } catch (error) {
        console.log(error);
    }
};

async function getByIdGroup(id)
{
    try {
        const group = await Group.findOne({_id:id});
        return group;
    } catch (error) {
        console.log(error);
    }
};

async function createGroup(params)
{
    try {
        const group = await new Group(params);
        await group.save();
        return group;
    } catch (error) {
        console.log(error);
    }
};

async function updateGroup(id, params)
{
    try {
        const group = await Group.findByIdAndUpdate(id, params, {new : true});
        return group;
    } catch (error) {
        console.log(error);
    }
};

async function deleteGroup(id)
{
    try {
        const group = await Group.findByIdAndDelete(id);
        return group;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    getAllGroup,
    getByIdGroup,
    deleteGroup,
    updateGroup,
    createGroup

};