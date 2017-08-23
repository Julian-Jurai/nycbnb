import React from 'react';
import { Link } from 'react-router-dom';


const sessionLinks = () => (
  <div>
    <h1>Welcome</h1>
    <nav>
      <button id="session-button">Login</button>
      <button id="session-button">Sign up</button>
    </nav>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<div>
    <h2>Hi, {currentUser.username}!</h2>
    <button onClick={logout}>Log Out</button>
	</div>
);

const HomeIndex = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default HomeIndex;
