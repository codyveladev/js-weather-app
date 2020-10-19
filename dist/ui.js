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
        console.log(weather.data[0])
        this.location.textContent = `${weather.data[0].city_name}, ${weather.data[0].state_code}`; 


        //Description
        this.desc.textContent = `${weather.data[0].weather.description}`; 

        let temp = weather.data[0].temp;
        this.id.textContent = `${temp.toPrecision(3)} °C`;

        let icon = weather.data[0].weather.icon;
        console.log(icon)
        this.icon.setAttribute(
          'src',
          `https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`
        );

        //Humidity 
        let humidity = weather.data[0].rh;
        this.humidity.textContent = ` Humidity: ${humidity}%`;

        //uv
        this.hi_lo.textContent = `UV Index: ${weather.data[0].uv}`;


        //feels like 
        let feels_like = weather.data[0].app_temp;
        this.feelsLike.textContent = `Feels like ${feels_like.toPrecision(3)}°C`;
        
        // //wind
        // let wind_speed = weather.wind.speed; 
        // wind_speed = wind_speed * 2.237;

        // let wind_direction = weather.wind.deg
        // let directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"]; 
        
        // let index = wind_direction % 360; 

        // index = Math.round(index / 22.5, 0) + 1; 

        // let direction; 

        // if(index > 0){
        //     direction = directions[index - 1];
        // }
        // else{
        //     direction = directions[index]; 
        // }

        let direction = weather.data[0].wind_cdir;
        let wind_speed = weather.data[0].wind_spd;

        wind_speed = wind_speed * 2.237; 


        this.wind.textContent = `Winds moving ${direction} at ${wind_speed.toPrecision(3)} mph`; 


    }
}