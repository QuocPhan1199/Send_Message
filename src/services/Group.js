const Repository = require('../repositories/Group');

const getAllGroup = async ()=>{
    try {
        const groups = await Repository.getAllGroup();
        return groups;
    } catch (error) {
        console.log(error);
    }
};

const getByIdGroup = async (id) =>{
    try {
        const group = await Repository.getByIdGroup(id);
        return group;
    } catch (error) {
        console.log(error);
    }
};

const createGroup = async (params)=>{
    try {
        const group = await Repository.createGroup(params);
        return group;
    } catch (error) {
        console.log(error);
    }
};

const updateGroup =async  (id, params)=>{
    try {
        const group = await Repository.updateGroup(id, params);
        return group;
    } catch (error) {
        console.log(error);
    }
};

const deleteGroup = async (id)=>{
    try {
        const group = await Repository.deleteGroup(id);
        return group;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllGroup,
    getByIdGroup,
    createGroup,
    updateGroup,
    deleteGroup
}
