const res = require("express/lib/response");
const Services = require("../services/Group");

const getAllGroup = async (req, res)=>{
    try {
        console.log("Hello");
        console.log(req.params.id);
        const groups = await Services.getAllGroup();
        if(!groups)
        {
            return res.status(403).json({message: "Get all fail!"});
        }
        res.status(200).json(groups);
    } catch (error) {
        res.status(403).json(error);
    }
};

const getByIdGroup = async (req, res)=>{
    try {
        const group = await Services.getByIdGroup(req.params.id);
        if(!group)
        {
            return res.status(403).json({message:"Does not find group!"});
        }
        res.status(200).json(group);
    } catch (error) {
        res.status(403).json(error);
    }
}

const createGroup = async(req, res)=>{
    try {
        const body = req.body;
        // console.log(body.id);
        const group = await Services.createGroup(
            // name: body.name,
            // users: body.id
        body);
        if(!group)
        {
            return res.status(403).json({message: "Create group fail!"});
        }
        res.status(200).json(group);
    } catch (error) {
        res.status(403).json(error);
    }
}

const updateGroup = async (req, res)=>{
    try {
        const body = req.body;
        const group = await Services.updateGroup(req.params.id, body);
        if(!group)
        {
            return res.status(403).json({message:"Update group fail!"});
        }
        res.status(200).json(group);
    } catch (error) {
        res.status(403).json(error);
    }
};

const deleteGroup = async (req, res)=>{
    try {
        const group = await Services.deleteGroup(req.params.id);
        if(!group)
        {
            return res.status(403).json({message: "Deleted group fail!"});
        }
        res.status(200).json({message: "Delete group success!"});
    } catch (error) {
        res.status(403).json(error);
    }
}
module.exports = {
    getAllGroup,
    getByIdGroup,
    createGroup,
    updateGroup,
    deleteGroup

}