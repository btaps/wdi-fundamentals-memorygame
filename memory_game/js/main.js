var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay = []; 

var x = 1;
sessionStorage.setItem('gameScore', x);
var key = sessionStorage.getItem('gameScore');


//function keepScore(){
//	if(key === key){
//		x = key + 1;
//		sessionStorage.setItem('gameScore', x)
//	}else{
//		return;
//	}
//}





function checkForMatch(){

if(cardsInPlay.length === 2){
	setTimeout(function(){
		location.reload();
	}, 1800);
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
			x = x + 1
			console.log(sessionStorage.getItem('gameScore'));
			alert("You found a match! Your score is: " + x );
			return x
		}else{
			alert("Sorry, try again. Your score is: " + x);
		}
	}	

console.log(key)
}


function flippedCard(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank)
	console.log('User flipped ' + cards[cardId].rank)	
	this.setAttribute('src', cards[cardId].cardImage)
	checkForMatch();
}

function createBoard(){
	for(let i = 0; i < cards.length; i++){
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flippedCard)
		document.getElementById('game-board').appendChild(cardElement);
	};
	console.log('working');
};



createBoard();





