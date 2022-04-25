const Message = require('../models/Message');

const createMessage = async (params)=>{
    try {
        const message = await new Message(params);
        await message.save();
        return message;
    } catch (error) {
        console.log(error);
    }
};

const updateMessage = async (id, params)=>{
    try {
        console.log(params);
        const message = await Message.findByIdAndUpdate({_id: id}, {$set: params}, {new: true});
        return message;
    } catch (error) {
        console.log(error);
    }
}

const deleteMessage = async (id) =>{
    try {
        const message = await Message.findByIdAndDelete(id);
        return message;
    } catch (error) {
        console.log(error);
    }
};

const getAllMessage = async ()=>{
    try {
        const messages = await Message.find({});
        return messages;
    } catch (error) {
        console.log(error);
    }
}

const getByIdUser = async (id)=> {
    try {
        const message = await Message.find({user: id});
        return message;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    createMessage,
    updateMessage,
    deleteMessage,
    getAllMessage,
    getByIdUser
}