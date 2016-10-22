function getWeather(callback) {
    var weather = 'http://api.openweathermap.org/data/2.5/weather?q=SouthKorea?id=524901&APPID=acd9e31a500adfb46f0db3d04febc934';
    $.ajax({
        dataType: "jsonp",
        url: weather,
        success: callback
    });
  };
    function getIcon(callback,iconNumber){
        var url = "http://openweathermap.org/img/w/"+iconNumber+".png";
    $.ajax({
        dataType: "jsonp",
        url: url,
        success: callback
    });
    }
       window.onload = getWeather(function(data){
            $("#weather").html("<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>");
    });
        