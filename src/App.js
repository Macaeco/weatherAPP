
import './App.css';
import WeatherContexProvider from './components/context/provider.jsx';


import WeatherCard from './components/weatherCard';
import Header from './components/header';



function App() {
 
  return (
    <WeatherContexProvider>
     
    
      
      <WeatherCard></WeatherCard>
    </WeatherContexProvider>
    
  )
}




export default App;