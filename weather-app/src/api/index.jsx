import { useContext } from 'react';





export const getLatAndLonFromCity = async (citySearch) => {
    

    let key ='da66c2d9d69cd9be8dc442074e110412';


    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${key}`)
    const d = await r.json()
    return d
}

export const getWeatherByLocation = async (lat, lon, unit) => {


     let key ='da66c2d9d69cd9be8dc442074e110412'; 

     



    const r = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`)
    const d = await r.json()
    return d
}

export const getCityName = async (lat, lon) => {

    let key = '1a1e6b25ceb11d049c296f3b556eb6d6'; 

    const r = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    const d = await r.json()
    return d

}