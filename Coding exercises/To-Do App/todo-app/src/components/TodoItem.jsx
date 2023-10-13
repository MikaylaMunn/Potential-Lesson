// Import the necessary modules from React.
import React, { useState } from 'react';

// Define a functional component called TodoItem which takes two props: 'todo' and 'onRemove'.
const TodoItem = ({ todo, onRemove }) => {
  // Define a state variable 'isChecked' and its setter function 'setIsChecked'.
  // Initialize 'isChecked' to 'false'.
  const [isChecked, setIsChecked] = useState(false);

  // Define a function 'handleCheckboxChange' which is called when the checkbox is clicked.
  const handleCheckboxChange = () => {
    // Toggle the 'isChecked' state by negating its previous value.
    setIsChecked((prevIsChecked) => !prevIsChecked);

    // Use the updated 'isChecked' value to determine whether the checkbox is checked.
    if (!isChecked) {
      // If the checkbox was previously unchecked, call the 'onRemove' function
      // with the 'id' of the 'todo' to remove it.
      onRemove(todo.id);
    }
  };

  // Render the component, which displays a list item with a checkbox and the text of the 'todo'.
  return (
    <li>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange} // Attach the 'handleCheckboxChange' function to the checkbox's onChange event.
      />
      {todo.text} {/* Display the text of the 'todo'. */}
    </li>
  );
};

// Export the 'TodoItem' component as the default export of this module.
export default TodoItem;
