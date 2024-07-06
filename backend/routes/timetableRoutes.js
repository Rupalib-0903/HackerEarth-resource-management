const express = require('express');
const router = express.Router();
const Timetable = require('../models/Timetable');

// Fetch all timetables
router.get('/', async (req, res) => {
  try {
    const timetables = await Timetable.find();
    res.json(timetables);
  } catch (err) {
    console.error('Error fetching timetables:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Highlight selected time slot
router.post('/highlight-timeslot', async (req, res) => {
  const { lecturerId, day, startTime } = req.body;
  try {
    const timetable = await Timetable.findOne({ 'lecturer.LecturerId': lecturerId });
    if (!timetable) {
      return res.status(404).json({ message: 'Timetable not found' });
    }

    // Find and update the selected time slot
    let found = false;
    timetable.table[day].forEach(slot => {
      if (slot.StartTime === startTime) {
        slot.selectedByCR = true; // Flag to indicate selected by CR
        found = true;
      } else {
        slot.selectedByCR = false;
      }
    });

    if (!found) {
      return res.status(404).json({ message: 'Time slot not found in timetable' });
    }

    await timetable.save();
    res.json({ message: 'Time slot highlighted successfully' });
  } catch (err) {
    console.error('Error highlighting time slot:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

