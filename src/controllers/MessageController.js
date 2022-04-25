const { json } = require('express/lib/response');
const Services = require('../services/Message');

const createMessage = async (req, res)=>{
    try {
        const body = req.body;
        const message = await Services.createMessage({
            content: body.message,
            user: req.user.id
        });
        if(!message)
        {
            return res.status(403);
        }
        res.status(200).json(message);
    } catch (error) {
        res.status(403).json(error);
    }
};

const updateMessage = async (req, res)=>{
    try {
        const body = req.body;
        console.log(body.id);
        const message = await Services.updateMessage(body.id,{
            content: body.message
        });
        if(!message)
        {
            return res.status(403);
        }
        res.status(200).json(message);
    } catch (error) {
        console.log(error);
    }
};
 
const deleteMessage = async (req, res)=>{
    try {
        const message = await Services.deleteMessage(req.body.id);
        if(!message)
        {
            return res.status(403);
        }
        res.status(200).json({message: "Delete Success!"});
    } catch (error) {
        console.log(error);
    }
}

const getAllMessage = async (req, res)=> {
    try {
        const messages = await Services.getAllMessage();
        if(!messages)
        {
            return res.status(403);
        }
        res.status(200).json(messages);
    } catch (error) {
        console.log(error);
    }
}

const getByIdUserMs = async (req, res)=>{
    try {
        const messages = await Services.getByIdUserMs(req.user.id);
        if(!messages)
        {
            return res.status(403);
        }
        res.status(200).json(messages);
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    createMessage,
    updateMessage,
    deleteMessage,
    getAllMessage,
    getByIdUserMs
}