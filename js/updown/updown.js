let maxScore = 0;
let scores = [];

window.onload = function () {
  document
    .getElementById("start-updown-game")
    .addEventListener("click", function () {
      alert(
        "게임은 1~100 사이의 수가 랜덤하게 생성이 되며 그 수를 맞춰주시면 됩니다."
      );
      let answer;
      let correctAnswer = Math.floor(Math.random() * 100) + 1;
      let score = 0;
      while (true) {
        answer = prompt("맞춰보세요.");
        if (answer === "stop") {
          alert("게임이 끝났습니다.");
          break;
        } else if (answer % 1 !== 0 || answer === "") {
          alert("0과 양수인 숫자만 입력해주세요.");
        } else if (answer < correctAnswer) {
          alert("up");
          score++;
        } else if (answer > correctAnswer) {
          alert("down");
          score++;
        } else if (confirm("정답입니다! 한 번 더 해보시겠어요?")) {
          correctAnswer = Math.floor(Math.random() * 100) + 1;
          scores.push(++score);
          maxScore = score < maxScore || maxScore === 0 ? score : maxScore;
          score = 0;
        } else {
          alert("게임이 끝났습니다.");
          scores.push(++score);
          maxScore = score < maxScore || maxScore === 0 ? score : maxScore;
          break;
        }
      }
      render();
    });
  alert(
    "어서오세요.\n아래의 게임 시작 버튼을 눌러 게임을 시작해주세요.\n게임을 끝내고 싶으시면 stop을 입력해주시면 됩니다."
  );
};

function render() {
  if (maxScore !== 0) document.getElementById("max-score").innerText = maxScore;

  let allScoresHtml = "";
  for (let i = 0; i < scores.length; i++) {
    allScoresHtml += `<li>${i + 1}번째 : ${scores[i]}</li>`;
  }
  document.getElementById("all-scores").innerHTML = allScoresHtml;
}
