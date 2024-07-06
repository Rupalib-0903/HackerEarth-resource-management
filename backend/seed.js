const mongoose = require('mongoose');
require('dotenv').config();
const Timetable = require('./models/Timetable'); // Update this path based on your project structure

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const timetables = [
  {
    lecturer: {
      LecturerId: 'CC01',
      Name: 'Professor Smith',
    },
    subjects: [
      { SubjectId: 's1', SubjectName: 'DBMS' },
      { SubjectId: 's2', SubjectName: 'DAA' },
    ],
    classes: [
      { CrId: 'aaa', year: '2', block: 'apj' },
      { CrId: 'bbb', year: '3', block: 'smv' },
    ],
    table: {
      Monday: [
        { SubjectId: 's1', CrId: 'aaa', StartTime: '9:00 am', EndTime: '10:00 am' },
        { SubjectId: 's2', CrId: 'bbb', StartTime: '10:00 am', EndTime: '11:00 am' },
      ],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    },
  },
  {
    lecturer: {
      LecturerId: 'CC02',
      Name: 'Professor Jones',
    },
    subjects: [
      { SubjectId: 's3', SubjectName: 'Algorithms' },
      { SubjectId: 's4', SubjectName: 'Software Engineering' },
      { SubjectId: 's2', SubjectName: 'DS' },
    ],
    classes: [
      { CrId: 'bbb', year: '3', block: 'smv' },
      { CrId: 'ccc', year: '2', block: 'smv' },
      { CrId: 'aaa', year: '2', block: 'apj' },
    ],
    table: {
      Monday: [
        { SubjectId: 's3', CrId: 'ccc', StartTime: '11:00 am', EndTime: '12:00 pm' },
      ],
      Tuesday: [
        { SubjectId: 's4', CrId: 'bbb', StartTime: '3:00 pm', EndTime: '4:45 pm' },
      ],
      Wednesday: [
        { SubjectId: 's2', CrId: 'aaa', StartTime: '10:00 am', EndTime: '11:00 am' },
      ],
      Thursday: [
        { SubjectId: 's2', CrId: 'aaa', StartTime: '11:00 am', EndTime: '12:00 pm' },
      ],
      Friday: [],
      Saturday: [],
      Sunday: [],
    },
  },
  {
    lecturer: {
      LecturerId: 'CC03',
      Name: 'Professor Lee',
    },
    subjects: [
      { SubjectId: 's5', SubjectName: 'Computer Networks' },
    ],
    classes: [
      { CrId: 'ddd', year: '4', block: 'xyz' },
    ],
    table: {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [
        { SubjectId: 's4', CrId: 'ddd', StartTime: '2:00 pm', EndTime: '3:00 pm' },
      ],
      Friday: [
        { SubjectId: 's5', CrId: 'ddd', StartTime: '3:00 pm', EndTime: '4:45 pm' },
      ],
      Saturday: [],
      Sunday: [],
    },
  },
];

mongoose.connection.once('open', async () => {
  console.log('Connected to MongoDB');

  // Clear existing data
  await Timetable.deleteMany();

  // Insert new data
  await Timetable.insertMany(timetables);
  console.log('Data inserted');

  mongoose.connection.close();
});
