function getCurrentWeather(){

    //Variables
    var _currentLat = 24.9837322;
    var _currentLon = 121.5426982;
    var _currentcountry = "country";
    var _currentcity = "city";
    var _weatherstatus = "status";
    var _currenttemp = "temp";

    var infoDiv = document.getElementById("weatherinfo");

    var locationinfo = new Object();
    var weatherinfo = new Object();

    locationinfo = retrievelocationkey(_currentLat, _currentLon);

    //_currentLat = locationinfo["latitude"];
    //_currentLong = locationinfo["longitude"];
    var locationkey = locationinfo[0].Key;
    _currentcountry = locationinfo[0].Country.LocalizedName;
    _currentcity = locationinfo[0].LocalizedName;

    weatherinfo = getCurrentWeatherInfo(locationkey);

    _weatherstatus = weatherinfo[0].WeatherText;
    _currenttemp = weatherinfo[0].Temperature.Metric.Value;

    var displaystring;

    if (_currentcity == "")
    {
        displaystring = (_currentcountry + " || " + _weatherstatus + " " + _currenttemp + "&#8451");
    }
    else
    {
        displaystring = (_currentcountry + ", " + _currentcity + " || " + _weatherstatus + " " + _currenttemp + "&#8451");
    }

    infoDiv.innerHTML = displaystring;
}

function getCurrentWeatherInfo(LocKey){
    var weather = new Object();
    $.ajax(
        {
            type: 'GET',
            url: `https://apidev.accuweather.com/currentconditions/v1/${LocKey}.json?language=zh-cn&apikey=c93f47e94a7243e3a3eb028fdbb6fbc0`,
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

function retrievelocationkey(lat, long){    
    var location = new Object();
    $.ajax(
        {
            type: 'GET',
            url: `https://apidev.accuweather.com/locations/v1/geoposition/search.json?q=${lat},${long}&language=zh-cn&apikey=c93f47e94a7243e3a3eb028fdbb6fbc0`,
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

