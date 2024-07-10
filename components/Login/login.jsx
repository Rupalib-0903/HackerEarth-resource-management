import React, { useState } from 'react';
import './login.css';

// Define the ForgotPasswordModal component
const ForgotPasswordModal = ({ onBackToLogin }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset link sent to:', email);
  };

  return (
    <div id="forgot-password-modal">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send reset link</button>
      </form>
      <p>
        <a href="#" onClick={onBackToLogin}>
          Back to Login
        </a>
      </p>
    </div>
  );
};

function App() {
  const [view, setView] = useState('login');

  const renderView = () => {
    switch (view) {
      case 'login':
        return (
          <div>
            <img
              src="https://nmamit.nitte.edu.in/img/nitte-nmamit-logo.png"
              alt="Nitte NMAMIT Logo"
              className="logo"
            />
            <h2 className="center">Login</h2>
            <form>
              <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" required />
              </div>
              <div>
                <label htmlFor="password">Password :</label>
                <input type="password" id="password" required />
              </div>
              <div>
                <select id="user-type">
                  <option value="admin">Admin</option>
                  <option value="faculty">Faculty</option>
                  <option value="student">Student</option>
                </select>
              </div>
              <button type="submit">Login</button>
              <p>
                <a href="#" id="forgot-password" onClick={() => setView('forgot-password')}>
                  Forgot password?
                </a>
              </p>
              <p>
                Not a user? <a href="#" id="sign-up">Sign up</a>
              </p>
            </form>
          </div>
        );
      case 'forgot-password':
        return <ForgotPasswordModal onBackToLogin={() => setView('login')} />;
      default:
        return null;
    }
  };

  return <div className="container">{renderView()}</div>;
}

export default App;
