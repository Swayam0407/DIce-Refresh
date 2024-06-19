var random1 = Math.floor(6*Math.random()+1);
var random2 = Math.floor(6*Math.random()+1);

var img1 = "/D-images/dice" + random1 + ".png";
var img2 = "/D-images/dice" + random2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", img1);
document.querySelector(".dice .img2").setAttribute("src", img2);

if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}

else if(random1<random2){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}