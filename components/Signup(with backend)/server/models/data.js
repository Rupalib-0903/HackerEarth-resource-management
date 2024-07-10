const mongoose = require('mongoose');

// Define schema for students
const studentSchema = new mongoose.Schema({
    name: String,
    username: { type: String, unique: true },
    department: String,
    email: { type: String, unique: true },
    password: String
});

// Define schema for faculty
const facultySchema = new mongoose.Schema({
    name: String,
    username: { type: String, unique: true },
    department: String,
    email: { type: String, unique: true },
    password: String
});

// Create models based on the schemas
const Student = mongoose.model("Student", studentSchema);
const Faculty = mongoose.model("Faculty", facultySchema);

module.exports = { Student, Faculty };
