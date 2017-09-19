function getCurrentWeather(){

    //Variables
    var _currentLat;
    var _currentLon;
    var _currentcountry = "country";
    var _currentcity = "city";
    var _weatherstatus = "status";
    var _currenttemp = "temp";

    var infoDiv = document.getElementById("weatherinfo");

    var locationinfo = new Object();
    var weatherinfo = new Object();

    locationinfo = retrieveIPlocation();

    _currentLat = locationinfo["latitude"];
    _currentLong = locationinfo["longitude"];
    _currentcountry = locationinfo["country_name"];
    _currentcity = locationinfo["city"];

    weatherinfo = getCurrentWeatherInfo(_currentLat, _currentLong);

    _weatherstatus = weatherinfo.weather[0].description;
    _currenttemp = weatherinfo.main.temp;

    infoDiv.innerHTML = (_currentcountry + ", " + _currentcity + " || " + _weatherstatus + " " + _currenttemp + "&#8451");
}

function getCurrentWeatherInfo(Lat, Long){
    var weather = new Object();
    $.ajax(
        {
            type: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?lat='+Lat+'&lon='+Long+'&units=metric&lang=zh_cn&APPID=600777002eac9a316a691b9070f89457&callback=',
            dataType: 'json',
            async: false,
            success: function(data)
            {
                weather = data;
            }
        }
    );
    return weather;
}

function retrieveIPlocation(){
    var location = new Object();
    $.ajax(
        {
            type: 'GET',
            url: 'https://freegeoip.net/json/?callback=',
            dataType: 'json',
            async: false,
            success: function(data)
            {
                location = data;
            }
        }
    );
    return location;
}

