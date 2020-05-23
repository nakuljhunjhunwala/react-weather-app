import React, {useState} from 'react';


function App() {

const[search , setSearch] = useState("");
const [weather , setWeather] = useState({});
const baseURL = "http://api.openweathermap.org/data/2.5/"

function findWeather(e) {

if (e.key === "Enter") {
  fetch(`${baseURL}weather?q=${search}&units=metric&appid=caa42e69e90ab35e0b7a00ea0a653f50`)
    .then(res => res.json())
    .catch(error => alert(error))
    .then(data => {console.log(data) ; data.cod !== "404" ? setWeather(data) : alert("Enter Correct City name")})
    .catch(error => alert(error))
setSearch("");
}

}


  return (
    <div className={weather.main ? weather.main.temp >16 ? "app warm" : "app" : "app"}>
<h1>Check Weather</h1>
<div className="search-box">
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value) }
    placeholder="Enter City name"
    onKeyPress={ findWeather}
  >
    </input>
{/* <button>Search</button> */}
</div>

{
  weather.main  && <div className="weather">
    <div className="city-name">
      {weather.name}, {weather.sys.country}
    </div>
    <div className="weather-box">
      <div className="temp">
        {Math.round(weather.main.temp)}°c
      </div>
    </div>
    <div className="climate">
    {weather.weather[0].main}
    </div>
  </div>

}


    </div>
  );
}

export default App;
