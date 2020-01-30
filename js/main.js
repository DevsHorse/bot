'use strict';

// Вспомогательные функции
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);                                // Проверка на число 
};

function getEndMessege() {
  return alert('До встречи! Спасибо за игру!!!');                             // Вывод прощания, ибо так меньше текста
};

function getRandomNumber(min, max) {                                          // Функция что бы зарандомить число secret 
  return Math.floor(Math.random() * (max - min) + min);
}

// Игра
function startGame() {
  let secret = 50;
  let tryes = 10;
  let startMessege = alert('Начнем же игру!');                                 // Приветствие 

  function gameInit() {

    let userAnswer = prompt(`Угадай число от 1 до 100!  Попытки: ${tryes--}`);   // Вопрос 

    if (tryes === 0) {                                                           // Условие после окончания попыток
      if (confirm('Попытки закончились, хотите сыграть еще?') === true) {        // Играем еще 
        tryes = 10;
        secret = getRandomNumber(1, 100);
        console.log('Новое секретное число - ' + secret + ', только тсс! =)');   // Что бы знать число =)
        gameInit();
      } else {                                                                 
        return getEndMessege();                                                  // Закончить игру     
      }
    } else if (userAnswer == null) {                                             // Отмена во время вопроса, закончить игру
      return getEndMessege();

    } else if (!isNumber(userAnswer)) {                                          // Проверка на число и пустые поля
      alert('Введите число!');
      tryes++;
      gameInit();

    } else if (userAnswer > secret) {                                            // Если число меньше 
      alert(`Загаданное число меньше, осталось попыток - ${tryes}`);          
      gameInit();

    } else if (userAnswer < secret) {                                            // Если число больше
      alert(`Загаданное число больше, осталось попыток - ${tryes}`);
      gameInit();

    } else {
      if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?') === true) {   // Если угадал число и хочет сыграть еще 
        tryes = 10;
        secret = getRandomNumber(1, 100);
        console.log('Новое секретное число - ' + secret + ', только тсс! =)');      // Что бы знать число =)
        gameInit();
      } else {                                                                      // Если проиграл и расстроился 
        return getEndMessege();
      }
    }
  };
  return gameInit();
};

let bot = startGame();