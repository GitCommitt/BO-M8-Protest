const questions = [
  {
    question: "Wanneer vond het George Floyd-protest in Amsterdam plaats?",
    answers: ["25 mei 2020", "1 juni 2020", "10 juni 2020", "1 juli 2020"],
    correct: 1
  },
  {
    question: "Waar vond het protest plaats?",
    answers: ["Museumplein", "Vondelpark", "De Dam", "Centraal Station"],
    correct: 2
  },
  {
    question: "Bij welke beweging hoorde het protest?",
    answers: ["Black Lives Matter", "Greenpeace", "Extinction Rebellion", "Amnesty Only"],
    correct: 0
  },
  {
    question: "Waar ging het protest vooral over?",
    answers: ["Klimaatverandering", "Racisme en politiegeweld", "Schoolregels", "Verkeer in Amsterdam"],
    correct: 1
  },
  {
    question: "Waarom was er kritiek op het protest?",
    answers: [
      "Omdat er geen toespraken waren",
      "Omdat het tijdens de coronapandemie plaatsvond",
      "Omdat niemand kwam opdagen",
      "Omdat het buiten Amsterdam was"
    ],
    correct: 1
  },
  {
    question: "Hoe verliep het protest volgens berichten?",
    answers: ["Vreedzaam", "Met veel geweld", "In stilte zonder mensen", "Alleen online"],
    correct: 0
  }
];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionNumber = document.getElementById("question-number");
const scoreDisplay = document.getElementById("score-display");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const feedback = document.getElementById("feedback");
const progressFill = document.getElementById("progress-fill");

const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", startQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  answered = false;

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  answered = false;
  feedback.textContent = "";
  nextBtn.classList.add("hidden");
  answerButtons.innerHTML = "";

  const currentQuestion = questions[currentQuestionIndex];

  questionNumber.textContent = `Vraag ${currentQuestionIndex + 1} van ${questions.length}`;
  scoreDisplay.textContent = `Score: ${score}`;
  questionText.textContent = currentQuestion.question;

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressFill.style.width = `${progress}%`;

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-btn");

    button.addEventListener("click", () => {
      selectAnswer(button, index);
    });

    answerButtons.appendChild(button);
  });
}

function selectAnswer(button, selectedIndex) {
  if (answered) {
    return;
  }

  answered = true;

  const currentQuestion = questions[currentQuestionIndex];
  const allButtons = document.querySelectorAll(".answer-btn");

  allButtons.forEach((btn) => {
    btn.disabled = true;
  });

  if (selectedIndex === currentQuestion.correct) {
    button.classList.add("correct");
    feedback.textContent = "Goed antwoord!";
    score++;
  } else {
    button.classList.add("wrong");
    feedback.textContent = "Niet helemaal goed. Het juiste antwoord is groen gemarkeerd.";
    allButtons[currentQuestion.correct].classList.add("correct");
  }

  scoreDisplay.textContent = `Score: ${score}`;
  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  progressFill.style.width = "100%";
  finalScore.textContent = `Je score is ${score} van de ${questions.length}.`;

  if (score === questions.length) {
    resultMessage.textContent = "Perfect! Je weet heel veel over dit onderwerp.";
  } else if (score >= 4) {
    resultMessage.textContent = "Goed gedaan! Je hebt de belangrijkste informatie begrepen.";
  } else {
    resultMessage.textContent = "Blijf oefenen en lees de informatie nog een keer goed door.";
  }
}