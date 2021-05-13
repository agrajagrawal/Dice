var player1Name = (prompt("Enter Player 1 Name","Player 1")).toUpperCase();
var player2Name = prompt("Enter Player 2 Name","Player 2").toUpperCase();

document.querySelectorAll('.p1')[0].innerHTML=player1Name;
document.querySelectorAll('.p2')[0].innerHTML=player2Name;

player1Name = player1Name[0].toUpperCase() + player1Name.slice(1,player1Name.length).toLowerCase();
player2Name = player2Name[0].toUpperCase() + player2Name.slice(1,player2Name.length).toLowerCase();

var rand1 = Math.floor(Math.random() * 6) + 1;

var imagedice1 = "images/dice" + rand1 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src",imagedice1);

var rand2 = Math.floor(Math.random() * 6) + 1;

var imagedice2 = "images/dice" + rand2 + ".png";

document.getElementsByClassName("img2")[0].setAttribute("src",imagedice2);

if(rand1 > rand2){
  document.querySelectorAll('h1')[0].innerHTML=player1Name + " Won" ;
}
else if (rand1 < rand2){
  document.querySelectorAll('h1')[0].innerHTML=player2Name + " Won" ;
}
else{
  document.querySelectorAll('h1')[0].innerHTML = "Draw 🎲";
}
