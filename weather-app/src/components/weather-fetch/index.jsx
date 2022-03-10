import { useEffect, useState } from "react"

function WeatherFetch(){

    const [data, updateData]=useState([])

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0819690359d369d6da230a4ab8652a93')
        .then (j => j.json())
        .then (data =>updateData(data))
    }, [])
    console.log(data)

    return(
        <p>{JSON.stringify(data)}</p>
    )
}
export default WeatherFetch;
