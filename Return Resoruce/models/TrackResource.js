import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Define the schema for the CR
const CRSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  usn: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
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

// Define the schema for the resource tracking
const TrackResourceSchema = new Schema({
  usn: { type: String, required: true },
  resource: { type: String, required: true },
  faculty: { type: String, required: true },
  timeFrom: { type: String, required: true },
  timeTo: { type: String, required: true },
});

const CR = mongoose.model('CR', CRSchema);
const TrackResource = mongoose.model('TrackResource', TrackResourceSchema);

export default TrackResource;
export { CR };
