
const User = require('../schema/user');

const getAllUsers = async (req, res) => {

    const users = await User.find({});
    res.json({users:users});
}

const getUser = async (req, res) => {

    const users = await User.findOne({email:req.query.email});
    res.json({users:users});
}


const storeUser = async (req, res) => {

    const data = req.body;

    const user = new User(data);
    user.save((error, result) => {
        if (error) {
            res.json({status:false});
        } else {
            res.json({status:true});
        }
    });
}

module.exports = { getAllUsers, storeUser, getUser };