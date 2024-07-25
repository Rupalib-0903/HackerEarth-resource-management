import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './login.css';

const ForgotPasswordModal = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.endsWith('@nmamit.in')) {
      setError('Email must end with @nmamit.in');
      return;
    }
    setError('');
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Send reset link</button>
      </form>
      <p>
        <Link to="/">Back to Login</Link>
      </p>
    </div>
  );
};

const Login = () => {
  //const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // If login is successful, navigate to the Homepage
    window.location.href = "http://localhost:3000/form.html";
  };

  return (
    <div>
      <img
        src="https://nmamit.nitte.edu.in/img/nitte-nmamit-logo.png"
        alt="Nitte NMAMIT Logo"
        className="logo"
      />
      <h2 className="center">Login</h2>
      <form onSubmit={handleSubmit}>
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
          <Link to="/forgot-password">Forgot password?</Link>
        </p>
        <p>
          Not a user? <Link to="/signup.jsx">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    console.log('User registered:', { username, email });
    
  };

  return (
    <div id="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>
        <Link to="/">Back to Login</Link>
      </p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPasswordModal />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

