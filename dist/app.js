//INIT Storage
const storage = new Storage();
//get stored location 
const weatherLocation = storage.getLocationData();
//INIT weather
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//INIT UI
const ui =  new UI(weather); 

document.addEventListener('DOMContentLoaded', getWeather); 

//for the changes
document.getElementById('w-change-btn').addEventListener('click', changeLocationFromModal); 

function changeLocationFromModal(e) {

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;


    weather.changeLocation(city, state);
    //set location in LS
    storage.setLocationData(city, state); 

    //Get weather 
    getWeather();
    //close modal
    $('#locModal').modal('hide');

    
}

function getWeather(){
weather.getWeather()
.then(result => {

    ui.paint(result);

})
.catch(err => console.log(err)); 
}


