import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    pass: {
        type: String,
        required: true,
    },
    }, {timeseries: true}); //each user will have two extra info. The time they were created and the time they were last updated

const User = mongoose.model('User', userSchema); // User must me uppercase and singular

export default User;
