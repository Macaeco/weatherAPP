
import React from 'react';
import './App.css';
import WeatherFetch from './components/weather-fetch';
import WeatherCard from './components/weatherCard';




function App() {









  return (
    <React.Fragment>

      <WeatherFetch></WeatherFetch>
      <WeatherCard></WeatherCard>

    </React.Fragment>
    
  );
}

export default App;
