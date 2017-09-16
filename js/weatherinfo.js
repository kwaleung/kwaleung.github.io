//Variables
var _currentLat = "lat";
var _currentLong = "long";
var _currentcountry = "country";
var _currentcity = "city";
var _weatherstatus = "status";
var _currenttemp = "temp";

function getCurrentLocationInfo(){

    var locationinfo = retrieveJSON();

    _currentLat = locationinfo.latitude;
    _currentLong = locationinfo.longitude;
    _currentcountry = locationinfo.country_name;
    _currentcity = locationinfo.city;

    var weatherinfo = getCurrentWeatherInfo(_currentLat, _currentLong);

    _weatherstatus = weatherinfo.weather.main;
    _currenttemp = weatherinfo.main.temp;
}

function getCurrentWeatherInfo(Lat, Long){

    $.getJSON('api.openweathermap.org/data/2.5/weather?lat='+Lat+'&lon='+Long+'&units=metric&callback=', function(data) {
        return data;
    });
}

function retrieveIPlocation(){
    $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
        return data;
    });
}
