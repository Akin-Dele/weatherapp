const key = 'dnnccAMPtAFlIozNaFefhgnpwul77iZR';


const getWeather = async (id) => {
    //create the url for the call
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    // create the response with await
    const response = await fetch(base+query);
    if(response.status !== 200) {
        throw new Error('The URL is incorrect');
    }
    const data = await response.json();
    return data[0];
}

//Get City information first
const getCity = async (city) => {
    // Create the URL where data will be fecthed from - city will be a parameter
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    // create the response with await
    const response = await fetch(base+query);
    if(response.status !== 200) {
        throw new Error('The URL is incorrect');
    }
    const data = await response.json();
    return data[0];
}

// getCity('lagos')
//     .then(data => getWeather(data.Key))
//          .then(data => console.log(data))
//     .catch(err => console.log('There is an Error: ', err.message));