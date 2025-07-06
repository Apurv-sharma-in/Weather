 // dark mode function
      function dark_mode() {
        if (document.getElementById("dar_mode").checked == true) {
          document.body.style.backgroundColor = "black";
          document.body.style.color = "white";
        } else {
          document.body.style.backgroundColor = " rgb(190, 229, 231)";
          document.body.style.color = "rgba(41, 32, 32, 0.815)";
        }
      }
      // dark mode function

      // api starts her
      window.addEventListener("load", api);
      window.addEventListener("load", game);
    async  function api () {
      
          var city 
          if (city == ""){
            city = "delhi"
          }
          else{
            city = document.getElementById("search").value
          }
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&exclude=daily&appid=9fe099c984cd62c248591f31248c7f3e`;

        var Request = new XMLHttpRequest();
        Request.open("GET", url, true);
        Request.onload = function () {
          var obj = JSON.parse(this.response);
          console.log( " api 1st  " + obj );
          //  How to get days and date of the day through api
          var day = obj.dt;
          var day_name = new Date(day * 1000);
          const dayofweekname = day_name.toLocaleDateString("en-US", {
            weekday: "long",
          });
          var date = day_name.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
          //  How to get days and date of the day through api
          var lat = obj.coord.lat;
          var lon = obj.coord.lon;
         
          game(lat, lon);

          
          // How to change weather Icon through api
          // var weather_icon = obj.weather[0].icon;
          // const weatherIconimg = {
          //   "01d": "/01d_Sun_day.gif",
          //   "01n": "https://openweathermap.org/img/wn/01n@2x.png",

          //   "02d": "https://openweathermap.org/img/wn/02d@2x.png",
          //   "02n": "https://openweathermap.org/img/wn/02n@2x.png",

          //   "03d": "https://openweathermap.org/img/wn/03d@2x.png",
          //   "03n": "https://openweathermap.org/img/wn/03n@2x.png",

          //   "04d": "https://openweathermap.org/img/wn/04d@2x.png",
          //   "04n": "/01d_Sun_day.gif",

          //   "09d": "https://openweathermap.org/img/wn/09d@2x.png",
          //   "09n": "https://openweathermap.org/img/wn/09n@2x.png",

          //   "10d": "https://openweathermap.org/img/wn/10d@2x.png",
          //   "10n": "https://openweathermap.org/img/wn/10n@2x.png",

          //   "13d": "https://openweathermap.org/img/wn/13d@2x.png",
          //   "13n": "https://openweathermap.org/img/wn/13n@2x.png",

          //   "50d": "https://openweathermap.org/img/wn/50d@2x.png",
          //   "50n": "https://openweathermap.org/img/wn/50n@2x.png",
          // };
          // document.getElementById("cloud_img").src =
          //   weatherIconimg[weather_icon];

            document.getElementById("day").innerHTML = dayofweekname;
          document.getElementById("date").innerHTML = date;
        };

        if (Request.status >= 200 && Request.status < 400) {
          console.log(" api  " + obj)
        } else {
          console.log("error");
        }

        Request.send();
      }

      // 5 day and 3 hour stamp  api starts here
      function game(lat, lon) {
        var brl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&exclude=daily&appid=9fe099c984cd62c248591f31248c7f3e`;
        var Request = new XMLHttpRequest();
        Request.open("GET", brl, true);
        Request.onload = function () {
          var bbj = JSON.parse(this.response);
          console.log(bbj);          
          const now = new Date();
          const current = now.getHours();

          
          
          if(current >=0 && current < 15  ){
            
            document.getElementById("temp").innerHTML = bbj.list[0].main.temp.toString().slice(0,2) + "<sup>o</sup>C";
            document.getElementById("weather_text").innerHTML = bbj.list[0].weather[0].main;
            document.getElementById("wind_speed").innerHTML = Math.round(bbj.list[0].wind.speed * 3.6) + " mph ";
            document.getElementById("humidity").innerHTML = bbj.list[0].main.humidity + " % " ;
            document.getElementById("rain").innerHTML = bbj.list[0].weather[0].description || "NA";
            document.getElementById("uv").innerHTML = bbj.list[0].visibility /1000+ " /Km ";  
            

            
         var weather_icon = bbj.list[0].weather[0].icon;
          const weatherIconimg = {
            "01d": "/01d_Sun_day.gif",
            "01n": "https://openweathermap.org/img/wn/01n@2x.png",

            "02d": "https://openweathermap.org/img/wn/02d@2x.png",
            "02n": "https://openweathermap.org/img/wn/02n@2x.png",

            "03d": "https://openweathermap.org/img/wn/03d@2x.png",
            "03n": "https://openweathermap.org/img/wn/03n@2x.png",

            "04d": "https://openweathermap.org/img/wn/04d@2x.png",
            "04n": "/01d_Sun_day.gif",

            "09d": "https://openweathermap.org/img/wn/09d@2x.png",
            "09n": "https://openweathermap.org/img/wn/09n@2x.png",

            "10d": "/rain.svg",
            "10n": "/rain.svg",

            "13d": "https://openweathermap.org/img/wn/13d@2x.png",
            "13n": "https://openweathermap.org/img/wn/13n@2x.png",

            "50d": "https://openweathermap.org/img/wn/50d@2x.png",
            "50n": "https://openweathermap.org/img/wn/50n@2x.png",
          };
          document.getElementById("cloud_img").src =
            weatherIconimg[weather_icon];


            
          }
          else if(current >= 15 && current < 18  ){
            
            document.getElementById("temp").innerHTML = bbj.list[1].main.temp.toString().slice(0,2) + "<sup>o</sup>C";

            document.getElementById("weather_text").innerHTML = bbj.list[1].weather[0].main;
            document.getElementById("wind_speed").innerHTML = Math.round(bbj.list[1].wind.speed * 3.6) + " mph ";
            document.getElementById("humidity").innerHTML = bbj.list[1].main.humidity + " % " ;
            document.getElementById("rain").innerHTML = bbj.list[1].weather[0].description || "NA";
            document.getElementById("uv").innerHTML = bbj.list[1].visibility /1000+ " /Km ";  

            

                   var weather_icon = bbj.list[1].weather[0].icon;
          const weatherIconimg = {
            "01d": "/01d_Sun_day.gif",
            "01n": "https://openweathermap.org/img/wn/01n@2x.png",

            "02d": "https://openweathermap.org/img/wn/02d@2x.png",
            "02n": "https://openweathermap.org/img/wn/02n@2x.png",

            "03d": "https://openweathermap.org/img/wn/03d@2x.png",
            "03n": "https://openweathermap.org/img/wn/03n@2x.png",

            "04d": "https://openweathermap.org/img/wn/04d@2x.png",
            "04n": "/01d_Sun_day.gif",

            "09d": "https://openweathermap.org/img/wn/09d@2x.png",
            "09n": "https://openweathermap.org/img/wn/09n@2x.png",

            "10d": "/rain.svg",
            "10n": "/rain.svg",

            "13d": "https://openweathermap.org/img/wn/13d@2x.png",
            "13n": "https://openweathermap.org/img/wn/13n@2x.png",

            "50d": "https://openweathermap.org/img/wn/50d@2x.png",
            "50n": "https://openweathermap.org/img/wn/50n@2x.png",
          };
          document.getElementById("cloud_img").src =
            weatherIconimg[weather_icon];


          }
          else if(current >= 18 && current < 21 ){
            
            document.getElementById("temp").innerHTML = bbj.list[2].main.temp.toString().slice(0,2) + "<sup>o</sup>C";

            document.getElementById("weather_text").innerHTML = bbj.list[2].weather[0].main;
            document.getElementById("wind_speed").innerHTML = Math.round(bbj.list[2].wind.speed * 3.6) + " mph ";
            document.getElementById("humidity").innerHTML = bbj.list[2].main.humidity + " % " ;
            document.getElementById("rain").innerHTML = bbj.list[2].weather[0].description || "NA";
            document.getElementById("uv").innerHTML = bbj.list[2].visibility + " /Km ";  
            document.getElementById("uv").innerHTML = bbj.list[2].visibility /1000+ " /Km ";  
            


          var weather_icon = bbj.list[2].weather[0].icon;
          const weatherIconimg = {
            "01d": "/01d_Sun_day.gif",
            "01n": "https://openweathermap.org/img/wn/01n@2x.png",

            "02d": "https://openweathermap.org/img/wn/02d@2x.png",
            "02n": "https://openweathermap.org/img/wn/02n@2x.png",

            "03d": "https://openweathermap.org/img/wn/03d@2x.png",
            "03n": "https://openweathermap.org/img/wn/03n@2x.png",

            "04d": "https://openweathermap.org/img/wn/04d@2x.png",
            "04n": "/01d_Sun_day.gif",

            "09d": "https://openweathermap.org/img/wn/09d@2x.png",
            "09n": "https://openweathermap.org/img/wn/09n@2x.png",

            "10d": "/rain.svg",
            "10n": "/rain.svg",

            "13d": "https://openweathermap.org/img/wn/13d@2x.png",
            "13n": "https://openweathermap.org/img/wn/13n@2x.png",

            "50d": "https://openweathermap.org/img/wn/50d@2x.png",
            "50n": "https://openweathermap.org/img/wn/50n@2x.png",
          };
          document.getElementById("cloud_img").src =
            weatherIconimg[weather_icon];


          }
         
         else if(current >= 21 && current < 24  ){

            document.getElementById("temp").innerHTML = bbj.list[3].main.temp.toString().slice(0,2) + "<sup>o</sup>C";

            document.getElementById("weather_text").innerHTML = bbj.list[3].weather[0].main;
            document.getElementById("wind_speed").innerHTML = Math.round(bbj.list[3].wind.speed * 3.6) + " mph ";
            document.getElementById("humidity").innerHTML = bbj.list[3].main.humidity + " % " ;
            document.getElementById("rain").innerHTML = bbj.list[3].weather[0].description || "NA";
            document.getElementById("uv").innerHTML = bbj.list[3].visibility /1000+ " /Km ";  
             console.log(" dikh nahi rha hai kuch  " + bbj.list[3].visibility /1000+ " /Km ");


    var weather_icon = bbj.list[3].weather[0].icon;
          const weatherIconimg = {
            "01d": "/01d_Sun_day.gif",
            "01n": "/weather-icons-master/design/fill/animation-ready/clear-night.svg",
          
            "02d": "/weather-icons-master/design/fill/animation-ready/overcast-day.svg",
            "02n": "/weather-icons-master/design/fill/animation-ready/overcast-night.svg",

            "03d": "/weather-icons-master/design/fill/animation-ready/cloudy.svg",
            "03n": "/weather-icons-master/design/fill/animation-ready/cloudy.svg",

            "04d": "weather-icons-master/design/fill/animation-ready/overcast.svg",
            "04n": "weather-icons-master/design/fill/animation-ready/overcast-night.svg",

            "09d": "weather-icons-master/design/fill/animation-ready/partly-cloudy-day-snow.svg",
            "09n": "weather-icons-master/design/fill/animation-ready/partly-cloudy-night-snow.svg",

            "10d": "/rain.svg",
            "10n": "/rain.svg",

            "11d" : "weather-icons-master/design/fill/animation-ready/thunderstorm-day.svg",
            "11d" : "weather-icons-master/design/fill/animation-ready/thunderstrom-night.svg",
            
            "13d": "weather-icons-master/design/fill/animation-ready/snow.svg",
            "13n": "weather-icons-master/design/fill/animation-ready/snow.svg",
            

            "50d": "weather-icons-master/design/fill/animation-ready/mist.svg",
            "50n": "weather-icons-master/design/fill/animation-ready/mist.svg",
            
          };
          document.getElementById("cloud_img").src =
            weatherIconimg[weather_icon];


          }
         


         /// difrent  
          for (let i = 0; i < bbj.list.length; i++) {
            var day = bbj.list[i].dt_txt;
            var day_name = new Date(day);
            const dayofweekname = day_name.toLocaleDateString("en-US", {
              weekday: "long",
            });

            const shortName = dayofweekname.slice(0, 3);
          

            if (i == 0) {
              document.getElementById("UpComing_1").innerHTML = shortName;
              document.getElementById("time_1").innerHTML =
                Math.round(bbj.list[i].main.temp) + "<sup>o</sup>C";
              document.getElementById("colud_1").src =
                "https://openweathermap.org/img/wn/" +
                bbj.list[i].weather[0].icon +
                "@2x.png";
            } else if (i == 6) {
              document.getElementById("UpComing_2").innerHTML = shortName;
              document.getElementById("time_2").innerHTML =
                Math.round(bbj.list[i].main.temp) + "<sup>o</sup>C";
              document.getElementById("colud_2").src =
                "https://openweathermap.org/img/wn/" +
                bbj.list[i].weather[0].icon +
                "@2x.png";
            } else if (i == 16) {
              document.getElementById("UpComing_3").innerHTML = shortName;
              document.getElementById("time_3").innerHTML =
                Math.round(bbj.list[i].main.temp) + "<sup>o</sup>C";
              document.getElementById("colud_3").src =
                "https://openweathermap.org/img/wn/" +
                bbj.list[i].weather[0].icon +
                "@2x.png";
            } else if (i == 22) {
              document.getElementById("UpComing_4").innerHTML = shortName;
              document.getElementById("time_4").innerHTML =
                Math.round(bbj.list[i].main.temp) + "<sup>o</sup>C";
              document.getElementById("colud_4").src =
                "https://openweathermap.org/img/wn/" +
                bbj.list[i].weather[0].icon +
                "@2x.png";
            } else if (i == 30) {
              document.getElementById("UpComing_5").innerHTML = shortName;
              document.getElementById("time_5").innerHTML =
                Math.round(bbj.list[i].main.temp) + "<sup>o</sup>C";
              document.getElementById("colud_5").src =
                "https://openweathermap.org/img/wn/" +
                bbj.list[i].weather[0].icon +
                "@2x.png";
            } else if (i == 38) {
              document.getElementById("UpComing_6").innerHTML = shortName;
              document.getElementById("time_6").innerHTML =
                Math.round(bbj.list[i].main.temp) + "<sup>o</sup>C";
              document.getElementById("colud_6").src =
                "https://openweathermap.org/img/wn/" +
                bbj.list[i].weather[0].icon +
                "@2x.png";
            } else {
            }
          }
        };
        Request.send();
      }