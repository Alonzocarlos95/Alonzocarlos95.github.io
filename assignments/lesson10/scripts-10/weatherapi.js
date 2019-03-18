let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f87436f313bd1ba72f7dccef0583c3e0';
weatherRequest.open('GET',apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    
    let weatherData = JSON.parse(weatherRequest.responseText);

    console.log(weatherData);

    document.getElementById("current-temp").innerHTML = weatherData.main.temp;

 let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
let desc = weatherData.weather[0].description;
document.getElementById("cc-img").setAttribute('src',icon);
document.getElementById("cc-img").setAttribute('description',desc);
 
}
