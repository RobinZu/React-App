import React from 'react';

function AboutPage() {
  return (
    <div>
      <h1>About This Project</h1>
      <p>This project demonstrates the use of React Router for navigation in a React application.</p>
      <h2>Team Members</h2>
      <ul>
        <li>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">Your Name - GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">Your Name - LinkedIn</a>
        </li>
        {/* Add more team members here */}
      </ul>
    </div>
  );
}

export default AboutPage;
