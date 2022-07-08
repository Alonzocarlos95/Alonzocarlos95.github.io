let weatherapi = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=105b11117168fa868409bd0f90b2dc7d';
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
//Forecast//
var wforecast = new XMLHttpRequest;
wforecast.open('GET','https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f87436f313bd1ba72f7dccef0583c3e0&units=imperial', true);
wforecast.send();
wforecast.onload = function () {
    var weatherdata = JSON.parse(wforecast.responseText);
    console.log(weatherdata);

    var listDate =[];
    var listtemp= [];
    var listIconCode = [];

    for (i=0; i < weatherdata.list.length; ++i) {
        time= weatherdata.list[i].dt_txt;
        if (time.includes("18:00:00")) {

            var date = new Date(weatherdata.list[i].dt * 1000);
            var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var findDate = weekday[date.getDay()] + '<br>' + month[date.getMonth()] + ' ' + date.getDate();
            listDate.push(findDate);
       
            var temp = weatherdata.list[i].main.temp;
            var temp = Math.round(temp);
            listtemp.push(temp);

            var iconcode = weatherdata.list[i].weather["0"].icon;
            var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
            listIconCode.push(icon_path);
        }
continue;
    }
    
    document.getElementById('day1').innerHTML = listDate[0];
    document.getElementById('day2').innerHTML = listDate[1];
    document.getElementById('day3').innerHTML = listDate[2];
    document.getElementById('day4').innerHTML = listDate[3];
    document.getElementById('day5').innerHTML = listDate[4];
    //Display corresponding weather icon
    document.getElementById('weather_icon1').src = listIconCode[0];
    document.getElementById('weather_icon2').src = listIconCode[1];
    document.getElementById('weather_icon3').src = listIconCode[2];
    document.getElementById('weather_icon4').src = listIconCode[3];
    document.getElementById('weather_icon5').src = listIconCode[4];
    //Display forecasted temperature
    document.getElementById("highTemp1").innerHTML = listtemp[0];
    document.getElementById("highTemp2").innerHTML = listtemp[1];
    document.getElementById("highTemp3").innerHTML = listtemp[2];
    document.getElementById("highTemp4").innerHTML = listtemp[3];
    document.getElementById("highTemp5").innerHTML = listtemp[4];
  
   
}

var aside = document.querySelector('aside');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    showData(townData);
}

function showData(jsonObj) {
    var data = jsonObj['towns'];
    for (var i = 0; i < data.length; i++) {
        var name = data[i].name;
        if ((name.includes("Preston")) == false) {
            continue;
        }
        var myDiv = document.createElement('div');
        var myList = document.createElement('ul');
        var townEvents = data[i].events;
        for (var j = 0; j < townEvents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[j];
            myList.appendChild(listItem);
        }
        myDiv.appendChild(myList);
        aside.appendChild(myDiv);
    }
}
