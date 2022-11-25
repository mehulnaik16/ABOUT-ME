var randomnumber1 = Math.floor((Math.random()*6)+1);
var dicechange ="dice" +randomnumber1+ ".png";
var randomdiceimg="images/"+dicechange;
var image1= document.querySelectorAll("img")[0].setAttribute("src",randomdiceimg);
var randomnumber2 =Math.floor((Math.random()*6)+1);
var dicechange1="dice"+randomnumber2+".png";
var randomdiceimg1="images/"+dicechange1;
var image2= document.querySelectorAll("img")[1].setAttribute("src",randomdiceimg1);
if (randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="player 1 won";
}
else if (randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="player 2 won";
}
else
{
    document.querySelector("h1").innerHTML="draw";
}