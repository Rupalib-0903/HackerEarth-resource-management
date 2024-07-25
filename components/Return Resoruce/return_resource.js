import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import TrackResource from './models/TrackResource.js'; 
const app = express();
const port = process.env.PORT || 5500;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const mongoURI = 'mongodb+srv://Pragathi:Pragathi9@pragathi.o5dnxgr.mongodb.net/mydatabase'; // Replace 'mydatabase' with your actual database name
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route to handle returning resource
app.post('/return-resource', async (req, res) => {
  const { usn, resource, faculty, timeFrom, timeTo } = req.body;

  try {
    const existingResource = await TrackResource.findOne({ usn, resource, timeFrom, timeTo, faculty });

    if (existingResource) {
      await TrackResource.deleteOne({ _id: existingResource._id });
      res.json({ message: 'Resource returned successfully and deleted' });
    } else {
      res.status(404).json({ message: 'Resource booking not found. Resource returning failed' });
    }
  } catch (err) {
    console.error('Error searching for resource:', err);
    res.status(500).json({ message: 'Failed to process request' });
  }
});


// Route to fetch resources for a specific user
app.get('/resources/:usn', async (req, res) => {
  const { usn } = req.params;

  try {
    const resources = await TrackResource.find({ usn });
    res.json(resources);
  } catch (err) {
    console.error('Error fetching resources:', err);
    res.status(500).json({ message: 'Failed to fetch resources' });
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
