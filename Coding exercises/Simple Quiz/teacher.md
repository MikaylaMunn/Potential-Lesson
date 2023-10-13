# Getting to Know You Quiz

Welcome to the "Getting to Know You Quiz" project! This is a simple quiz designed to determine if you have more of a Spring or Winter personality based on your answers to a few questions. In this project, you'll find HTML, CSS, and JavaScript code that together create the quiz.

## Instructions

### Step 1: Set Up the HTML

Copy the following HTML code into a new HTML file (e.g., `index.html`) using a code editor of your choice:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Getting to Know You Quiz</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Getting to Know You Quiz</h1>
    <form id="quizForm">
    </form>

    <div id="result"></div>

    <script src="quiz.js"></script>
</body>
</html>
```

This HTML code sets up the structure for the quiz and includes references to external CSS and JavaScript files.

### Step 2: Create the CSS (Optional)

Create a CSS file (e.g., `style.css`) and add your styles for the quiz. If you don't want to add custom styles, you can skip this step. Here's a basic example of CSS you can use:

```css
/* Add your CSS styles here */
```

### Step 3: Set Up the JavaScript

Copy the following JavaScript code into a new JavaScript file (e.g., `quiz.js`) using a code editor of your choice:

```js
// Define a Quiz class to manage the quiz functionality.
class Quiz {
  constructor(questions) {
    this.questions = questions; // Store the quiz questions.
    this.score = 0; // Initialize the score.
    this.currentQuestion = 0; // Initialize the current question index.
  }

  // Method to get the current question object.
  getCurrentQuestion() {
    return this.questions[this.currentQuestion];
  }

  // Method to handle when a user selects an answer.
  answerSelected(answer) {
    const currentQuestion = this.getCurrentQuestion();
    if (answer === currentQuestion.correctAnswer) {
      this.score++; // Increment the score if the answer is correct.
    }

    this.currentQuestion++; // Move to the next question.
    if (this.currentQuestion < this.questions.length) {
      this.displayQuestion(); // Display the next question if available.
    } else {
      this.displayResult(); // Display the quiz result when all questions are answered.
    }
  }

  // Method to display the current question and answer options.
  displayQuestion() {
    const currentQuestion = this.getCurrentQuestion();
    const quizForm = document.getElementById("quizForm");
    quizForm.innerHTML = `
        <p>${currentQuestion.question}</p>
        ${currentQuestion.answers
          .map(
            (answer, index) => `
            <label>
                <div class="column">
                    <div>
                        <img src="${
                          currentQuestion.images[index]
                        }" alt="${answer}" width="100">
                    </div>
                    <div>
                        <input type="radio" name="q${
                          this.currentQuestion + 1
                        }" value="${answer}"> ${answer}
                    </div>
                </div>
            </label>
        `
          )
          .join("")}
        <button type="submit">Submit</button>
    `;

    // Add a submit event listener to handle answer submission.
    quizForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const selectedAnswer = quizForm.querySelector(
        'input[name="q' + (this.currentQuestion + 1) + '"]:checked'
      );
      if (selectedAnswer) {
        this.answerSelected(selectedAnswer.value);
      }
    });
  }

  // Method to display the quiz result.
  displayResult() {
    const result = document.getElementById("result");
    let resultText = "";
    if (this.score >= this.questions.length / 2) {
      resultText = "You are a Spring person!";
    } else {
      resultText = "You are a Winter person!";
    }
    result.innerHTML = `
        <h1>Your Result: ${resultText}</h1>
        <button id="restartButton">Restart</button>
    `;

    // Add a click event listener to the Restart button.
    const restartButton = document.getElementById("restartButton");
    restartButton.addEventListener("click", () => {
      this.resetQuiz();
    });
  }

  // Method to reset the quiz.
  resetQuiz() {
    this.score = 0;
    this.currentQuestion = 0;
    this.displayQuestion();
    document.getElementById("result").innerHTML = ""; // Clear the result text.
  }
}

// Define an array of quiz questions for Winter or Spring personality.
const questions = [
  {
    question: "What do you prefer to do?",
    answers: ["Walk on a Beach", "Build a Snowman"],
    images: ["./images/beach.jpeg", "./images/snowman.jpeg"],
    correctAnswer: "Build a Snowman",
  },
  {
    question: "Do you enjoy snow activities?",
    answers: ["Yes", "No"],
    images: ["./images/snow-yes.jpeg", "./images/snow-no.jpeg"],
    correctAnswer: "Yes",
  },
];

// Create a new quiz instance with the provided questions and display the first question.
const quiz = new Quiz(questions);
quiz.displayQuestion();
```

This JavaScript code defines the functionality of the quiz, including displaying questions, handling answers, calculating the score, and displaying the result.

### Step 4: Add Images

Ensure that you have images referenced in the `questions` array (in the JavaScript code) or update the image URLs accordingly.

### Step 5: Open in a Web Browser

Open the `index.html` file in a web browser to view and interact with the quiz. Answer the questions and see your result!

That's it! You now have a "Getting to Know You Quiz" ready to run. Enjoy learning and customizing it further as you wish.

## Code Along Explanation

**Class Constructor**: In this code, we're defining a JavaScript class called `Quiz` that manages a quiz's functionality. Let's break down the key parts of this code into simpler terms for learners:

1. **Constructor (class Quiz)**: Think of the constructor as a blueprint for creating a new quiz. It's like setting up the rules for the quiz game before we start playing. In this constructor:
   - `questions` represents the list of quiz questions.
   - `score` is where we'll keep track of how well the player is doing (initially set to 0).
   - `currentQuestion` keeps track of which question we're currently asking (initially set to 0, which means the first question).

2. **`getCurrentQuestion()` Method**: This function helps us get the current question we're asking. It's like having a stack of questions, and we're picking one from the top of the stack.

3. **`answerSelected(answer)` Method**: When a player selects an answer, this function checks if it's the correct answer. If it's correct, we increase the player