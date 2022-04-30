import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useFood } from "../food-object/index.js";
import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";

import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import Stack from 'react-bootstrap/Stack'

import { useEffect, useContext, useState } from "react"
import { getCityName, getLatAndLonFromCity, getWeatherByLocation } from "../../api/index.jsx";
import { weatherContext } from "../context/context.jsx";
import SecondCard from "../second-card/index.jsx"
import FirstCard from "../firsrt-card/index.jsx";


import './style.css'
import CardSevenDays from "../CardSevenDays/index.js";
import FoodCard from "../filterFood/index.jsx";
import Header from '../header/index.jsx'

let arraynumber = [1, 2, 3, 4, 5, 6, 7];
let arrayd = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

function WeatherCard() {


  // PARTE DE FETCH 
  const [lat, updateLat, lon, updateLon, weather, updatetWeather, unitUse, updateUnitUse, city, uploadCity] = useContext(weatherContext);
  const { food, updateFood } = useFood([])


  useEffect(() => {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      let crd = pos.coords;

      updateLat(crd.latitude)
      updateLon(crd.longitude)
    };

    function error(err) {

      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

  }, [])
  

  useEffect(() => {
 
    if (lon !== undefined && lat !== undefined) {
      getWeatherByLocation(lat, lon, unitUse)
        .then(d => {
          updatetWeather(d);


        })

     if (lon !== undefined && lat !== undefined){
       getCityName(lat, lon)
       .then(d => {
        uploadCity(d)
       })
     }

    }
  }, [lat, lon, unitUse])


  
console.log(weather)
  return (
    <React.Fragment>
    <Header upload={{updateLat, updateLon}}></Header>
    <Container>
      
      <Row xs={12} xl={12} >
        <Stack direction="horizontal" className='d-flex justify-content-center mt-4' style={{ width: '100%'}} gap={5}>


          <FirstCard upload={{unitUse, updateUnitUse}} city={city} infoDays={weather?.daily}></FirstCard>

          <SecondCard units={unitUse} infoDays={weather?.daily}></SecondCard>


         <FoodCard  infoDays={weather?.daily}></FoodCard>

        </Stack>
      </Row>
      

    <CardSevenDays infoDays={weather?.daily}></CardSevenDays>
   

      

    </Container>
    </React.Fragment>
  );
}
export default WeatherCard;
