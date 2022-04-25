const express = require('express');
const router = express.Router();
const GroupController = require('../controllers/GroupController');
const middleware = require('../middlewares/authentication');

router.get('/getAllGroups', middleware.permissionToken, GroupController.getAllGroup);
router.get('/getByIdGroup/:id', middleware.permissionToken, GroupController.getByIdGroup);
router.post('/createGroup/:id',middleware.permissionToken ,GroupController.createGroup);
router.put('/updateGroup/:id', middleware.permissionToken, GroupController.updateGroup);
router.delete('/deleteGroup/:id', middleware.permissionToken, GroupController.deleteGroup);
module.exports = router
