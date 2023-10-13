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
    // Method to reset the quiz.
  }

  // Method to display the current question and answer options.
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
