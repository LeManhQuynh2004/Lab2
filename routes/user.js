const userController = require("../controller/UserController");

const router = require("express").Router();

//GET ALL USER
router.get('/', userController.getAllUser);

//POST USER
router.post('/', userController.addUser)

//GET AN USER
router.get('/:id', userController.getAnUser);

//DELETE AN USER
router.delete('/:id', userController.deleteUser);

//UPDATE USER
router.put('/:id', userController.updateUser);

module.exports = router;