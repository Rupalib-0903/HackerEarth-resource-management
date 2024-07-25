const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    timetable: { type: String }
});

module.exports = mongoose.model('Section', sectionSchema);
