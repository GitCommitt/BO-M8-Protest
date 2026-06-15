<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quiz: George Floyd Protest in Amsterdam</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <main class="container">
    <section class="quiz-section">
      
      <div id="start-screen" class="screen active">
        <h2>George Floyd Protest in Amsterdam</h2>
        <p class="timeline-intro">Interactieve geschiedenisquiz</p>
        
        <div class="info-box">
          <p>
            Test je kennis over de Black Lives Matter-demonstratie op de Dam in Amsterdam op 1 juni 2020.
            Duizenden mensen kwamen samen om te protesteren tegen racisme, politiegeweld en ongelijkheid na de dood van George Floyd.
          </p>
        </div>

        <button id="start-btn" class="timeline-button">Start quiz</button>
      </div>

      <div id="quiz-screen" class="screen">
        <div class="quiz-top">
          <span id="question-number">Vraag 1 van 6</span>
          <span id="score-display">Score: 0</span>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar-fill" id="progress-fill"></div>
        </div>

        <h3 id="question-text">Vraag komt hier</h3>
        <div id="answer-buttons" class="answer-grid"></div>

        <p id="feedback"></p>
        <button id="next-btn" class="timeline-button hidden">Volgende vraag</button>
      </div>

      <div id="result-screen" class="screen">
        <h2>Quiz klaar!</h2>
        <p id="final-score" class="timeline-intro"></p>
        <div id="result-message" class="info-box"></div>
        <button id="restart-btn" class="timeline-button">Opnieuw proberen</button>
      </div>

    </section>
  </main>
  
  <script src="script.js"></script>
</body>
</html>