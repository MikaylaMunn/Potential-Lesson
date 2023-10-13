// src/PasswordGenerator.js
import React, { useState } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    // Generate a random password (you can customize this logic)
    const length = 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <button onClick={generatePassword}>Generate Password</button>
      <p>Password: {password}</p>
    </div>
  );
}

export default PasswordGenerator;
