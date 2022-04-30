import { useContext } from 'react';
import {apikey} from "../api-key/key.js"





export const getLatAndLonFromCity = async (citySearch) => {
    


    let key = apikey;



    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${key}`)
    const d = await r.json()
    return d
}

export const getWeatherByLocation = async (lat, lon, unit) => {



     let key = apikey; 


     



    const r = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`)
    const d = await r.json()
    return d
}

export const getCityName = async (lat, lon) => {

    let key = process.env.REACT_API_KEY; 

    const r = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    const d = await r.json()
    return d

}