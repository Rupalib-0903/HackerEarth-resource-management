import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';

const Signup = () => {
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setSubmitted(false);
    setError(false);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
    setError(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
    setError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    setError(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
    setError(false);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
    setSubmitted(false);
    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === '' || username === '' || email === '' || password === '' || confirmPassword === '' || department === '') {
      setError(true);
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError(true);
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (!email.endsWith('@nmamit.in')) {
      setError(true);
      setErrorMessage('Please use your @nmamit.in email ID.');
      return;
    }

    try {
      const endpoint = role === 'Student' ? '/register/student' : '/register/faculty';

      const response = await axios.post(`http://localhost:3001${endpoint}`, {
        name,
        username,
        email,
        password,
        department
      });

      if (response.data.error) {
        setError(true);
        setErrorMessage(response.data.error);
      } else {
        setSubmitted(true);
        setError(false);
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000); // Redirect to login after 3 seconds
      }
    } catch (err) {
      console.error('Registration error:', err.response.data.error);
      if (err.response.data.error.includes('email') || err.response.data.error.includes('username')) {
        setErrorMessage('User already registered. Kindly login.');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
      setError(true);
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000); // Redirect to login after 3 seconds
    }
  };

  const handleLoginRedirect = () => {
    window.location.href = '/login';
  };

  const successMessage = () => (
    <div className="success" style={{ display: submitted ? '' : 'none' }}>
      <h1>User {name} successfully registered as a {role}!</h1>
    </div>
  );

  const errorMessageComponent = () => (
    <div className="error" style={{ display: error ? '' : 'none' }}>
      <h1>{errorMessage}</h1>
    </div>
  );

  return (
    <div className="App">
      {/* Image */}
      <div className="logo">
       
      </div>

      <div className="container">
        <div className="selection-form" style={{ display: role ? 'none' : '' }}>
        <img src="https://nmamit.nitte.edu.in/img/nitte-nmamit-logo.png" alt="NMAMIT Logo" />
          <h2>Sign Up</h2>
          <p>Select your role to proceed:</p>
          <button onClick={() => handleRoleSelection('Student')}>Sign Up as Student</button>
          <button onClick={() => handleRoleSelection('Faculty')}>Sign Up as Faculty</button>
        </div>

        {role && (
          <div className="signup-form">
             <img src="https://nmamit.nitte.edu.in/img/nitte-nmamit-logo.png" alt="NMAMIT Logo" />
            <h2>Sign Up as {role}</h2>
           
            <div className="messages">
              {errorMessageComponent()}
              {successMessage()}
            </div>
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleNameChange}
                className={`input ${name ? 'filled' : ''}`}
                type="text"
                placeholder="Enter your name"
                value={name}
                required
              />

              <input
                onChange={handleUsernameChange}
                className={`input ${username ? 'filled' : ''}`}
                type="text"
                placeholder="Enter your username"
                value={username}
                required
              />

              <select
                onChange={handleDepartmentChange}
                className={`input ${department ? 'filled' : ''}`}
                value={department}
                required
              >
                <option value="" disabled hidden>Select your department</option>
                <option value="Artificial Intelligence & Data Science">Artificial Intelligence & Data Science</option>
                <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence & Machine Learning</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Computer & Communication Engineering">Computer & Communication Engineering</option>
                <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                <option value="Computer Science (Full Stack Development)">Computer Science (Full Stack Development)</option>
                <option value="Computer Science & Engineering(Cyber Security)">Computer Science & Engineering(Cyber Security)</option>
                <option value="Electrical & Electronics Engineering">Electrical & Electronics Engineering</option>
                <option value="Electronics & Communication Engineering">Electronics & Communication Engineering</option>
                <option value="Electronics Engineering (VLSI Design & Technology)">Electronics Engineering (VLSI Design & Technology)</option>
                <option value="Electronics & Communication (ACT)">Electronics & Communication (ACT)</option>
                <option value="Information Science & Engineering">Information Science & Engineering</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Robotics & Artificial Intelligence">Robotics & Artificial Intelligence</option>
              </select>

              <input
                onChange={handleEmailChange}
                className={`input ${email ? 'filled' : ''}`}
                type="email"
                placeholder="Enter your email"
                value={email}
                required
              />

              <input
                onChange={handlePasswordChange}
                className={`input ${password ? 'filled' : ''}`}
                type="password"
                placeholder="Enter your password"
                value={password}
                required
              />

              <input
                onChange={handleConfirmPasswordChange}
                className={`input ${confirmPassword ? 'filled' : ''}`}
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                required
              />

              <button className="btn" type="submit">
                Submit
              </button>
            </form>

            <p>
              Already a member?{' '}
              <button className="btn" type="button" onClick={handleLoginRedirect}>
                Login
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
