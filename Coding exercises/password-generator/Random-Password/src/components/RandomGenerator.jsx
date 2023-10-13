// Import necessary modules from React and React Bootstrap
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";

// Define a React functional component called RandomGenerator
export default function RandomGenerator() {
  // Define state variables using the useState hook to manage component state
  const [password, setPassword] = useState(""); // Initialize with an empty string
  const [passwordLength, setPasswordLength] = useState(10); // Default length
  const [passwordStrength, setPasswordStrength] = useState("medium"); // Default strength

  // Define a function to generate a random password
  const generatePassword = () => {
    // Define character sets for different password strengths
    const strengthOptions = {
      easy: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      medium: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      hard: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=",
    };

    // Get the character set based on the selected password strength
    const characters = strengthOptions[passwordStrength];

    // Generate a new password by randomly selecting characters
    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randomIndex);
    }

    // Update the password state with the newly generated password
    setPassword(newPassword);
  };

  // Define a function to handle changes in password length
  const handleLengthChange = (e) => {
    // Parse the input value as an integer and update the password length state
    setPasswordLength(parseInt(e.target.value, 10));
  };

  // Define a function to handle changes in password strength
  const handleStrengthChange = (e) => {
    // Update the password strength state based on the selected option
    setPasswordStrength(e.target.value);
  };

  // Render the user interface elements using React Bootstrap components
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Password Generator</h2>
      <Row className="justify-content-center">
        <Col sm={12} md={6}>
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              value={password}
              readOnly
              placeholder="Generated Password"
            />
            <Button onClick={generatePassword} variant="primary">
              Generate Password
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={12} md={6}>
          <Form.Group>
            <Form.Label>Password Length:</Form.Label>
            <Form.Control
              type="number"
              value={passwordLength}
              onChange={handleLengthChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password Strength:</Form.Label>
            <Form.Control
              as="select"
              value={passwordStrength}
              onChange={handleStrengthChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password Strength Choices:</Form.Label>
            <ul>
              <li>Easy: Letters only</li>
              <li>Medium: Letters and numbers</li>
              <li>Hard: Letters, numbers, and special characters</li>
            </ul>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}
