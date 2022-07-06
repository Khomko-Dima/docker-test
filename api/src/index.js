const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {port, host, DB_URL} = require('./config');
const UserModel = require('./models/user-model');

app.get('/test', (req, res) => {
    res.send("Our api server is working correctly")
});


const start = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(port, async () => {
            console.log(`Started server api on port: ${port}`);
            console.log(`Started server api on host: ${host}`);
            console.log(`Started server api on db: ${DB_URL}`);
            const user = new UserModel({email: 'test', password: '123'})
            console.log('user', user);
            const user1 = await UserModel.find();
            console.log('user test', user1);
        })
    } catch (e) {
        console.log(e)
    }
};
start();
