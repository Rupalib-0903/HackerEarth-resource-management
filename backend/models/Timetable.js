const mongoose = require('mongoose');

const TimeSlotSchema = new mongoose.Schema({
  SubjectId: { type: String, required: true },
  CrId: { type: String, required: true },
  StartTime: { type: String, required: true },
  EndTime: { type: String, required: true },
  selectedByCR: { type: Boolean, default: false } // Field to indicate if slot is highlighted
});

const TimetableSchema = new mongoose.Schema({
  lecturer: {
    LecturerId: { type: String, required: true },
    Name: { type: String, required: true }
  },
  subjects: [{
    SubjectId: { type: String, required: true },
    SubjectName: { type: String, required: true }
  }],
  classes: [{
    CrId: { type: String, required: true },
    year: { type: String, required: true },
    block: { type: String, required: true }
  }],
  table: {
    Monday: [TimeSlotSchema],
    Tuesday: [TimeSlotSchema],
    Wednesday: [TimeSlotSchema],
    Thursday: [TimeSlotSchema],
    Friday: [TimeSlotSchema]
    // Add more days if needed (e.g., Saturday, Sunday)
  }
});

const Timetable = mongoose.model('Timetable', TimetableSchema);

module.exports = Timetable;
