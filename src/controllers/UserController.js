
const User = require('../schema/user');
const UserProfile = require('../schema/user_profile');

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

const storeUserProfile = async (req, res) => {

    const data = req.body;

    const user = new UserProfile(data);
    user.save((error, result) => {
        if (error) {
            res.json({status:false});
        } else {
            res.json({status:true});
        }
    });
}

const getUserWithProfile = async (req, res) => {
    const userWithProfile = await UserProfile.findOne({phone_number:req.query.phone_number})
    .populate('user_id');
    res.json({user:userWithProfile});
}


module.exports = { getAllUsers, storeUser, getUser, storeUserProfile, getUserWithProfile };