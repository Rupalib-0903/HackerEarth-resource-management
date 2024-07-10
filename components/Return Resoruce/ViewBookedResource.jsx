import React, { useState, useEffect } from "react";
import ResourceComponent from "./ResourceComponent";

const ViewBookedResource = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await fetch('http://localhost:5500/resources/nnm22cc022');
      if (!response.ok) {
        throw new Error('Failed to fetch resources');
      }
      const data = await response.json();
      setResources(data);
    } catch (error) {
      console.error('Error fetching resources:', error);
      alert('An error occurred while fetching resources.');
    }
  };

  const returnResource = async (usn, resource, faculty, timeFrom, timeTo) => {
    try {
      const response = await fetch('http://localhost:5500/return-resource', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usn, resource, faculty, timeFrom, timeTo }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        fetchResources(); // Refresh the list after returning the resource
      } else {
        alert('Failed to return resource: ' + result.message);
      }
    } catch (error) {
      console.error('Error returning resource:', error);
      alert('An error occurred while returning the resource.');
    }
  };

  const createResourceComponent = (item) => (
    <ResourceComponent
      key={item._id}
      usn={item.usn}
      resource={item.resource}
      faculty={item.faculty}
      timeFrom={item.timeFrom}
      timeTo={item.timeTo}
      returnResource={() => returnResource(item.usn, item.resource, item.faculty, item.timeFrom, item.timeTo)}
    />
  );

  return (
    <div>
      <h1>Booked Resources</h1>
      <div className="ViewBookedResourceResource">
        {resources.map(createResourceComponent)}
      </div>
    </div>
  );
};

export default ViewBookedResource;
