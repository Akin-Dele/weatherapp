const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

//function to now update the UI
const updateUI = (data) => {

    //commented out coz of destructuring deckare the variables sent from the updateCity-UpdateUi function
    // const cityDet = data.cityDet;
    // const weather = data.weather;

    const { cityDet, weather } = data;
    //updating the icons
    const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    //Update the time Image
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    //Set the source attribute of the image
    time.setAttribute('src', timeSrc);
    
    //Update the Details template
    details.innerHTML = ` <h5 class="my-3">${cityDet.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>`
    // check if the card class has display none class
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}

const updateCity = async(city) => {
   // console.log(city);
    const cityDet = await getCity(city);
    const weather = await getWeather(cityDet.Key);
   // returning data to the updatecity function
   return { cityDet, weather};
}

//This is is mother of all the functions as it is the beginning on them all
cityForm.addEventListener('submit', e => {
    e.preventDefault();
    let city  = e.target.city.value.trim();

    cityForm.reset();

    //Update the page with the city data
    // then recives the citydetial and weater from update city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
    //set local storage;
    localStorage.setItem('city', city);
})

if (localStorage.getItem('city')) {
    updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err))
}