import { useState } from "react";
import { weatherContext } from "../context/context.jsx";

function WeatherContexProvider({ children }) {

    const [lat, updateLat] = useState()
    const [lon, updateLon] = useState()
    const [weather, updatetWeather] = useState([])
    const [unitUse, updateUnitUse] = useState('metric')
    const [city, uploadCity] = useState('')

    //imperial



    return (
        <weatherContext.Provider value={[lat, updateLat, lon, updateLon, weather, updatetWeather, unitUse, updateUnitUse, city, uploadCity]}>{children}</weatherContext.Provider>
    )
}
export default WeatherContexProvider;