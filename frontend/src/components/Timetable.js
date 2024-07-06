import React from 'react';

const Timetable = ({ timetable, selectedDay, selectedTime }) => {
  if (!timetable) {
    return <div>No timetable available</div>;
  }

  const highlightClass = (day, startTime) => {
    if (day === selectedDay && startTime === selectedTime) {
      return 'highlight';
    }
    return '';
  };

  return (
    <div className="timetable">
      {Object.keys(timetable.table).map(day => (
        <div key={day} className="day-column">
          <h3>{day}</h3>
          {timetable.table[day].map(slot => (
            <div key={slot.StartTime} className={`time-slot ${highlightClass(day, slot.StartTime)}`}>
              {slot.SubjectId} - {slot.CrId} ({slot.StartTime} - {slot.EndTime})
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Timetable;
