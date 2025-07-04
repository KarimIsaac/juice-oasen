import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const registerUser = async (req, res) => {
    const {  email, password,  } = req.body;

    try {
        const existingUser = await User.findone({ email });

            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            const hashed = await bcrypt.hash(password, 10);
            const newUser = new User({ email, password: hashed });
            await newUser.save();
            return res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });

        }
                res.status(200).json({ message: 'Login successful', user: { id: user._id, email: user.email } });
            }
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
        
}
