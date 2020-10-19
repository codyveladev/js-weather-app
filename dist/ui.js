class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.id = document.getElementById('id-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.hi_lo = document.getElementById('w-hi_lo');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind'); 
    }

    paint(weather){
        //Location
        this.location.textContent = `${weather.name}, ${weather.sys.country}`; 

        //Description
        let desc = weather.weather[0].description;
        JSON.stringify(desc); 
        this.desc.textContent = desc; 

        //Temp 
        let temp = weather.main.temp;
        temp = (temp - 273.15) * (9/5) + 32;
        this.id.textContent = `${temp.toPrecision(3)} °F`;

        //ICON
        let icon = weather.weather[0].icon
        this.icon.setAttribute('src', `https://openweathermap.org/img/w/${icon}.png`);

        //Humidity 
        let humidity = weather.main.humidity;
        this.humidity.textContent = ` Humidity: ${humidity}%`;

        //Hi lo temp
        let max_temp = weather.main.temp_max; 
        max_temp = (max_temp - 273.15) * (9 / 5) + 32;
        let min_temp = weather.main.temp_min;
        min_temp = (min_temp - 273.15) * (9 / 5) + 32;
        this.hi_lo.textContent = `High: ${max_temp.toPrecision(3)}°F Low ${min_temp.toPrecision(3)}°F`;


        //feels like 
        let feels_like = weather.main.feels_like;
        feels_like = (feels_like - 273.15) * (9 / 5) + 32;
        this.feelsLike.textContent = `Feels like ${feels_like.toPrecision(3)}°F`;
        
        //wind
        let wind_speed = weather.wind.speed; 
        wind_speed = wind_speed * 2.237;

        let wind_direction = weather.wind.deg
        let directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"]; 
        
        let index = wind_direction % 360; 

        index = Math.round(index / 22.5, 0) + 1; 

        let direction; 

        if(index > 0){
            direction = directions[index - 1];
        }
        else{
            direction = directions[index]; 
        }


        this.wind.textContent = `Winds moving ${direction} at ${wind_speed.toPrecision(3)} mph`; 


    }
}