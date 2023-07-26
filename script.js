'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', 
function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number !!';

        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess > secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high ! ';
            score --;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '💣 You Died.';

            document.querySelector('body').style.backgroundColor='red';
        }
    }
    else if (guess < secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Too low ! ';
            score --;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '💣 You Died.';

            document.querySelector('body').style.backgroundColor='red';
        }
    
    }
    else if (!guess){
        document.querySelector('.message').textContent = '⛔ No number ! '
    };
});


document.querySelector('.again').addEventListener('click', 
function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('.number').style.width='15rem';
    document.querySelector('body').style.backgroundColor='#222';

});


