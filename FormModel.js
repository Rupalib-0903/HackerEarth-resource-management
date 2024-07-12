const mongoose = require("mongoose");

const RequestForm = mongoose.Schema(
  {
    NameCR: {
      type: String,
      required: [true, "Please add the name of cr"],
    },
    Classroom: {
      type: String,
      required: [true, "Please add theclassroom"],
    },
    Time: {
      type: String,
      required: [true, "Please add the time"],
    },
    ResourceType: { 
      type: String,
      required: [true, "Please enter the type of resourse (Laptop, Projector Remote, Projector, Speaker)"],
    },
    FacultyIncharge: {
      type: String,
      required: [true, "Please enter the name of the faculty member incharge"],
    },
    ResourceID: { 
        type: String,
        required: [false, "Please enter the type of resourse (Laptop, Projector Remote, Projector, Speaker)"],
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RequestForm", RequestForm);
