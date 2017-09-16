//Variables
var _currentLat;
var _currentLon;
var _currentcountry = "country";
var _currentcity = "city";
var _weatherstatus = "status";
var _currenttemp = "temp";

var locationinfo = new Object();
var weatherinfo = new Object();

var location = new Object();
var weather = new Object();

function getCurrentWeather(){

    locationinfo = retrieveIPlocation();
    
    console.log(locationinfo);

    _currentLat = locationinfo["latitude"];
    _currentLong = locationinfo["longitude"];
    _currentcountry = locationinfo["country_name"];
    _currentcity = locationinfo["city"];

    console.log(_currentLat + " " + _currentLong + " " + _currentcountry);

    weatherinfo = getCurrentWeatherInfo(_currentLat, _currentLong);

    console.log(weatherinfo);

    _weatherstatus = weatherinfo.weather.main;
    _currenttemp = weatherinfo.main.temp;
}

function getCurrentWeatherInfo(Lat, Long){

    $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat='+Lat+'&lon='+Long+'&units=metric&APPID=600777002eac9a316a691b9070f89457&callback=', function(data) {
        console.log(data);
        weather.load(data);
    });  
    return weather;
}

function retrieveIPlocation(){

    $.getJSON('https://freegeoip.net/json/?callback=', function(data) {
        console.log(data);
        location.load(data);
    });
    return location;
}
