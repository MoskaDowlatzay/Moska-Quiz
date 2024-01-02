document.addEventListener("DOMContentLoaded", function() {
    const highscoresList = document.getElementById("highscores");
    const clearButton = document.getElementById("clear");
  
    function displayHighScores() {
      if (highscoresList) {
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        highScores.sort((a, b) => b.score - a.score);

 // Display high scores
      highscoresList.innerHTML = "";
      highScores.forEach(score => {
        const listItem = document.createElement("li");
        listItem.textContent = `${score.initials}: ${score.score}`;
        highscoresList.appendChild(listItem);
      });
  }
}