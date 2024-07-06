const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { first_name, last_name, email, phone, password, user_role, gender, day, month, year } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const dob = new Date(`${year}-${month}-${day}`);
        const user = new User({ first_name, last_name, email, phone, password, user_role, gender, dob });

        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
            res.json({
                message: 'User registered successfully',
                token
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { register, login };
