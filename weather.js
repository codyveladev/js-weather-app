 
class Weather{
    constructor(city, state, country){
      
        this.apiKey = "95ca468302e24da198c1a6ac44d33d53";
        this.city = city; 
        this.state = state;
        this.country = country; 

    }
    //Fetch Weather 
    async getWeather(){
        
    
        const response = await fetch(
          `https://api.weatherbit.io/v2.0/current?city=${this.city},${this.state}&key=${this.apiKey}`
        );
        if(response.status === 200){
        const responseData = await response.json()
        console.log(responseData);
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
