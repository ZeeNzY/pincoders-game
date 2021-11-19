var decks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//var decksymbols = ["&hearts;", "&diams;", "&clubs;", "&spades;"], // HTML symbols for cards

var resultElement = document.getElementById('result');
var resultDealerElement = document.getElementById('resultDealer');
var cardDisplay = document.getElementById('cards');
var dealercardDisplay = document.getElementById('dealerCards');
var playerPoints = document.getElementById('playerPoints');
var dealerPoints = document.getElementById('dealerPoints');

var dealerTotal = 0;
var userTotal = 0;

document.getElementById('deal').addEventListener('click', deal);
document.getElementById('hit').addEventListener('click', addCard);
document.getElementById('stay').addEventListener('click', ff);

<<<<<<< HEAD

function ff() {

    addDealerCard();
    sumCompare();



=======
function ff(){
        addDealerCard();
        displayDealerPoints(); 
        sumCompare();
>>>>>>> 1328c0fdcfde7285dfd983b6e7472470cbf19f92
}

addDealerCard();
addDealerCard();
displayDealerPoints();


function deal() {
    resultElement.innerText = '';

    var currentCards = document.getElementsByClassName('guestCard');
    for (var i = currentCards.length - 1; i > -1; i--) {
        cardDisplay.removeChild(currentCards[i]);
    }

    addCard();
    addCard();
    checkGameStatus();
    
}

function displayDealerPoints(){
    dealerPoints.innerText = dealerTotal;
}
function displayPlayerPoints(){
    playerPoints.innerText = userTotal;
}


function addCard() {
    var randomNum = Math.floor(Math.random() * decks.length);
    var newCard = decks[randomNum];

    var newCardElement = document.createElement('newCard');
    newCardElement.classList.add('guestCard');
    newCardElement.innerText = newCard;
    cardDisplay.appendChild(newCardElement);

    checkGameStatus();
    displayPlayerPoints();
    /*if((userTotal >= 21)) {
        addDealerCard();
        sumCompare();
    }*/
}

function addDealerCard() {
    var randomNum = Math.floor(Math.random() * decks.length);
    var newCard = decks[randomNum];

    var newCardElement = document.createElement('newCard');
    newCardElement.classList.add('dealerCard');
    newCardElement.innerText = newCard;
    dealercardDisplay.appendChild(newCardElement);
    checkGameStatusDealer();
}

function checkGameStatus() {
    var currentCards = document.getElementsByClassName('guestCard');

    var totalValueUser = 0;

    for (var i = 0; i < currentCards.length; i++) {
        totalValueUser = totalValueUser + getCardValue(currentCards[i]);
    }

    if (totalValueUser === 21) {
        result.innerText = 'BLACKJACK!';
    } else if (totalValueUser > 21) {
        result.innerText = 'BUST!';
    }

    userTotal = totalValueUser;
}

function checkGameStatusDealer() {
    var currentCards = document.getElementsByClassName('dealerCard');

    var totalValueDealer = 0;

    for (var i = 0; i < currentCards.length; i++) {
        totalValueDealer = totalValueDealer + getCardValue(currentCards[i]);
    }

    if (totalValueDealer === 21) {
        resultDealerElement.innerText = 'BLACKJACK!';
    } else if (totalValueDealer > 21) {
        resultDealerElement.innerText = 'BUST!';
    }

    dealerTotal = totalValueDealer;
}

function sumCompare() {

    if (userTotal > dealerTotal) {
        alert("You Won the Game");
    } else if (userTotal < dealerTotal) {
        alert("You Lost the Game");
    } else if (userTotal === dealerTotal) {
        alert("It's a Draw Game");
    }
    
}


function getCardValue(cardElement) {
    var cardValue = 0;

    if (cardElement.innerText === 'J' || cardElement.innerText === 'Q' || cardElement.innerText === 'K') {
        cardValue = 10;

    } else if (cardElement.innerText === 'A') {
        cardValue = 11;

    } else {
        cardValue = Number(cardElement.innerText);

    }

    return cardValue;
}