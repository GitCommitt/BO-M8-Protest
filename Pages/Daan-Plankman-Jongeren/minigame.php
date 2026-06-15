<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BLM Memory Match Minigame</title>
  <link rel="stylesheet" href="minigame-style.css">
</head>
<body>
  <div class="game-container">
    <div class="header">
      <h1>BLM Memory Match</h1>
      <a href="index.html" class="home-btn">← Terug naar slideshow</a>
    </div>

    <div id="game-content">
      <div id="start-screen" class="screen active">
        <h2>BLM Memory Match Challenge</h2>
        <p>Match de kernwaarden van het Black Lives Matter protest! Vind alle overeenkomende paren.</p>
        <div class="difficulty-selector">
          <button class="difficulty-btn" data-difficulty="easy">
            <span>Easy</span>
            <small>4x2 (4 paren)</small>
          </button>
          <button class="difficulty-btn" data-difficulty="medium">
            <span>Medium</span>
            <small>4x4 (8 paren)</small>
          </button>
          <button class="difficulty-btn" data-difficulty="hard">
            <span>Hard</span>
            <small>4x6 (12 paren)</small>
          </button>
        </div>
      </div>

      <div id="game-screen" class="screen">
        <div class="game-stats">
          <div class="stat">
            <span class="stat-label">Zetten:</span>
            <span class="stat-value" id="moves">0</span>
          </div>
          <div class="stat">
            <span class="stat-label">Tijd:</span>
            <span class="stat-value" id="timer">0s</span>
          </div>
          <div class="stat">
            <span class="stat-label">Paren:</span>
            <span class="stat-value"><span id="matched">0</span>/<span id="total-pairs">0</span></span>
          </div>
        </div>
        
        <div id="game-board" class="game-board"></div>
        
        <button id="restart-game-btn" class="btn-secondary">Opnieuw starten</button>
      </div>

      <div id="win-screen" class="screen">
        <div class="win-content">
          <h2>Je hebt gewonnen!</h2>
          <div class="win-stats">
            <p>Zetten: <strong id="final-moves">0</strong></p>
            <p>Tijd: <strong id="final-time">0s</strong></p>
          </div>
          
          <div class="rating" id="rating"></div>
          
          <div class="button-group">
            <button id="play-again-btn" class="btn-primary">Opnieuw spelen</button>
            <button id="back-btn-win" class="btn-secondary">Terug naar slideshow</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="minigame-script.js"></script>
</body>
</html>
