// Import necessary modules
const Timetable = require('../models/Timetable');

// Controller function to highlight a time slot
const highlightTimeSlot = async (req, res) => {
  const { day, startTime } = req.body; // Extract day and startTime from request body

  try {
    // Find the timetable matching the given day and time
    const timetables = await Timetable.find({
      "schedule.day": day,
      "schedule.startTime": startTime,
    });

    if (!timetables.length) {
      return res.status(404).json({ message: 'No time slot found for the specified day and time.' });
    }

    // Update each matching time slot to be highlighted
    const updatedTimetables = await Promise.all(
      timetables.map(async (timetable) => {
        const updatedSchedule = timetable.schedule.map((slot) => {
          if (slot.day === day && slot.startTime === startTime) {
            slot.highlighted = !slot.highlighted; // Toggle the highlighted state
          }
          return slot;
        });

        timetable.schedule = updatedSchedule;
        await timetable.save(); // Save updated timetable to the database
        return timetable;
      })
    );

    return res.status(200).json(updatedTimetables); // Send the updated timetables as a response
  } catch (error) {
    console.error('Error highlighting time slot:', error);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

module.exports = {
  highlightTimeSlot,
};
