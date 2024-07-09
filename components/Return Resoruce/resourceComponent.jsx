import React from 'react';

export default function ResourceComponent({ usn, resource, faculty, timeFrom, timeTo, returnResource }) {
  const formattedTimeFrom = timeFrom ? new Date(timeFrom).toLocaleString() : 'N/A';
  const formattedTimeTo = timeTo ? new Date(timeTo).toLocaleString() : 'N/A';

  return (
    <div className="ResourceComponent">
      <h1>{resource}</h1>
      <h5>USN: {usn}</h5>
      <h5>{formattedTimeFrom} -- {formattedTimeTo}</h5>
      <button onClick={returnResource}>
        Return
      </button>
    </div>
  );
}
