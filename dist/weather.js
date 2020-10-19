class Weather{
    constructor(city, state, country){
        this.apiKey = '29e07fcd63c362c8e5bdd00faa631262';
        this.city = city; 
        this.state = state;
        this.country = country; 

    }
    //Fetch Weather 
    async getWeather(){
            
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},&appid=${this.apiKey}`);
        if(response.status === 200){
        const responseData = await response.json()
        return responseData;
        }
        else{
            alert(`ERROR: ${response.status} Please Try Again!`)
        }

         
    }

    changeLocation(city, state){
        this.city = city;
        this.state = state; 
    }
}
