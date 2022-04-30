import { Container, Row, Col, Stack, Card } from 'react-bootstrap'
import { WiDaySunny, WiDayCloudy, WiCloud, WiCloudy, WiRainMix, WiSunrise, WiNightSleet, WiStormShowers, WiSnowflakeCold, WiWindy, WiDayThunderstorm, WiThunderstorm, WiRain } from 'react-icons/wi'
import { BsClouds } from 'react-icons/bs'
import { IoIosSnow } from 'react-icons/io'
import './style.css'

function CardSevenDays(laterDays) {



    function WriteDay(day) {
        const date = new Date((day) * 1000);
        const daydate = date.getDay()
        switch (daydate) {
            case 0: return 'Sunday';
                break;
            case 1: return 'Monday';
                break;
            case 2: return 'Thusday';
                break;
            case 3: return 'Wednesday';
                break;
            case 4: return 'Thursday';
                break;
            case 5: return 'Friday';
                break;
            case 6: return 'Saturday';
                break;
        }
    }

    function PrintWeather(typeWeahter) {
        switch (typeWeahter) {
            case "Clear sky":
                return WiDaySunny();
                break;
            case "Few clouds":
                return WiDayCloudy();
                break;
            case "Scattered clouds":
                return BsClouds();
                break;
            case "Broken clouds":
                return WiCloudy();
                break;
            case "Shower rain":
                return WiRainMix();
                break;
            case "Rain":
                return WiRain();
                break;
            case "Thunderstorm":
                return WiThunderstorm();
                break;
            case "Snow":
                return IoIosSnow();
                break;
            case "Mist":
                return WiWindy();
                break;
            case "Clouds":
                return WiCloud();
                break;
            case "Clear":
                return WiSunrise();
                break;
        }
    }

    let arraySpiners = [1, 2, 3, 4, 5, 6, 7]

    return (
        <Container>
            <Row>
                <Col xs={{ span: 10, offset: 1 }} >
                    <Stack direction="horizontal" className="d-flex justify-content-between mt-4 "  >
                        {laterDays.infoDays ? laterDays.infoDays?.map((c, i) => {
                            if (i != 0) {
                                return (
                                    <Card key={c.dt} style={{ width: '115px', height: '160px' }} className='shadow d-flex justify-content-center'   >

                                        <Card.Title className="titleSevenCards text-center text-info mt-2" style={{ width: '100%' }}>
                                            {WriteDay(c.dt)}
                                        </Card.Title>
                                        <div className="d-flex justify-content-center mt-2" style={{ width: '100%' }}> <div className='border border-1 ' style={{ width: '80%' }}> </div></div>
                                        <Card.Body className="iconSevenCards text-center p-0" style={{ width: '100%' }}>
                                            {PrintWeather(c.weather[0].main)}
                                        </Card.Body>

                                    </Card>
                                );
                            }
                        }) : arraySpiners.map(() => {
                            return (
                                <Card style={{ width: '115px', height: '160px' }} className='shadowCards p-2 d-flex justify-content-center'>
                                    <div class="d-flex justify-content-center">
                                        <div class="spinner-border text-primary"></div>
                                    </div>
                                </Card>)
                        })
                        }
                    </Stack>
                </Col>
            </Row>
        </Container>
    )

}

export default CardSevenDays;
