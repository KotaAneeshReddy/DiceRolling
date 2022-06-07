var randomNumber1 = (Math.floor((Math.random())*6))+1;
 var image1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);

var randomNumber2 = (Math.floor((Math.random())*6))+1;
 var image2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);

if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 Wins ⛳️";
}
else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="⛳️ Player 1 Wins";
}
else{
  document.querySelector("h1").innerHTML="⛳️ Draw ⛳️";
}


// switch(randomNumber1){
//   case 1:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
//     break;
//   case 2:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
//     break;
//   case 3:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
//     break;
//   case 4:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
//     break;
//   case 5:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
//     break;
//   case 6:
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
//     break;
//
// }
