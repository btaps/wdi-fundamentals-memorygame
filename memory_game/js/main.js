var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = []; 

function checkForMatch(){
if(cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}else{
			alert("Sorry, try again.");
		}
	}
}

function flippedCard(cardId){

	cardsInPlay.push(cards[cardId])
	console.log('User flipped ' + cards[cardId])
	checkForMatch();
}

flippedCard(0);
flippedCard(2);

