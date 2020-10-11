 
//INIT
const weather = new Weather('Houston', 'TX');
const ui =  new UI(weather); 

document.addEventListener('DOMContentLoaded', getWeather); 

//for the changes
document.getElementById('w-change-btn').addEventListener('click', changeLocationFromModal); 

function changeLocationFromModal(e) {

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;


    weather.changeLocation(city, state); 
    //Get weather 
    getWeather();
    //close modal
    $('#locModal').modal('hide');

    
}
console.log(weather.status);

function getWeather(){
weather.getWeather()
.then(result => {

    ui.paint(result);

})
.catch(err => console.log(err)); 
}


