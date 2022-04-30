
import { Col, Row, Card } from 'react-bootstrap'
import './style.css'

function SecondCard(props) {




  return (
    <Col xl={3}>
      <Card className="p-1 border-0 bg-white rounded" style={{ width: '326px', height: '231px' }} >

        <Card.Text className='d-flex justify-content-between p-1 mt-2 mb-2 unMargin text-center ' style={{ width: '100%' }}>
          <p>Thermal Sensation: </p>  <p>{parseInt(props.infoDays?.[0]['feels_like'].day) ? `${parseInt(props.infoDays?.[0]['feels_like'].day)} ${props.units !== 'imperial' ? 'ºC' : 'ºF'}` : <div class="spinner-border text-primary" style={{ width: '20px', height: '20px' }}></div>}</p>
        </Card.Text>
        <div className='lineSecondCard mb-1 mt-1'></div>
        <Card.Text className='d-flex justify-content-between p-1  mt-2 mb-2 unMargin' style={{ width: '100%' }}>
          <p>Precipitation Probability: </p> 
          <p>{props.infoDays?.[0].pop ? `${parseInt(props.infoDays?.[0].pop * 100)} %` :   <div class="spinner-border text-primary" style={{ width: '20px', height: '20px' }}></div> }</p>
        </Card.Text>
        <div className='lineSecondCard mb-1 mt-1'></div>
        <Card.Text className='d-flex justify-content-between p-1   mt-2 mb-2 unMargin' style={{ width: '100%' }}>
          <p>Wind: </p>  
          <p>{props.infoDays?.[0]?.wind_speed ? `${props.infoDays?.[0]?.wind_speed.toFixed(2)} ${props.units !== 'imperial' ? 'Km/h' : 'Mill/h'}` : <div class="spinner-border text-primary" style={{ width: '20px', height: '20px' }}></div>}</p>

        </Card.Text>
        <div className='lineSecondCard mb-1 mt-1'></div>
        <Card.Text className='d-flex justify-content-between p-1   mt-2 mb-2 unMargin' style={{ width: '100%' }}>
          <p>Wind Gust: </p> 
          <p>{props.infoDays?.[0]?.wind_gust ? `${props.infoDays?.[0]?.wind_gust.toFixed(2)} ${props.units !== 'imperial' ? 'Km/h' : 'Mill/h'}` : <div class="spinner-border text-primary" style={{ width: '20px', height: '20px' }}></div>}</p>
        </Card.Text>

      </Card>
    </Col>
  )

}

export default SecondCard;