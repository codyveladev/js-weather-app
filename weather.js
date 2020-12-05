 
class Weather{
    constructor(city, state, country){
      
        this.apiKey = "879cb9d586aa42acb7a25ecc1080000b";
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
