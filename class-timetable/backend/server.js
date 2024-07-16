const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sectionRoutes = require('./routes/sectionRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://localhost:27017/class-timetable', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/sections', sectionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
