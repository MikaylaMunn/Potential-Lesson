import React from "react";

// This is a React functional component for generating rap names
function RapNameGenerator() {
  // Array of adjectives and nouns to create rap names
  const adjectives = ["Lil", "Big", "Fresh", "Smooth", "Crazy", "Dope"];
  const nouns = ["Rhyme", "MC", "Lyricist", "Hustler", "Beatbox", "Flow"];

  // Function to generate a random rap name
  const generateRapName = () => {
    // Choose a random adjective from the adjectives array
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];

    // Choose a random noun from the nouns array
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    // Combine the random adjective and noun to create a rap name
    return `${randomAdjective} ${randomNoun}`;
  };

  // Render the RapNameGenerator component
  return (
    <div>
      <h1>Rap Name Generator</h1>
      {/* Display the generated rap name */}
      <p>Your rap name: {generateRapName()}</p>
    </div>
  );
}

// This is the main App component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Render the RapNameGenerator component */}
        <RapNameGenerator />
      </header>
    </div>
  );
}

// Export the App component as the default export
export default App;
