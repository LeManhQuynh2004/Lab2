const { User } = require('../Model/model')

const userController = {
    //GET ALL USER
    getAllUser: async (req, res) => {
        try {
            const users = await User.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //POST USER
    addUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            await newUser.save()
            res.status(200).json("POST SUCCESSFULLY")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //GET AN USER
    getAnUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)

        }
    },
    //DELETE USER
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Delete SuccessFully")
        } catch (error) {
            res.status(500).json(error)

        }
    },
    updateUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            await user.updateOne({'$set' : req.body})
            res.status(200).json("Update SuccessFully")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports = userController;