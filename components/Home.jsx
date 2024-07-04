import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import AddResourceForm from "../AddResourceForm/AddResourceForm";

const Home = () => {
  const { isLoggedIn, userName } = useAuth();
  const [showAddResourceForm, setShowAddResourceForm] = useState(false);
  // Dummy data for now
  const resources = [
    { type: "laptops", count: 5 },
    { type: "speakers", count: 3 },
    { type: "projectors", count: 7 },
    { type: "remotes", count: 2 },
  ];
  const handleBookResource = (resourceType) => {
    console.log(`Book ${resourceType}`);
  };
  const handleReturnResource = (resourceType) => {
    console.log(`Return ${resourceType}`);
  };
  const handleUploadTimetable = (event) => {
    const file = event.target.files[0];
    console.log("Uploading timetable:", file.name);
  };
  const handleProjectorControl = (action) => {
    console.log(`Perform ${action} action on projector`);
  };
  const handleAddResource = (newResource) => {
  // Update state or perform action to add new resource
  console.log("Adding new resource:", newResource);
  // For now, let's log the addition and update state
  setResources([...resources, newResource]);
  setShowAddResourceForm(false); // Hide the form after submission
  };

  return (
    <div>
      <div>{isLoggedIn && <p>Welcome, {userName}!</p>}</div>;
          {/* Include a button to toggle the AddResourceForm visibility */}
      <button onClick={() => setShowAddResourceForm(!showAddResourceForm)}>
          {showAddResourceForm ? "Cancel Add Resource" : "Add New Resource"}
      </button>
      {showAddResourceForm && <AddResourceForm onAddResource={handleAddResource} />}
      {/* Resource Counts Table with Book and Return Buttons */}
      <div>
        <h2>Avaliable Resources</h2>
        <table>
          <thead>
            <tr>
              <th>Resource</th>
              <th>Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource.type}>
                <td>
                  {resource.type.charAt(0).toUpperCase() +
                    resource.type.slice(1)}
                </td>
                <td>{resource.count}</td>
                <td>
                  <button onClick={() => handleBookResource(resource.type)}>
                    Book
                  </button>
                  <button onClick={() => handleReturnResource(resource.type)}>
                    Return
                  </button>
                </td>
              </tr>
            ))}
            {/* Change this as required */}
          </tbody>
        </table>
      </div>
      {/* Timetable */}
      <div>
        <h2>Timetable</h2>
        <div>
          <input type="file" onChange={handleUploadTimetable} />
          <button>Upload Timetable</button>
        </div>
      </div>
      {/* Projector Remote Control Section */}
      <div>
        <h2>Projector Remote Control</h2>
        <div>
          <button onClick={() => handleProjectorControl("power")}>
            Power On/Off
          </button>
          <br />
          <button onClick={() => handleProjectorControl("volume-up")}>
            Volume Up
          </button>
          <button onClick={() => handleProjectorControl("volume-down")}>
            Volume Down
          </button>
          <br />
          <button onClick={() => handleProjectorControl("mute")}>Mute</button>
          <button onClick={() => handleProjectorControl("input-source")}>
            Change Input Source
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
