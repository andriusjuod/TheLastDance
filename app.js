"use strict"

const id = 'b694b2751594e20faaa4e0a1b4b934f5';
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${id}&units=metric`;
const button = document.querySelector('button');
const input = document.querySelector('input');
const array = [];



function getCityData() {
    const cityName = document.querySelector('[name=city]');
    return fetch(`${url}&q=${cityName.value}`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            return showCityByName(json);
        })
        .catch((error) => {
            alert("Your city was not found, please check spelling!");
        });
}



button.addEventListener('click', (event) => {
    getCityData(input.value);
});





function showCityByName(data) {
    const cityData = document.getElementById('cities');
    const exiteBtn = document.getElementById('closeButton');
    return cityData.innerHTML += `
    
    
    <div class="output-style">
    
 
    
    <span class="spanOne" onClick="closeButton(event)"></span>
    <span class="spanTwo" onClick="closeButton(event)"></span>
    
    
    

    <h3 style="text-align:center; margin-top:0px;">${data.name}<h3> 
    
    
    
    <div class="output-element"> 
    
    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"> 
    <p class="temp">${data.main.temp.toFixed(0)}<sup>°C</sup><p> 
    
    </div>
    
    <h5 class>Description: ${data.weather[0].description}<h5>
    <p class="dateText">Humidity: ${data.main.humidity}%</p>
    <p class="dateText">${Date()}</p>
    </div > 
    `;
}


function closeButton(event) {
    event.target.parentElement.remove()
} 