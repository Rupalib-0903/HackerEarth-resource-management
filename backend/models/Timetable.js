const mongoose = require('mongoose');

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
    Monday: [{
      SubjectId: { type: String, required: true },
      CrId: { type: String, required: true },
      StartTime: { type: String, required: true },
      EndTime: { type: String, required: true }
    }],
    Tuesday: [{
      SubjectId: { type: String, required: true },
      CrId: { type: String, required: true },
      StartTime: { type: String, required: true },
      EndTime: { type: String, required: true }
    }],
    // Add other days as needed
    Tuesday: [{
      SubjectId: { type: String, required: true },
      CrId: { type: String, required: true },
      StartTime: { type: String, required: true },
      EndTime: { type: String, required: true }
    }],
    Wednesday: [{
      SubjectId: { type: String, required: true },
      CrId: { type: String, required: true },
      StartTime: { type: String, required: true },
      EndTime: { type: String, required: true }
    }],
    Thursday: [{
      SubjectId: { type: String, required: true },
      CrId: { type: String, required: true },
      StartTime: { type: String, required: true },
      EndTime: { type: String, required: true }
    }],
    Friday: [{
      SubjectId: { type: String, required: true },
      CrId: { type: String, required: true },
      StartTime: { type: String, required: true },
      EndTime: { type: String, required: true }
    }]
  }
});

const Timetable = mongoose.model('Timetable', TimetableSchema);

module.exports = Timetable;


