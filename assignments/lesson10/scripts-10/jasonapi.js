let weatherapi = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f87436f313bd1ba72f7dccef0583c3e0';
weatherapi.open('GET', apiURLstring, true);
weatherapi.send();

weatherapi.onload = function() {

    let weatherdata = JSON.parse(weatherapi.responseText);

    console.log(weatherdata);

    document.getElementById("current-condition").innerHTML = weatherdata.weather[0].description;
    document.getElementById("hightemp").innerHTML = weatherdata.main.temp;                      
    document.getElementById("hum").innerHTML = weatherdata.main.humidity;
    document.getElementById("wind-speed").innerHTML = weatherdata.wind.speed;

     //windchill
     var windChill = 35.74 + 0.6215 * weatherdata.main.temp - 35.75 * Math.pow(weatherdata.wind.speed, 0.16) + 0.4275 * weatherdata.main.temp * Math.pow(weatherdata.wind.speed, 0.16);
     windChill = Math.round(windChill);
     document.getElementById("windChill").innerHTML = windChill;

}