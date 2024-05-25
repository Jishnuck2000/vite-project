import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [weathercount, setWeathercount] = useState({
    main: [{}],
    weather: [{}],
  });

  const [first, setfirst] = useState("");
  const [err, seterr] = useState(false);
  const handlechange = (event) => {
    setfirst(event.target.value);
  };
  useEffect(() => {
    console.log(first);
  });
  const search = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?&appid=92cfcf567578b9576ec31b2cdcda14a9&units=metric&q=${first}`
      )
      .then((response) => {
        console.log(response.data);
        setWeathercount(response.data);
      })
      .catch((err) => {
        console.log("err");
        seterr("error");
      });
  };
  return (
    <div>
            <div className="wh"><img src="/title.png" className="wh-h3"></img></div>

      <div className="body">

        <div className="display">
          <div>
            <form action="" method="get">
            <div className="display-i1">
              <input
                type="text"
                className="input"
                name="Place"
                onChange={handlechange}
              />
                           
<div className="img-s">
              <button id="search">
                <img
                  src="search1.png"
                  alt=""
                  className="search"
                  onClick={search}
                />
              </button>
              </div>
              </div>
            </form>
          </div>
          
        </div>
        <div className="body-wh2">
        <div className="name"> <img src="sun.png" className="sun" />{" "}</div>

        <div className="name">{weathercount.name}</div>

<div className="name">{weathercount.main.temp} &deg;C</div>

<div className="name">
  {weathercount.main.humidity}{" "}
</div>
<div className="name" style={{ color: "#ff3d3d" }}>{err !== false}</div>
<div className="name">{weathercount.weather[0].main}</div>
<div className="name1">{weathercount.weather[0].description}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
