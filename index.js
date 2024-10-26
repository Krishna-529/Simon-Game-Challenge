const greenAudio = new Audio('sounds/green.mp3');
const blueAudio = new Audio('sounds/blue.mp3');
const redAudio = new Audio('sounds/red.mp3');
const yellowAudio = new Audio('sounds/yellow.mp3');
const wrongAudio = new Audio('sounds/wrong.mp3')

const pressButton = (number) => {
    if(number === 0){
        greenAudio.play();
        $("#green").css("transition", "transform 0.1s ease");
        $("#green").css("transform", "scale(1.1)")
        setTimeout(() => {
            $("#green").css("transform", "scale(1)");
        }, 100);
    }
    if(number === 1){
        blueAudio.play();
        $("#blue").css("transition", "transform 0.1s ease");
        $("#blue").css("transform", "scale(1.1)")
        setTimeout(() => {
            $("#blue").css("transform", "scale(1)");
        }, 100);
    }
    if(number === 2){
        redAudio.play();
        $("#red").css("transition", "transform 0.1s ease");
        $("#red").css("transform", "scale(1.1)")
        setTimeout(() => {
            $("#red").css("transform", "scale(1)");
        }, 100);
    }
    if(number === 3){
        yellowAudio.play();
        $("#yellow").css("transition", "transform 0.1s ease");
        $("#yellow").css("transform", "scale(1.1)")
        setTimeout(() => {
            $("#yellow").css("transform", "scale(1)");
        }, 100);
    }
}

let newHeading = "Press A Key to Start";
const changeHeadingTo = (newHeading) => {
    $("h1").html(newHeading); 
};
changeHeadingTo(newHeading);

var gameStarted = false;
$(document).keydown(function(event) {
    if(!gameStarted)    startGame();
});

var nextSequence = [];
var i=0;
const startGame = function(){
    gameStarted = true;
    i=0;
    let lastKey = Math.floor(4*Math.random());
    nextSequence.push(lastKey);
    changeHeadingTo('Level ' + nextSequence.length);
    pressButton(lastKey);
}

$(".btn").on("click", function () {
    const id = $(this).attr("id");
    let lastValue = clicked(id);
    
    let check = checkSequence(i, lastValue, nextSequence);
    if(check){
        if(i<nextSequence.length-1)   i++;
        else setTimeout(() => {
            startGame();
        }, 500); 
    }
    else   setTimeout(() => {
        endGame();
    }, 500); 

});

const checkSequence = function(i, lastValue, nextSequence){
    if(lastValue === nextSequence[i])   return true;
    else return false;
}

const endGame = function(){
    changeHeadingTo(`Game over at ${nextSequence.length}. Press A key to restart.`)
    nextSequence = [];
    gameStarted = false;
    wrongAudio.play();
}

const clicked = (id) => {
    let returnValue;
    if (id === "green") {
        pressButton(0);
        returnValue = 0;return returnValue;
    } else if (id === "blue") {
        pressButton(1);
        returnValue = 1;return returnValue;
    } else if (id === "red") {
        pressButton(2);
        returnValue = 2;return returnValue;
    } else if (id === "yellow") {
        pressButton(3);
        returnValue = 3;return returnValue;
    }
};
