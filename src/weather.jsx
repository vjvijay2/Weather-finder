import React, { useState } from 'react';
import './index.css';  // Import the Tailwind CSS styles
import axios from 'axios';

function Weather() {
    const[city,setcity]=useState("")
    const[weather,setweather]=useState("")
    const[temp,settemp]=useState("")
    const[desc,setdescp]=useState("")

    function handlecity(evt)
    {
        setcity(evt.target.value)
    }

    function getweather(){
        var weatherdata=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed67c1699e439e01788e3cba918f3756`)
        weatherdata.then(function(success){
            console.log(success.data)
            setweather(success.data.weather[0].main)
            settemp(success.data.weather[0].description )
            setdescp(success.data.main.temp)
        })
    }
    return (
        <div className="bg-black p--20">
            <div className="bg-green-400 p-10 reounded-md"></div>
            <h1>I can find you a weather report about your city</h1>
            <input onChange={handlecity} type="text" className="mt-2 border border-black rounded-md" />
            <button onClick={getweather} className="bg-black text-white p-2 rounded-md mt-2"></button>
            <div className="mt-2">
                <h1><b> Weather:</b>{weather}</h1>
                <p><b>Temperature:</b>{desc}</p>
                <p><b>Description:</b>{temp}</p>
            </div>
        </div>

    )
}
export default Weather