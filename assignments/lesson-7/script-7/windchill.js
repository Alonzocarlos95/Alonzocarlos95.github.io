



var temp= parseInt(document.getElementById("temp").innerHTML);

var wind= parseInt(document.getElementById("wind").innerHTML);

var total= 0.0817*(3.71*(Math.pow(wind, 0.5))+
5.81-0.25*wind)*(temp-91.4)+91.4;
total=Math.round(total);
document.getElementById("windchill").innerHTML=total;