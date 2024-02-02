var randomnum1 = Math.floor(Math.random() * 6) + 1;//1-6
var image= "dice" + randomnum1 +".png";//dice1.png
var imageloc = "images/" +image;//images/dice1.png

var play1=document.querySelectorAll("img")[0];//QuerySelectorAll->2 images
play1.setAttribute("src",imageloc);


var randomnum2 = Math.floor(Math.random() * 6) + 1;
var image2= "dice" + randomnum2 +".png";
var imageloc2 = "images/" +image2;

var play2=document.querySelectorAll("img")[1];
play2.setAttribute("src",imageloc2);


if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="<em>🚩 Player 1 Wins!</em>";
}
else if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML="<em>Player 2 Wins!🚩</em>";
}
else{
    document.querySelector("h1").innerHTML="<em>Draw!</em>";
    
}
