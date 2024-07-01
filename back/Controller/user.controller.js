const UserModel = require("../Model/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserController = {
    getAll: async (req, res) => {
        try {
            const target = await UserModel.find()
            res.send(target)
        } catch (error) {
            res.send(error)
        }

    },
    get: async (req, res) => {
        try {
            const { id } = req.params
            const found = await UserModel.findById(id)
            res.send(found)
        } catch (error) {
            res.send("error")
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const deleted = await UserModel.findByIdAndDelete(id)
            res.send(deleted)
        } catch (error) {
            res.send(error)
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await UserModel.findOne({ email: email })
            if (user && await bcrypt.compare(password, user.password)) {
                res.status(201).send(
                    {
                        _id: user._id,
                        username: user.username,
                        email: user.email,
                        role: user.role,
                        password: user.password,
                        token: await generateToken({
                            id: user._id,
                            username: user.username,
                            email: user.email,
                            role: user.role,
                        })
                    }
                )
            } else {
                res.send('Password Or Email Incorrect')
            }
        } catch (error) {
            res.send(error)
        }
    },
    register: async (req, res) => {
        try {
            const { username, email, role, password } = req.body
         


            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            const createUser = new UserModel({
                username: username,
                email: email,
                role: role,
                password: hashedPassword
            })

            await createUser.save()

            res.status(201).send(
                {
                    _id: createUser._id,
                    username: createUser.username,
                    email: createUser.email,
                    role: createUser.role,
                    password: createUser.password,
                    token: await generateToken({
                        id: createUser._id,
                        username: createUser.username,
                        email: createUser.email,
                        role: createUser.role,
                    })
                }
            )
        } catch (err) {
            res.send(err)
        }

    },
    getMe: async (req, res) => {
        res.send(req.user)
    }
}



const generateToken = async ({ id, username, email, role }) => {
    return jwt.sign({ id, username, email, role }, process.env.JWT__SECRET__KEY, {
        expiresIn: '10h'
    })
}
module.exports = UserController