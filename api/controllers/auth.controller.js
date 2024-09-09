import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async(req, res) => {
    const { username, email, pass } = req.body;
    const hashedPassword = bcryptjs.hashSync(pass, 10);

    console.log(hashedPassword);

    const newUser = new User({ username, email, pass: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
};
