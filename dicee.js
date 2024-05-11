let randomNumber1= Math.floor((Math.random()*6)+1)
let randomDiceImages = `dice${randomNumber1}.png`;  //dice1.png to dice6.png
let randomImageSrc1 =`images/${randomDiceImages}`  //
let image1 =document.querySelectorAll("img")[0];


image1.setAttribute("src" ,randomImageSrc1);

let randomNumber2 = Math.floor((Math.random()*6)+1)
let randomDiceImages2 = `dice${randomNumber2}.png`;
let randomImageSrc2 =`images/${randomDiceImages2}`
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImageSrc2); 

// if player1 wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player:1 Wins:)🚩"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player:2 Wins:)🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw:("
}

