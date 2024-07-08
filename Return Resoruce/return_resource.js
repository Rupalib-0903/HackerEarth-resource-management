import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import TrackResource from './TrackResource.js'; // Correct path

const app = express();
const port = process.env.PORT || 5500;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const mongoURI = 'mongodb+srv://Pragathi:Pragathi9@pragathi.o5dnxgr.mongodb.net/';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route to handle booking resource
app.post('/book_resource', async (req, res) => {
  const { usn, resource, faculty, timeFrom, timeTo } = req.body;

  try {
    const existingResource = await TrackResource.findOne({ usn, resource, timeFrom, timeTo });

    if (existingResource) {
      await TrackResource.deleteOne({ _id: existingResource._id });
    }

    const newResource = new TrackResource({ usn, resource, faculty, timeFrom, timeTo });
    const savedResource = await newResource.save();

    res.send('Resource added successfully');
  } catch (err) {
    console.error('Error saving resource:', err);
    res.status(500).send('Failed to add resource');
  }
});

// Route to handle returning resource
app.post('/return-resource', async (req, res) => {
  const { usn, resource, faculty, timeFrom, timeTo } = req.body;

  try {
    const existingResource = await TrackResource.findOne({ usn, resource, timeFrom, timeTo, faculty });

    if (existingResource) {
      await TrackResource.deleteOne({ _id: existingResource._id });
      res.send('Resource returned successfully and deleted');
    } else {
      console.log('Resource does not exist:', existingResource);
      res.status(400).send('Resource booking not found. Resource returning failed');
    }
  } catch (err) {
    console.error('Error searching for resource:', err);
    res.status(500).send('Failed to process request');
  }
});

// Define a basic route for root path
app.get('/', (req, res) => {
  res.send('Welcome to the Resource Request Form Backend');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
