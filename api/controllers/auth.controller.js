import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async(req, res, next) => {
    const { username, email, pass } = req.body;
    const hashedPassword = bcryptjs.hashSync(pass, 10);

    console.log(hashedPassword);

    const newUser = new User({ username, email, pass: hashedPassword });

    try {
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    }
    catch (error) { 
        next(errorHandler(300, 'something went wrong'));
    }
};
