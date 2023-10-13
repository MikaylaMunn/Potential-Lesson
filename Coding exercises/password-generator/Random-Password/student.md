# Building a Password Generator in React

In this tutorial, you will learn how to create a password generator application using React. We'll break down the process into easy-to-follow steps.

## Prerequisites

Before we begin, make sure you have the following:

- A basic understanding of JavaScript.
- Node.js and npm installed on your computer.

## Step 1: Project Setup

1. This project will help generate random password random-password whatever you like.

2. Inside your project directory,  two folders: `public` and `src`.
```java
random-password/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── RandomGenerator.jsx
│   ├── App.jsx
│   └── styles.css
├── package.json
└── (Other project files)
```


## Step 2: Set Up HTML

1. Inside the `public` folder, create an `index.html` file.

2. In `index.html`, set up the basic HTML structure, including a `<div>` with an `id` of "root." This is where your React app will be rendered.

## Step 3: Create React Components

1. Inside the `src` folder, create a `components` folder.

2. Inside the `components` folder, create a file called `RandomGenerator.jsx`. This file will contain the code for our password generator component.

## Step 4: Build the Password Generator Component
    - App.jsx   
        - In `App.jsx`, you will need to do the following:
            - Import styles.css and RandomGenerator.jsx
            - Create a functional component that returns RandomGenerator
    - index.jsx
        -In `index.jsx` 
            - Import ReactDOM Bootstrap and App
            - Create a rootElement by getting it by the id on the HTML
            - Render the App with ReactDom.render( <> <App/></>, rootElement)
    - RandomGenerator.jsx
**Step 1: In RandomGenerator.jsx**
Define a functional component named RandomGenerator. Add the following as imports

```js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
```

**Step 2: Set Up State Variables**
Create state variables for the password, password length, and password strength using the useState hook.

Initialize password with an empty string, passwordLength with a default length (e.g., 10), and passwordStrength with a default strength option (e.g., "medium").

**Step 3: Create generatePassword Function**
Create a function named generatePassword inside the component.

```js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";

// Define a React functional component called RandomGenerator
export default function RandomGenerator() {
  // Define state variables using the useState hook to manage component state
  // Initialize with an empty string
  useState(10); // Default length
  useState("medium"); // Default strength

  // Define a function to generate a random password
  
    // Define character sets for different password strengths
    const strengthOptions = {
      easy: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      medium: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      hard: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=",
    };

    // Get the character set based on the selected password strength
    

    // Generate a new password by randomly selecting characters
    

    // Update the password state with the newly generated password
    
  

  // Define a function to handle changes in password length
  
    // Parse the input value as an integer and update the password length state
   


  // Define a function to handle changes in password strength
  
    // Update the password strength state based on the selected option
   
 

  // Render the user interface elements using React Bootstrap components
  return (
   
  );
}
```



Define an object named strengthOptions that contains different character sets for password strength levels (easy, medium, hard).

Use the selected passwordStrength to access the appropriate character set from strengthOptions.

Generate a new password based on the selected passwordLength and character set. You can use a loop to randomly select characters from the character set.

Update the password state with the generated password.

**Step 4: Implement Event Handlers**
Create two event handler functions, handleLengthChange and handleStrengthChange, to handle changes in password length and strength inputs, respectively.

In handleLengthChange, parse the input value as an integer and update the passwordLength state.

In handleStrengthChange, update the passwordStrength state based on the selected option.

**Step 5: Create the User Interface**
Use the Container, Row, Col, Form, Button, InputGroup, and FormControl components from React Bootstrap to build the user interface.

Create input fields for password length and password strength using Form.Control and Form.Label.

Add a button with the label "Generate Password" to trigger the generatePassword function.

Display the generated password in a read-only input field.

Provide a list of password strength choices (Easy, Medium, Hard) as options in a Form.Control dropdown.


// Import necessary modules from React and React Bootstrap
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";

// Define a React functional component called RandomGenerator
export default function RandomGenerator() {
  // Define state variables using the useState hook to manage component state
  // Initialize with an empty string
  useState(10); // Default length
  useState("medium"); // Default strength

  // Define a function to generate a random password
  
    // Define character sets for different password strengths
    const strengthOptions = {
      easy: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      medium: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      hard: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=",
    };

    // Get the character set based on the selected password strength
    

    // Generate a new password by randomly selecting characters
    

    // Update the password state with the newly generated password
    
  

  // Define a function to handle changes in password length
  
    // Parse the input value as an integer and update the password length state
   


  // Define a function to handle changes in password strength
  
    // Update the password strength state based on the selected option
   
 

  // Render the user interface elements using React Bootstrap components
  return (
   
  );
}
```

## Step 5: Styling (Optional)

If you'd like to style your password generator, you can use CSS or a CSS framework like Bootstrap. You can also customize the styling according to your preferences.

## Step 6: Testing

Before running your application, double-check your code for any errors or typos. Debugging is an essential skill in programming.

## Step 7: Running the Application

1. Open your terminal and navigate to the project directory.

2. Run the following command to start your React application:

   ```bash
   npm start
   ```

3. Your application should open in a web browser. You can now use your password generator!

## Conclusion

Congratulations! You've successfully created a password generator application in React. This project not only helps you practice React but also provides you with a useful tool for generating secure passwords.

Remember to explore and customize the application further as you continue to learn and grow as a developer.

Happy coding!