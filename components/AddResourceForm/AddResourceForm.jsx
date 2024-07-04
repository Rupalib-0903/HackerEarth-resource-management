// AddResourceForm.jsx

import React, { useState } from "react";

const AddResourceForm = ({ onAddResource }) => {
  const [resourceName, setResourceName] = useState("");
  const [resourceType, setResourceType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data if needed

    // Create resource object
    const newResource = {
      name: resourceName,
      type: resourceType,
    };

    // Call the parent component function to handle resource addition
    onAddResource(newResource);

    // Clear form fields
    setResourceName("");
    setResourceType("");
  };

  return (
    <div>
      <h2>Add New Resource</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Resource Name:
          <input
            type="text"
            value={resourceName}
            onChange={(e) => setResourceName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Resource Type:
          <input
            type="text"
            value={resourceType}
            onChange={(e) => setResourceType(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Resource</button>
      </form>
    </div>
  );
};

export default AddResourceForm;
