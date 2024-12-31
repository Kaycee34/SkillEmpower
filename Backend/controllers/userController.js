import validator from "validator";
import bcrypt from "bcryptjs"; // Updated import
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
    // Login logic goes here
};

// Route for user register
const RegisterUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user exists already or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validate email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hashing user password directly
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });
        const user = await newUser.save();

        // Generate token
        const token = createToken(user._id);

        // Send success response
        res.json({ success: true, token });
    } catch (error) {
        console.error("Error in RegisterUser:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export { loginUser, RegisterUser };
