'use strict';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function startGame() {
  let secret = 50;
  let startMessege = alert('Начнем же игру!');
    function gameInit(){
      let userAnswer = prompt('Угадай число от 1 до 100 =)');

        if (userAnswer == null) {
          alert('Конец игры');
        } else if (!isNumber(userAnswer)) {
          alert('Введите число!');
          gameInit();
        } else if (userAnswer > secret) {
          alert('Загаданное число меньше');
          gameInit();
        } else if (userAnswer < secret) {
          alert('Загаданное число больше');
          gameInit();
        } else {
          alert('Вы угадали!');
        }
    };
  return gameInit();
};

let bot = startGame();
