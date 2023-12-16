var weatherAPIKey = "8737753a701727f24ddb366066ef10a6";
var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${weatherAPIKey}`;


document.getElementById("today-date").innerHTML = dayjs().format("MM/DD/YYYY");
document.getElementById("day-one-date").innerHTML = dayjs().format("MM/DD/YYYY").add(dayjs.duration(1, 'day'));
document.getElementById("day-two-date").innerHTML = dayjs().format("MM/DD/YYYY").add(dayjs.duration(2, 'day'));

const citySubmitHandler = function (event) {
    event.preventDefault();
  
    currentCity = document.getElementById("search-bar").val().trim();
  
    if (currentCity) {
        getUserCity(currentCity);
        
    } else {
      alert('Please enter a City');
    }
  };


  const doWeatherApp = (currentCity) => {
    currentCity.preventDefault();
    currentCity = document.getElementById("search-bar").val().trim();

    const response = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${weatherAPIKey}`);
    const data = response.json();



  }

  doWeatherApp();














