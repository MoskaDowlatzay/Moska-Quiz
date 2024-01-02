document.addEventListener("DOMContentLoaded", function() {
    const highscoresList = document.getElementById("highscores");
    const clearButton = document.getElementById("clear");
  
    function displayHighScores() {
      if (highscoresList) {
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        highScores.sort((a, b) => b.score - a.score);
