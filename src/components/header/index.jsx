import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import './style.css'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";
import recortada from '../../assets/recortada.jpg'

import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Stack } from "react-bootstrap";
import React, { useContext } from "react";
import { weatherContext } from "../context/context";
import { getLatAndLonFromCity } from "../../api";
// import {BsGeoAltFill} from 'react-icons/Bs'


function Header(props) {



  const handleMyLocation = () => {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      let crd = pos.coords;

      props.upload.updateLat(crd.latitude)
      props.upload.updateLon(crd.longitude)
    };

    function error(err) {

      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  const handleSearchCity = e => {
    e.preventDefault()
   
    getLatAndLonFromCity(e.target.searchCity.value)
      .then(d => {

        props.upload.updateLat(d.coord.lat)
        props.upload.updateLon(d.coord.lon)
      })
  }







  return (
    <React.Fragment>
      <Container fluid>
        <img src={recortada} style={{ width: '100%' }} className='positionImgHeader' alt="..."></img>
      </Container>
      <Container>
        <Row>
          <Col xl={12} className='d-flex justify-content-center'>
            <Navbar bg="primary" expand="lg" style={{ width: '100%', height: '56px' }} className="p-4">
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="m-auto my-2 p-2 gap-5 my-lg-0 d-flex justify-content-between pl-5 pr-5" style={{ width: '60%' }} navbarScroll>
                  <p href="#action1" className="textColorA" >Weather</p>
                  <p href="#action1" className="textColorA">Favorite</p>
                  <p href="#action1" className="textColorA">Types</p>
                  <p href="#action1" className="textColorA">Seasson</p>
                </Nav>
                <div className='bg-white mr-5 rounded' style={{ width: '300px', height: '38px' }} >
                  <Form className="d-flex justify-content-center" onSubmit={handleSearchCity}>
                    <FormControl
                      type="search"
                      placeholder="Search..."
                      className="border-0"

                      aria-label="Search"
                      name="searchCity"
                    />
                    <Button variant="primary" className="bg-white border-0" type="submit">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.207 18.8618L13.8667 12.5215C14.8506 11.2495 15.3828 9.69434 15.3828 8.05859C15.3828 6.10059 14.6187 4.26465 13.2368 2.88037C11.855 1.49609 10.0142 0.734375 8.05859 0.734375C6.10303 0.734375 4.26221 1.49854 2.88037 2.88037C1.49609 4.26221 0.734375 6.10059 0.734375 8.05859C0.734375 10.0142 1.49853 11.855 2.88037 13.2368C4.26221 14.6211 6.10059 15.3828 8.05859 15.3828C9.69433 15.3828 11.2471 14.8506 12.519 13.8691L18.8594 20.207C18.878 20.2256 18.9 20.2404 18.9243 20.2505C18.9486 20.2605 18.9747 20.2657 19.001 20.2657C19.0273 20.2657 19.0533 20.2605 19.0776 20.2505C19.1019 20.2404 19.124 20.2256 19.1426 20.207L20.207 19.145C20.2256 19.1264 20.2404 19.1044 20.2505 19.0801C20.2605 19.0558 20.2657 19.0297 20.2657 19.0034C20.2657 18.9771 20.2605 18.9511 20.2505 18.9268C20.2404 18.9025 20.2256 18.8804 20.207 18.8618ZM11.9258 11.9258C10.8906 12.9585 9.51855 13.5273 8.05859 13.5273C6.59863 13.5273 5.22656 12.9585 4.19141 11.9258C3.15869 10.8906 2.58984 9.51856 2.58984 8.05859C2.58984 6.59863 3.15869 5.22412 4.19141 4.19141C5.22656 3.15869 6.59863 2.58984 8.05859 2.58984C9.51855 2.58984 10.8931 3.15625 11.9258 4.19141C12.9585 5.22656 13.5273 6.59863 13.5273 8.05859C13.5273 9.51856 12.9585 10.8931 11.9258 11.9258Z" fill="#A5A5A5" /></svg>
                    </Button>
                    <Button variant="primary" className="bg-white border-0" onClick={handleMyLocation}>
                      <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8998 4.3991C16.0108 6.78976 15.7587 9.60393 14.5285 11.891C13.5193 13.7674 12.0132 15.3193 10.772 17.0372C10.2046 17.8237 9.63167 18.6413 9.24209 19.5369C9.11284 19.8348 9.001 20.1401 8.891 20.4463C8.78009 20.7515 8.68567 21.0632 8.57934 21.3703C8.47942 21.6581 8.363 21.9973 8.00459 22H7.99817C7.571 21.9991 7.46742 21.5142 7.36109 21.1869C7.10075 20.3858 6.8285 19.6167 6.427 18.8723C5.9595 18.007 5.37742 17.2068 4.78617 16.4239L14.8998 4.3991ZM4.83292 7.06293L1.20383 11.3777C1.8675 12.7893 2.87308 14.0021 3.83558 15.2093C4.062 15.4935 4.28842 15.7795 4.51117 16.0673L9.07984 10.6361L9.05325 10.6453C7.45734 11.1962 5.66983 10.3785 5.02725 8.82385C4.93935 8.61282 4.8751 8.3927 4.83567 8.16751C4.77792 7.76693 4.76508 7.46993 4.832 7.06935L4.83292 7.06293V7.06293ZM2.03433 2.8866L2.03158 2.89026C0.246833 5.15076 -0.0593334 8.28026 1.00767 10.9294L5.39392 5.71451L5.34075 5.66868L2.03433 2.8866ZM10.4393 0.399682L6.92109 4.58243C6.92918 4.57897 6.93744 4.57592 6.94584 4.57326C8.4125 4.06818 10.0653 4.71076 10.8142 6.06376C10.9755 6.35618 11.1103 6.68985 11.1598 7.02168C11.2221 7.43051 11.2377 7.73026 11.1708 8.14001L11.168 8.15468L14.6843 3.97376C13.7654 2.29778 12.2548 1.02445 10.4475 0.402432L10.4393 0.399682ZM5.67717 5.37901L9.98184 0.261265L9.93875 0.250265C9.30178 0.0828316 8.64578 -0.00128655 7.98717 1.48719e-05C6.92072 0.0100036 5.86786 0.240399 4.89471 0.676732C3.92156 1.11306 3.04914 1.74591 2.33225 2.53551L2.31758 2.55201L5.67717 5.37901V5.37901Z" fill="#A5A5A5" /></svg>
                    </Button>
                  </Form>
                </div>

              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>

    </React.Fragment>

  );
}
export default Header;
