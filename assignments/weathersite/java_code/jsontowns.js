var article= document.querySelector('article');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var town = request.response;
    //populateHeader(town);
    showPueblos(town);
}
function showPueblos(jsonObj) {
    var pueblos = jsonObj['towns'];

    for (var i = 0; i < pueblos.length; i++) {
        var name = pueblos[i].name;
        if((name.includes("Preston") || name.includes("Soda Springs") || name.includes("Fish Haven")) == false) {
        continue;
        }
        var myArticle = document.createElement('div');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('h6');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPicture = document.createElement('img');
    
        myH3.textContent = pueblos[i].name;
        myPara1.textContent =  pueblos[i].motto;
        myPara2.textContent = 'Year founded: ' + pueblos[i].yearFounded;
        myPara3.textContent = 'Current Population:' + pueblos[i].currentPopulation;
        myPara4.textContent = 'Average Rainfall:' + pueblos[i].averageRainfall;
        
        if (name.includes("Fish Haven")) {
            myPicture.src ="images/fishhaven2.jpg"
            myPicture.setAttribute('class', 'townPhoto');
             myPicture.setAttribute('alt','Fish Haven Pic');
             myArticle.style.order = "3";
        }
        if (name.includes("Preston")) {
            myPicture.src = 'images/preston1.jpg'
            myPicture.setAttribute('class', 'townPhoto');
         myPicture.setAttribute('alt', 'Preston Photo');
        myArticle.style.order = "1";
        }
        if (name.includes("Soda Springs")) {
            myPicture.src = 'images/springs.jpg'
            myPicture.setAttribute('class', 'townPhoto');
            myPicture.setAttribute('alt', 'Soda Springs Photo');
            myArticle.style.order = "2";
        }

        
    
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPicture);
    
    
        article.appendChild(myArticle);
      }

    }