const symbols = ['Equal', 'Justice', 'Peace', 'Voice', 'Freedom', 'Change', 'Rights', 'Unity', 'Hope', 'Power', 'Action', 'Truth'];

let difficulty = 'medium';
let gameBoard = [];
let flipped = [];
let matched = 0;
let moves = 0;
let gameActive = true;
let timerInterval;
let timeElapsed = 0;
let disappeared = new Set();

const screens = {
  start: document.getElementById('start-screen'),
  game: document.getElementById('game-screen'),
  win: document.getElementById('win-screen')
};

function showScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
}

function getDifficultyConfig(level) {
  const configs = {
    easy: { cols: 4, rows: 2, pairs: 4 },
    medium: { cols: 4, rows: 4, pairs: 8 },
    hard: { cols: 4, rows: 6, pairs: 12 }
  };
  return configs[level];
}

function createGameBoard() {
  const config = getDifficultyConfig(difficulty);
  const selectedSymbols = symbols.slice(0, config.pairs);
  const cardArray = [...selectedSymbols, ...selectedSymbols];
  
  for (let i = cardArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
  }
  
  return cardArray;
}

function startGame(level) {
  difficulty = level;
  gameBoard = createGameBoard();
  flipped = [];
  matched = 0;
  moves = 0;
  gameActive = true;
  timeElapsed = 0;
  disappeared = new Set();
  
  const config = getDifficultyConfig(difficulty);
  document.getElementById('total-pairs').textContent = config.pairs;
  document.getElementById('matched').textContent = '0';
  document.getElementById('moves').textContent = '0';
  document.getElementById('timer').textContent = '0s';
  
  renderBoard();
  showScreen('game');
  
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeElapsed++;
    document.getElementById('timer').textContent = timeElapsed + 's';
  }, 1000);
}

function renderBoard() {
  const board = document.getElementById('game-board');
  board.innerHTML = '';
  
  const config = getDifficultyConfig(difficulty);
  board.style.gridTemplateColumns = `repeat(${config.cols}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${config.rows}, 1fr)`;
  
  gameBoard.forEach((symbol, index) => {
    if (disappeared.has(index)) {
      return;
    }
    
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.index = index;
    
    const isFlipped = flipped.includes(index);
    
    if (gameBoard[index] === null) {
      card.classList.add('matched');
      card.classList.add('disappearing');
      card.textContent = '';
      
      setTimeout(() => {
        disappeared.add(index);
        renderBoard();
      }, 600);
    } else if (isFlipped) {
      card.classList.add('flipped');
      card.textContent = symbol;
    } else {
      card.textContent = '?';
    }
    
    card.addEventListener('click', () => flipCard(index));
    board.appendChild(card);
  });
}

function flipCard(index) {
  if (!gameActive || flipped.includes(index) || gameBoard[index] === null) return;
  if (flipped.length === 2) return;
  
  flipped.push(index);
  renderBoard();
  
  if (flipped.length === 2) {
    moves++;
    document.getElementById('moves').textContent = moves;
    
    setTimeout(() => {
      checkMatch();
    }, 600);
  }
}

function checkMatch() {
  const [first, second] = flipped;
  const isMatch = gameBoard[first] === gameBoard[second];
  
  if (isMatch) {
    gameBoard[first] = null;
    gameBoard[second] = null;
    matched++;
    document.getElementById('matched').textContent = matched;
    
    const config = getDifficultyConfig(difficulty);
    if (matched === config.pairs) {
      endGame();
    }
  }
  
  flipped = [];
  renderBoard();
}

function endGame() {
  gameActive = false;
  clearInterval(timerInterval);
  
  document.getElementById('final-moves').textContent = moves;
  document.getElementById('final-time').textContent = timeElapsed + 's';
  
  let rating = '';
  
  if (difficulty === 'easy') {
    if (moves <= 6) rating = 'Perfect!';
    else if (moves <= 10) rating = 'Heel goed!';
    else rating = 'Goed gedaan!';
  } else if (difficulty === 'medium') {
    if (moves <= 12) rating = 'Perfect!';
    else if (moves <= 20) rating = 'Heel goed!';
    else rating = 'Goed gedaan!';
  } else {
    if (moves <= 20) rating = 'Perfect!';
    else if (moves <= 35) rating = 'Heel goed!';
    else rating = 'Goed gedaan!';
  }
  
  document.getElementById('rating').textContent = rating;
  showScreen('win');
}

document.querySelectorAll('.difficulty-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const level = btn.dataset.difficulty;
    startGame(level);
  });
});

document.getElementById('restart-game-btn').addEventListener('click', () => {
  startGame(difficulty);
});

document.getElementById('play-again-btn').addEventListener('click', () => {
  showScreen('start');
});

document.getElementById('back-btn-win').addEventListener('click', () => {
  window.location.href = 'index.php';
});

showScreen('start');