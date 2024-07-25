import  mongoose from 'mongoose';

const CRSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      phoneNumber: {
        type: String,
        unique:true,
        trim: true,
      },
      department: {
        type: String,
        trim: true,
      },
      block: {
        type: String,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      classRoom: {
        type: String,
        trim: true,
      },
     year: {
        type: Number,
        min: 1,
        max: 4,
      },
});  


const LecturerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      phoneNumber: {
        type: String,
        unique:true,
        trim: true,
      },
      department: {
        type: String,
        trim: true,
      },
      block: {
        type: String,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      staffRoom: {
        type: String,
        trim: true,
      },
});


const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      phoneNumber: {
        type: String,
        unique:true,
        trim: true,
      },
      department: {
        type: String,
        trim: true,
      },
      block: {
        type: String,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      }
});  


const subjectSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    department: {
      type: String,
      trim: true,
    },
    // Additional subject-specific fields as needed
  });



  const studentTimetableSchema = new mongoose.Schema({
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CRSchema',
      required: true,
    },
    subjects: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        subject: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Subject',
          required: true,
        },
        lecturer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'LecturerSchema',
          required: true,
        },
      },
    ],
    table: {
      Monday :      [{'SubjectId' : {type: mongoose.Schema.Types.ObjectId, ref: 'subjects' }, 'StartTime' : String , 'EndTime' : String}, ],
      Tuesday :     [ {'SubjectId' : {type: mongoose.Schema.Types.ObjectId, ref: 'subjects' }, 'StartTime' :  String, 'EndTime' : String}, ],
      Wednesday :   [ {'SubjectId' : {type: mongoose.Schema.Types.ObjectId, ref: 'subjects' }, 'StartTime' : String , 'EndTime' : String}, ],
      Thursday :    [ {'SubjectId' : {type: mongoose.Schema.Types.ObjectId, ref: 'subjects' }, 'StartTime' : String , 'EndTime' : String}, ],
      Friday :      [ {'SubjectId' : {type: mongoose.Schema.Types.ObjectId, ref: 'subjects' }, 'StartTime' : String , 'EndTime' : String}, ],
      Saturday :    [ {'SubjectId' : {type: mongoose.Schema.Types.ObjectId, ref: 'subjects' }, 'StartTime' : String , 'EndTime' : String}, ],
      Sunday :      [ {'SubjectId' : {type: mongoose.Schema.Types.ObjectId, ref: 'subjects' }, 'StartTime' : String , 'EndTime' : String}, ],
    },
  
});



const lecturerTimetableSchema = new mongoose.Schema({
    lecturerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'LecturerSchema',
      required: true,
    },
    classes: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        cr: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'CRSchema',
          required: true,
        },
        subject: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Subject',
          required: true,
        },
      },
    ],
    table: {
      Monday :      [ [{'ClassId' : {type: mongoose.Schema.Types.ObjectId, ref: 'classes' }, 'StartTime' : String , 'EndTime' : String}, ]],
      Tuesday :     [ [{'ClassId' : {type: mongoose.Schema.Types.ObjectId, ref: 'classes' }, 'StartTime' : String , 'EndTime' : String}, ] ],
      Wednesday :   [ [{'ClassId' : {type: mongoose.Schema.Types.ObjectId, ref: 'classes' }, 'StartTime' : String , 'EndTime' : String}, ] ],
      Thursday :    [ [{'ClassId' : {type: mongoose.Schema.Types.ObjectId, ref: 'classes' }, 'StartTime' : String , 'EndTime' : String}, ] ],
      Friday :      [ [{'ClassId' : {type: mongoose.Schema.Types.ObjectId, ref: 'classes' }, 'StartTime' : String , 'EndTime' : String}, ] ],
      Saturday :    [ [{'ClassId' : {type: mongoose.Schema.Types.ObjectId, ref: 'classes' }, 'StartTime' : String , 'EndTime' : String}, ] ],
      Sunday :      [ [{'ClassId' : {type: mongoose.Schema.Types.ObjectId, ref: 'classes' }, 'StartTime' : String , 'EndTime' : String}, ] ],
    },
  });



/*

  Schema for resourse management

*/

// Create the model from the schema
const TrackResource = mongoose.model('TrackResource', TrackResourceSchema);
const CR = mongoose.model('CR', CRSchema);
const Lecturer = mongoose.model('Lectuter', LecturerSchema);
const Admin = mongoose.model('Admin', AdminSchema);
const Subject = mongoose.model('Subject', subjectSchema);
const StudentTimeTable = mongoose.model('StudentTimeTable', studentTimetableSchema);
const LecturerTimeTable = mongoose.model('LectyrerTimeTable', lecturerTimetableSchema);




export default {CR,Lecturer,Admin,Subject,StudentTimeTable,LecturerTimeTable};