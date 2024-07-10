const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Student, Faculty } = require('./models/data'); // Import models

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/nitte", { useNewUrlParser: true, useUnifiedTopology: true });  // nitte is the database name

// Register endpoint for students
app.post('/register/student', async (req, res) => {
    const { name, username, email, password, department } = req.body;

    try {
        // Check if student with the same email or username already exists
        const existingStudent = await Student.findOne({ $or: [{ email }, { username }] });
        if (existingStudent) {
            return res.status(400).json({ error: 'Student with this email or username already exists' });
        }

        // Check if email domain is correct
        if (!email.endsWith('@nmamit.in')) {
            return res.status(400).json({ error: 'Please use your @nmamit.in email ID' });
        }

        // Create new student
        const newStudent = await Student.create({ name, username, email, password, department });

        res.status(200).json({ message: 'Student registered successfully', user: newStudent });
    } catch (error) {
        console.error('Student registration error:', error);
        res.status(500).json({ error: 'Student registration failed. Please try again later.' });
    }
});

// Register endpoint for faculty
app.post('/register/faculty', async (req, res) => {
    const { name, username, email, password, department } = req.body;

    try {
        // Check if faculty with the same email or username already exists
        const existingFaculty = await Faculty.findOne({ $or: [{ email }, { username }] });
        if (existingFaculty) {
            return res.status(400).json({ error: 'Faculty with this email or username already exists' });
        }

        // Check if email domain is correct
        if (!email.endsWith('@nmamit.in')) {
            return res.status(400).json({ error: 'Please use your @nmamit.in email ID' });
        }

        // Create new faculty
        const newFaculty = await Faculty.create({ name, username, email, password, department });

        res.status(200).json({ message: 'Faculty registered successfully', user: newFaculty });
    } catch (error) {
        console.error('Faculty registration error:', error);
        res.status(500).json({ error: 'Faculty registration failed. Please try again later.' });
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
