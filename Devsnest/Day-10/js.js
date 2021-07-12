const cards = document.querySelectorAll('.memory-card');
const score = document.querySelector('.score');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let scores=0;
display();

function flipcard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    moves++;
    display();
    checkformatch();
}
function display(){
    score.innerHTML = `<div class = "count"><h1>MOVES: ${moves}</h1><h1>  SCORES: ${scores}</div>`
    
}

function checkformatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    scores++;
    display();
    
    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click', flipcard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach(card => {
        let randompos = Math.floor(Math.random()*12);
    card.style.order = randompos
    });
})();
cards.forEach(card => card.addEventListener('click', flipcard));
