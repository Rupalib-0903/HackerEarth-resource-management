import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Timetable from './components/Timetable';
import './style.css'

function App() {
  const [timetables, setTimetables] = useState([]);
  const [selectedLecturerId, setSelectedLecturerId] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [highlightedSlots, setHighlightedSlots] = useState([]);
  const [selectedLecturerTimetable, setSelectedLecturerTimetable] = useState(null);

  useEffect(() => {
    fetchTimetables();
  }, []);

  // Fetch all timetables
  const fetchTimetables = async () => {
    try {
      const response = await axios.get('/api/timetables');
      setTimetables(response.data);
    } catch (error) {
      console.error('Error fetching timetables:', error);
    }
  };

  // Handle highlighting time slot
  const handleHighlightTimeSlot = async () => {
    try {
      const response = await axios.post('/api/timetables/highlight-timeslot', {
        day: selectedDay,
        startTime: selectedTime
      });
      setHighlightedSlots(response.data);
      fetchTimetables(); // Refresh timetables after highlighting
    } catch (error) {
      console.error('Error highlighting time slot:', error);
    }
  };

  // Handle selecting lecturer
  const handleSelectLecturer = (lecturerId) => {
    const lecturer = timetables.find(timetable => timetable.lecturer.LecturerId === lecturerId);
    setSelectedLecturerId(lecturerId);
    setSelectedLecturerTimetable(lecturer);
  };

  // Render UI
  return (
    <div className="App">
      <h1>Faculty Timetables</h1>

      {/* Select Lecturer */}
      <label>Select Lecturer:</label>
      <select value={selectedLecturerId} onChange={(e) => handleSelectLecturer(e.target.value)}>
        <option value="">Select Lecturer</option>
        {timetables.map(timetable => (
          <option key={timetable.lecturer.LecturerId} value={timetable.lecturer.LecturerId}>
            {timetable.lecturer.Name}
          </option>
        ))}
      </select>

      {/* Select Day */}
      <label>Select Day:</label>
      <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
        <option value="">Select Day</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        {/* Add options for other days */}
      </select>

      {/* Select Time */}
      <label>Select Time:</label>
      <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
        <option value="">Select Time</option>
        <option value="9:00 am">9:00 am</option>
        <option value="10:00 am">10:00 am</option>
        <option value="11:00 am">11:00 am</option>
        <option value="12:00 pm">12:00 pm</option>
        <option value="02:00 pm">02:00 pm</option>
        <option value="03:00 pm">03:00 pm</option>




        {/* Add options for other times */}
      </select>

      {/* Highlight Time Slot Button */}
      <button onClick={handleHighlightTimeSlot}>Highlight Time Slot</button>

      {/* Display Selected Lecturer's Timetable */}
      {selectedLecturerTimetable && (
        <div>
          <h2>{selectedLecturerTimetable.lecturer.Name}'s Timetable</h2>
          <Timetable timetable={selectedLecturerTimetable} />
        </div>
      )}

      {/* Display Highlighted Slots */}
      {highlightedSlots.length > 0 && (
        <div>
          <h2>Highlighted Slots</h2>
          <ul>
            {highlightedSlots.map((slot, index) => (
              <li key={index}>
                {slot.SubjectId} - {slot.CrId} ({slot.StartTime} - {slot.EndTime})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Render All Timetables */}
      <h2>All Timetables</h2>

      {timetables.map(timetable => (
        <Timetable key={timetable.lecturer.LecturerId} timetable={timetable} />
      ))}
    </div>
  );
}

export default App;
