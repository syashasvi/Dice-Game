
var x = Math.floor(Math.random()*6)+1;
var randomDiceImg = "dice" + x + ".png";
var randomimgSource = "images/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomimgSource);

var y = Math.floor(Math.random()*6)+1;
var randomimgSource2 = "images/" + "dice" + y + ".png";
var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src" , randomimgSource2);

if(x>y)
{
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(x<y)
{
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else
{
    document.querySelector("h1").innerHTML = "DRAW";
}
