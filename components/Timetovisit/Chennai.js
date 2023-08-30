
import React, { useState } from 'react';
import '../../components/Styles/Timetovisit/Chennai.css'
import { Row,Col } from 'react-bootstrap'
import {Button,Offcanvas } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Chennai1 from '../../img/chennai1.jpeg'
import Chennai2 from '../../img/chennai2.jpeg'
import Chennai3 from '../../img/chennai3.jpeg'


const Chennai = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className='container'>
      <h1 className='tourism-heading text-center'>
        TAMILNADU TOURISM
      </h1>
      <h5 className='tourism-sub-heading text-center'>
         Best Time To Visit
      </h5>
      <Row className="align-items-center">
        <Col md={6}  className="text-right">
          <h1 className='besttimetovisit-primary-heading'>01. Chennai</h1>
          <h4 className='besttimetovisit-primary-sub-heading'>What is the best time to visit:</h4>
          <p className='besttimetovisit-text'> 
            October to February during the winters and the pre-monsoons season is the best time to visit Chennai. This time of the year is considered as the best time to explore the metropolitan city as summers are scorching and monsoons bring torrential downpours and cyclones. Its geographical location on the beautiful coastline mostly keeps the city's weather hot and humid.
          </p>
          <p className='besttimetovisit-text besttimetovisit-bottomtext'>
            Chennai is one of the cities that has successfully blended the modern, traditional and sides with ease. The city welcomes everyone who wants to seek a soulful and spiritual connection but also those who love shopping for sarees and enjoy good food. There is no conundrum in Chennai when you visit. It's all about the moment, whether you decide to take a stroll down Marina Beach.
          </p>
        </Col>
        <Col md={6} className='model-margintop'> 
         <div
            className="modal show"
            style={{ display: 'block', position: 'relative' }}
            >
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title className='text-center modal-heading'>More About Best Time To Travel To Chennai</Modal.Title>
              </Modal.Header>
              <Modal.Body className=''>
                <div className='modal-img'>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <img 
                        src={Chennai1} 
                        alt="Chennai,India Source_img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Chennai,<br />India <br /> Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                        src={Chennai2} 
                        alt="Chennai,Kathipara Source_img"
                        className='' 
                        style={{width:'100px',height:'150px'}}
                      />
                      <p className='text-center'>Chennai,<br />Kathipara<br /> Source</p>
                    </div>
                    <div className='col-sm-4'>
                      <img 
                       src={Chennai3} 
                       alt="Chennai,Beach Source_img"
                       className=''
                       style={{width:'100px',height:'150px'}}
                     />  
                     <p className='text-center'>Chennai,<br />Beach<br /> Source</p>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleShow}>Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>  
               
          <div>
              
             
            <Offcanvas show={show} onHide={handleClose} placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='offcanvas-title'>Best Time To Visit In <br />Chennai</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <h4 className='season-title'>Chennai in Winters (November - February)</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    Winters, the best time to visit Chennai, begin in November and last till February. Even the transitional month of October is quite good for exploring the city. The weather is quite pleasant with the maximum temperature hovering around 30°C and the minimum around 22°C. Its proximity to the coastline also results in occasional rains, but it will not be something that will hamper travel plans to a great extent. Kapaleeshwarar temple, Goverment Museum, Fort St George, St. Andrews Church, Fort Museum, Nalli Silks, Kalakshetra Foundation, Vivekananda House etc. are some of the attractions that can be seen when in Chennai. The season is also famous for the array of festivals organised in the city like the Dance and Music Festival in December, Travel & Tourism Fair and Pongal in January and the Natyanjali Dance Festival held in February/ March. These events are traditional and important celebrations of Chennai and its culture and must not be missed when there.
                  </p>
                  <h4 className='season-title'>Chennai in Summers (March-June)</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    March marks the onset of the summer season in Chennai. It lasts till June and visiting the  city during this time is not for the faint- hearted, some say. The days are blazing hot with the temperatures soaring as high as 39°C and the nights are equally warm with the minimum hovering around 27°C. Exploring the cityscape during this time of the year is an extremely exhausting affair and is, therefore, not advised to tourists.
                  </p>
                  <h4 className='season-title'>Chennai in Monsoons (July-September)</h4>
                  <p className='season-text besttimetovisit-bottomtext'>
                    Chennai is susceptible to heavy downpours and cyclones between the months of July and September. These months mark the monsoon season in the region and is considered off-season as tourism does not really thrive here. The extreme rainfalls and strong winds could prove to be a hindrance to sightseeing and, therefore, the monsoon season is not recommended to tourists. The hotel tariffs, however, drop drastically during the season, making it a decent option for budget travellers. In case one has to visit Chennai, they may want to plan a trip at the onset of the season when the showers are moderate and allow travelling through the city.
                  </p>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Chennai  
