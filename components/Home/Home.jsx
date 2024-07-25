import React from 'react';
import './Home.css'
import powerbutton from '../../assets/image.png'
import volume from '../../assets/volume.png'
import arrow from '../../assets/arrow.png'
import source from '../../assets/inputsource.png'
const Home = () => {
  // Dummy data for now
  const resources = [
    { type: 'laptops', count: 5 },
    { type: 'speakers', count: 3 },
    { type: 'projectors', count: 7 },
    { type: 'remotes', count: 2 },
  ];
  const handleBookResource = (resourceType) => {
    console.log(`Book ${resourceType}`);
  };
  const handleReturnResource = (resourceType) => {
    console.log(`Return ${resourceType}`);
  };
  const handleUploadTimetable = (event) => {
    const file = event.target.files[0];
    console.log('Uploading timetable:', file.name);
  };
  const handleProjectorControl = (action) => {
    console.log(`Perform ${action} action on projector`);
  };

  return (
    <div className="container">
      <div className="innercontainer">
      <div className="welcome-message">Welcome, user_name</div>

      {/* Resource Counts Table with Book and Return Buttons */}
      <div className="resource-section">
        <h2>Avaliable Resources</h2>
        <table className='resource-table'>
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
                <td>{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</td>
                <td>{resource.count}</td>
                <td>
                  <button className='b-button' onClick={() => handleBookResource(resource.type)}>Book</button>
                  <button className="w-button" onClick={() => handleReturnResource(resource.type)}>Return</button>
                </td>
              </tr>
            ))}{/* Change this as required */}
          </tbody>
        </table>
      </div>

      {/* Timetable */} 
      <div className="upload-timetable">
        <h2>Upload Timetable</h2>
        <div>
          <input type="file" onChange={handleUploadTimetable} />
          <button className='b-button'>Upload</button>
        </div>
      </div>

      {/* Projector Remote Control Section */}
      <div className="projector-control">
        <h2>Projector Remote Control</h2>
        <div className='projector-control-container'>
          <table>
            <tr>
              <td>
              <button className='pbutton' onClick={() => handleProjectorControl('power')}><img src={powerbutton} alt='ON/OFF'/></button>
              </td>
              <td></td>
              <td>
              <button className='vbutton' onClick={() => handleProjectorControl('volume-up')}><img src={volume} alt='volume UP'/>+</button>
              <button className='vbutton' onClick={() => handleProjectorControl('volume-down')}><img src={volume} alt='volume Down'/>-</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td><button className='nav unav' onClick={() => handleProjectorControl('UP')}><img src={arrow} alt='UP'/></button></td>
              <td></td>
            </tr>
            <tr>
              <td><button className='nav lnav' onClick={() => handleProjectorControl('LEFT')}><img src={arrow} alt='Left'/></button></td>
              <td><button className='navok' onClick={() => handleProjectorControl('OK')}>ok</button></td>
              <td><button className='nav' onClick={() => handleProjectorControl('RIGHT')}><img src={arrow} alt='right'/></button></td>
            </tr>
            <tr>
              <td></td>
              <td><button className='nav dnav' onClick={() => handleProjectorControl('DOWN')}><img src={arrow} alt='Down'/></button></td>
              <td></td>
            </tr>
          </table>
          <button className='inputsrc' onClick={() => handleProjectorControl('input-source')}><img src={source} alt='Input Source'/></button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
