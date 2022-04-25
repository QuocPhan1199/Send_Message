const Repository = require('../repositories/Message');

const createMessage =async (params)=>{
    try {
        const message = await Repository.createMessage(params);

        return message;
    } catch (error) {
        console.log(error);
    }
};

const updateMessage =async (id, params)=>{
    try {
        const message = await Repository.updateMessage(id, params);
        return message;
    } catch (error) {
        console.log(error);
    }
};
  
const deleteMessage = async (id) =>{
    try {
        const message = await Repository.deleteMessage(id);
        return message;
    } catch (error) {
        console.log(error);
    }
};

const getAllMessage = async()=>{
    try {
        const messages = await Repository.getAllMessage();
        return messages;
    } catch (error) {
        console.log(error);
    }
};

const getByIdUserMs = async (id)=>{
    try {
        const messages = await Repository.getByIdUser(id);
        return messages;
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