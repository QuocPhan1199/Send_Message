const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const middleware = require('../middlewares/authentication');

router.post('/sign-up', UserController.signUp);
router.post('/login', UserController.logIn);
router.get('/getAllUsers',middleware.verifyToken ,UserController.getAllUsers);
router.delete('/deleteUser/:id',middleware.permissionToken, UserController.deleteUser);
router.put('/updateUser/:id', middleware.permissionToken, UserController.updateUser);
router.get('/getByIdUser/:id', middleware.permissionToken, UserController.getByIdUser);
module.exports = router