const player1Score = document.getElementById("player1Score");
const player2Score = document.getElementById("player2Score");
const player1Btn = document.getElementById("player1Btn");
const player2Btn = document.getElementById("player2Btn");
const gameSelect = document.getElementById("gameCount");
const reset = document.getElementById("resetBtn");

let player1TempScore = 0;
let player2TempScore = 0;
let gameCount = 0;

function colorChange() {
	if (player1TempScore > player2TempScore) {
		player1Score.style.color = "green";
		player2Score.style.color = "red";
	} else if (player1TempScore < player2TempScore) {
		player1Score.style.color = "red";
		player2Score.style.color = "green";
	} else if (player1TempScore === player2TempScore) {
		player1Score.style.color = "black";
		player2Score.style.color = "black";
	}
}

gameSelect.addEventListener("change", function () {
	gameCount = gameSelect.value;
});

function disableBtn() {
	if (player1TempScore == gameCount || player2TempScore == gameCount) {
		player1Btn.disabled = true;
		player2Btn.disabled = true;
	}
}

player1Btn.addEventListener("click", function () {
	player1TempScore++;
	player1Score.textContent = player1TempScore;
	colorChange();
	disableBtn();
});

player2Btn.addEventListener("click", function () {
	player2TempScore++;
	player2Score.textContent = player2TempScore;
	colorChange();
	disableBtn();
});

resetBtn.addEventListener("click", function () {
	player1TempScore = 0;
	player2TempScore = 0;
	player1Score.textContent = 0;
	player2Score.textContent = 0;
	gameSelect.value = 1;
	player1Btn.disabled = false;
	player2Btn.disabled = false;
	player1Score.style.color = "black";
	player2Score.style.color = "black";
	gameCount = 0;
});

console.log(gameCount.value);
