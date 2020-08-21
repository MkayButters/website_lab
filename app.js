'use strict'


// function name(){
// var userName = prompt('What is your name?')
//     return userName;
// }
// var userName = name();

// function welcome(userName){
// if (userName === "GOD") {
//     document.write('<h1>' + 'WELCOME CREATOR ' + userName + '</h1>')
// }
// else {
//     document.write('<h1>' + 'Welcome ' + userName + '</h1>')
// }
// }
// welcome(userName);

// function dogbread(dogbreed){
// var dogbreed = prompt('Whats your favorite breed of dog?');
//     return dogbreed;
// }
// var dogbreed = dogbread();

// function question(dogbreed){
// if (dogbreed === "black lab"){
//     alert(userName + ' Black labs are the best!');
// } 
// else {
//     alert(userName + ' well i like black labs');
// }
// }
// question(dogbreed); 

// function joke (dogbone){
// var dogbone = prompt('What dog keeps the best time?');
//     return dogbone;
// }
// var dogbone = joke();

// function jokeanswer(dogbone){
// if (dogbone === "a watch dog"){
//     alert(userName+ "how did you guess that?");
// }
// else {
//     alert(userName + ", A Watch Dog");
// }
// }
// joke(dogbone);

//Create number guessing game 1-100
//give users 5 chances to guess correct number
//if they get the right answer tell them
//if they dont get the right answer tell thigh or low
//after 5 incorrect tries give them the answer

function guess_a_number() {
    var correctAnswer = 37;
    var playgame = prompt('Do you want to play a game?(saw voice)');
    while(playgame === 'yes'){
        for (var i = 0; i < 5; i = i + 1){
            var userGuess = parseInt(prompt('Please enter a number 1-100'));
            if (userGuess === correctAnswer){
                alert('You guessd correct!')
                break;
            } else if(userGuess < correctAnswer){
                alert('You guessed to low')
            } else if (userGuess > correctAnswer){
                alert('You guessed to high')
            }
            if(i === 4){
                alert('The correct answer is' + correctAnswer);
            }
        }
        playgame = prompt('Do you want to play again?')
    }
}

guess_a_number();
