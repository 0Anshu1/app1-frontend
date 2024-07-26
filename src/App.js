import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; // Import useState
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignUp = async () => {
    console.log('Sign Up', { username, password });
    loginWithRedirect({
      appState: { returnTo: 'http://localhost:4000' } // Redirecting to mern app2
    });
  };

  const handleLogIn = async () => {
    console.log('Log In', { username, password });
    loginWithRedirect({
      appState: { returnTo: 'http://localhost:4000' } // Redirecting to mern app2
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated ? (
          <div>
            <h1>Authentication Form</h1>
            <form>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div>
                <button type="button" onClick={handleSignUp}>
                  Sign Up
                </button>
                <button type="button" onClick={handleLogIn}>
                  Log In
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <h1>Welcome Back!</h1>
            <p>You are logged in as {user.name}.</p>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;


const Appp = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome {user.name}</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
    </div>
  );
};

