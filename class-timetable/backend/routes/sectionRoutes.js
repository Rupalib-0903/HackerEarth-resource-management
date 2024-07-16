const express = require('express');
const multer = require('multer');
const Section = require('../models/section');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('timetable'), async (req, res) => {
    try {
        const { name } = req.body;
        const timetable = req.file ? req.file.path : '';
        const newSection = new Section({ name, timetable });
        await newSection.save();
        res.status(201).json(newSection);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const sections = await Section.find();
        res.status(200).json(sections);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
