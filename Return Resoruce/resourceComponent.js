import React from 'react';

export default function ResourceComponent({ usn, resource, faculty, timeFrom, timeTo, returnResource }) {
  return (
    <div className="ResourceComponent">
      <h1>{resource}</h1>
      <h5>{timeFrom} -- {timeTo}</h5>
      <button onClick={returnResource}>
        Return
      </button>
    </div>
  );
}

