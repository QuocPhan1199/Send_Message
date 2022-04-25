const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/MessageController');
const middleware = require('../middlewares/authentication');

router.get('/getAllMessage', MessageController.getAllMessage);
router.get('/getByIdUserMs/:id', middleware.permissionToken, MessageController.getByIdUserMs);
router.post('/createMessage/:id', middleware.permissionToken, MessageController.createMessage);
router.put('/updateMessage/:id', middleware.permissionToken, MessageController.updateMessage);
router.delete('/deleteMessage/:id', middleware.permissionToken, MessageController.deleteMessage);
module.exports = router
