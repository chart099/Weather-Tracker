var weatherAPIKey = "8737753a701727f24ddb366066ef10a6";
// var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${weatherAPIKey}`;


document.getElementById("today-date").innerHTML = dayjs().format("MM/DD/YYYY");
document.getElementById("day-one-date").innerHTML = dayjs().add(1, 'day').format("MM/DD/YYYY")
document.getElementById("day-two-date").innerHTML = dayjs().add(2, 'day').format("MM/DD/YYYY")
document.getElementById("day-three-date").innerHTML = dayjs().add(3, 'day').format("MM/DD/YYYY")
document.getElementById("day-four-date").innerHTML = dayjs().add(4, 'day').format("MM/DD/YYYY")
document.getElementById("day-five-date").innerHTML = dayjs().add(5, 'day').format("MM/DD/YYYY")



const getWeatherResults = (searchCity) => {
    searchCity.preventDefault();
   
    const weatherUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${weatherAPIKey}`;
    fetch (weatherUrl)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
  
        return response.json();
      })
      .then(function (cityInput){
        document.getElementById("search-bar").textContent =  cityInput.search.query;

        if(!cityInput.results.length) {
          console.log("No data found")
          document.getElementById('display-area').innerHTML = "<h1>No weather data found</h1>"
        } else {
          for (let i=0; i< cityInput.results.length; i++) {
            displayResults(cityInput.results[i])
          }
        }
      })
      .catch(function(error){
        console.error(error);
      })

    }

const displayResults=(result)=> {
  console.log(result)
}




  function handleWeatherFormSubmit(event){
    event.preventDefault();

    currentCity = document.getElementById("search-bar").val().trim();

    if (!searchCity) {
      alert("You need to input a city to search for weather!")
      return
    }
    getWeatherResults(searchCity);
  }

const cityForm = document.querySelector("#city-search-form")
cityForm.addEventListener('submit', handleWeatherFormSubmit);


















