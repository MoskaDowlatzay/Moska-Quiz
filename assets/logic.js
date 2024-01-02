// A start button that when clicked a timer starts and the first question appears.

// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score
// Set of questions --> array of objects
// Each question needs the following:
  // Question text
  // Set of answers
  // Which answer is correct

// Landing page:
  // Explanation of the quiz
  // Start button

// Click the start button:
  // Landing page goes away
  // Timer starts
  // The first question appears (with its answers)

// For each question:
  // User clicks an answer
  // Their choice is compared to the correct answer as stored in the question's object
  // If correct, tell them
  // If incorrect, tell them AND subtract time from the timer
  // Optional: play a sound for correct or incorrect
  // Either way, the question disappears after a few seconds and the next question appears

// After the last question:
  // Timer stops
  // Question disappears
  // Form appears for user to enter their initials
  // Display their score

// User submits form
  // Initials and score get stored in local storage
  // User is taken to the high scores page
  // High scores are listed, sorted highest to lowest
  // User has option to take the quiz again

  document.addEventListener("DOMContentLoaded", function() {
    // Get elements from the HTML
    const startButton = document.getElementById("start");
    const questionTitle = document.getElementById("question-title");
    const choicesContainer = document.getElementById("choices");
    const endScreen = document.getElementById("end-screen");
    const finalScore = document.getElementById("final-score");
    const initialsInput = document.getElementById("initials");
    const submitButton = document.getElementById("submit");
    const feedback = document.getElementById("feedback");
    const timeDisplay = document.getElementById("time");
  
    // Other necessary variables
    let currentQuestion = 0;
    let score = 0;
    let time = 60; // Initial time in seconds
    let timerInterval;
  
    // Array of questions (You'd fetch this from questions.js or an API)
    const questions = [
      {
        question: "How many teeth does a human adult have?",
        choices: ["32", "35", "29", "38"],
        answer: 0 // Index of the correct answer in the choices array
      },
      // Add more questions 
      {
        question: "What is the largest internal organ in the human body?",
        choices: ["liver", "heart", "lungs", "kidneys"],
        answer: 0 // Index of the correct answer in the choices array
      },
  
      {
        question: "What planet gas the most gravity?",
        choices: ["Jupiter", "saturn", "uranus", "earth"],
        answer: 0 // Index of the correct answer in the choices array
      },
  
      {
        question: "What colour is a giraffe's tongue?",
        choices: ["purple", "pink", "blue", "brown"],
        answer: 0 // Index of the correct answer in the choices array
      },
  
      {
        question: "In which year did the titanic sink?",
        choices: ["1912", "1935", "1929", "1918"],
        answer: 0 // Index of the correct answer in the choices array
      },
  
    ];
  
  
  
    // Function to start the quiz
    function startQuiz() {
      startButton.style.display = "none";
      document.getElementById("start-screen").classList.add("hide");
      document.getElementById("questions").classList.remove("hide");
      displayQuestion();
      startTimer();
    }
  
    // Function to display a question
    function displayQuestion() {
      if (currentQuestion < questions.length) {
        const current = questions[currentQuestion];
        questionTitle.textContent = current.question;
        choicesContainer.innerHTML = "";
  
        current.choices.forEach((choice, index) => {
          const choiceButton = document.createElement("button");
          choiceButton.textContent = choice;
          choiceButton.addEventListener("click", () => selectAnswer(index));
          choicesContainer.appendChild(choiceButton);
        });
      } else {
        endQuiz();
      }
    }
  
    // Function to select an answer
    function selectAnswer(index) {
      const current = questions[currentQuestion];
      if (index === current.answer) {
        score++;
      } else {
        time -= 10; // Penalize for incorrect answer by reducing time
        if (time < 0) {
          time = 0;
        }
      }
  
      currentQuestion++;
      displayQuestion();
    }
  
    // Function to start the timer
    function startTimer() {
      timerInterval = setInterval(() => {
        timeDisplay.textContent = time;
        if (time <= 0) {
          endQuiz();
        } else {
          time--;
        }
      }, 1000);
    }
  
    // Function to end the quiz
    function endQuiz() {
      clearInterval(timerInterval);
      document.getElementById("questions").classList.add("hide");
      endScreen.classList.remove("hide");
      finalScore.textContent = score;
    }
  
    // Event listener for submitting the score
    submitButton.addEventListener("click", () => {
      const initials = initialsInput.value.toUpperCase(); // Get initials and convert to uppercase
      // Save score and initials to local storage or send to server
      console.log("Initials:", initials, "Score:", score);
      feedback.textContent = "Score submitted!";
      // Redirect to high scores page or perform other actions
    });
  
    // Event listener for starting the quiz
    startButton.addEventListener("click", startQuiz);
  });
  