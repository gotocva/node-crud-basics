

const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.use(express.json());

// custom files import
const { getAllUsers, storeUser, getUser, storeUserProfile, getUserWithProfile } = require('./controllers/UserController');

async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/node-crud', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}

connectDB();

// routes 
app.get('/users', getAllUsers);
app.get('/user', getUser);
app.post('/user/store', storeUser);
app.put('/user/update', storeUserProfile);
app.get('/user-profile', getUserWithProfile)

app.listen(3000, () => {
    console.log('App running on port 3000');
})


