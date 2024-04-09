import React from 'react';

function ThemeSetting({ onClose }) {
  return (
    <div className="theme-settings">
      <h2>Theme Settings</h2>
      <ul>
        <li>Theme Option 1</li>
        <li>Theme Option 2</li>
        <li>Theme Option 3</li>
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ThemeSetting;
